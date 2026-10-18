using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Modules.Common.Domain.Results;

namespace Modules.Common.API.Extensions;

public static class EndpointResultsExtensions
{
    // Transforms our custom Result<T> into standard HTTP responses (IResult)
    public static IResult ToHttpResult<T>(this Result<T> result)
    {
        if (result.IsSuccess)
        {
            return Results.Ok(result.Value);
        }

        return MapErrorToResult(result.Error);
    }

    public static IResult ToHttpResult(this Result result)
    {
        if (result.IsSuccess)
        {
            return Results.NoContent();
        }

        return MapErrorToResult(result.Error);
    }

    private static IResult MapErrorToResult(Error error)
    {
        return error.Type switch
        {
            ErrorType.Validation => Results.BadRequest(CreateProblemDetails("Validation Error", StatusCodes.Status400BadRequest, error)),
            ErrorType.NotFound => Results.NotFound(CreateProblemDetails("Not Found", StatusCodes.Status404NotFound, error)),
            ErrorType.Conflict => Results.Conflict(CreateProblemDetails("Conflict", StatusCodes.Status409Conflict, error)),
            _ => Results.BadRequest(CreateProblemDetails("Bad Request", StatusCodes.Status400BadRequest, error))
        };
    }

    private static ProblemDetails CreateProblemDetails(string title, int status, Error error)
    {
        return new ProblemDetails
        {
            Title = title,
            Status = status,
            Detail = error.Description,
            Extensions = { ["error_code"] = error.Code }
        };
    }
}