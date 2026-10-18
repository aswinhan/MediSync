namespace Modules.Common.Application.Behaviors;

public sealed class ValidationBehavior<TRequest, TResponse>(IEnumerable<IValidator<TRequest>> validators)
    : IPipelineBehavior<TRequest, TResponse>
    where TRequest : IRequest<TResponse>
{
    public async Task<TResponse> Handle(TRequest request, RequestHandlerDelegate<TResponse> next, CancellationToken cancellationToken)
    {
        // If the request doesn't have any validators defined, proceed to the handler
        if (!validators.Any())
        {
            return await next();
        }

        var context = new ValidationContext<TRequest>(request);

        // Run all validators asynchronously
        var validationResults = await Task.WhenAll(validators.Select(v => v.ValidateAsync(context, cancellationToken)));
        var failures = validationResults
            .SelectMany(r => r.Errors)
            .Where(f => f != null)
            .ToList();

        // If validation failed, short-circuit and return a Failure Result dynamically
        if (failures.Count != 0)
        {
            // Combine all validation errors into a single error object
            var errorDetails = string.Join(" | ", failures.Select(f => $"{f.PropertyName}: {f.ErrorMessage}"));
            var validationError = Error.Validation("Validation.Failed", errorDetails);

            // Use reflection to return Result<TValue>.Failure(validationError)
            if (typeof(TResponse).IsGenericType && typeof(TResponse).GetGenericTypeDefinition() == typeof(Result<>))
            {
                var resultType = typeof(TResponse).GetGenericArguments()[0];
                var method = typeof(Result<>)
                    .MakeGenericType(resultType)
                    .GetMethod(nameof(Result<>.Failure), BindingFlags.Public | BindingFlags.Static);

                return (TResponse)method!.Invoke(null, [validationError])!;
            }
            else if (typeof(TResponse) == typeof(Result))
            {
                return (TResponse)(object)Result.Failure(validationError);
            }

            // Fallback for non-result types (shouldn't happen with our strictly typed IHandler interfaces)
            throw new ValidationException(failures);
        }

        // If valid, proceed to the actual MediatR Handler
        return await next();
    }
}