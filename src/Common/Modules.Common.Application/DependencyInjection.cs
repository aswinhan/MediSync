namespace Modules.Common.Application;

public static class DependencyInjection
{
    public static IServiceCollection AddCommonApplication(this IServiceCollection services, Assembly[] moduleAssemblies)
    {
        // Wire up MediatR for the entire solution by scanning all module assemblies
        services.AddMediatR(config =>
        {
            config.RegisterServicesFromAssemblies(moduleAssemblies);

            // Register our fail-fast validation behavior into the pipeline
            config.AddOpenBehavior(typeof(ValidationBehavior<,>));
        });

        // Register all FluentValidation rules dynamically
        services.AddValidatorsFromAssemblies(moduleAssemblies, includeInternalTypes: true);

        return services;
    }
}