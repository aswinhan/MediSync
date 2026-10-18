using System.Reflection;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Modules.Common.API.Abstractions;

namespace Modules.Common.API.Extensions;

public static class MapEndpointExtensions
{
    // 1. Scans loaded assemblies and registers all endpoints in the DI container
    public static IServiceCollection AddApiEndpoints(this IServiceCollection services, Assembly[] assemblies)
    {
        var endpoints = assemblies
            .SelectMany(assembly => assembly.GetTypes())
            .Where(type => typeof(IApiEndpoint).IsAssignableFrom(type) && !type.IsInterface && !type.IsAbstract)
            .ToList();

        foreach (var endpoint in endpoints)
        {
            services.AddTransient(typeof(IApiEndpoint), endpoint);
        }

        return services;
    }

    // 2. Maps the registered endpoints to the HTTP request pipeline
    public static IApplicationBuilder MapApiEndpoints(this WebApplication app)
    {
        var endpoints = app.Services.GetRequiredService<IEnumerable<IApiEndpoint>>();

        // Base route for the entire application
        var apiGroup = app.MapGroup("api/v1");

        foreach (var endpoint in endpoints)
        {
            endpoint.MapEndpoint(apiGroup);
        }

        return app;
    }
}