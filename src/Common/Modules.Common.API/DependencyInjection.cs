using Microsoft.Extensions.DependencyInjection;
using Modules.Common.API.ErrorHandling;

namespace Modules.Common.API;

public static class DependencyInjection
{
    public static IServiceCollection AddCommonApi(this IServiceCollection services)
    {
        // Register the global exception handler
        services.AddExceptionHandler<GlobalExceptionHandler>();
        services.AddProblemDetails();

        return services;
    }
}