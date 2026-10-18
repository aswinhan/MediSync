namespace Modules.Common.Infrastructure;

public static class DependencyInjection
{
    public static IServiceCollection AddCommonInfrastructure(this IServiceCollection services)
    {
        // Register the DateTime provider as a Singleton (stateless)
        services.AddSingleton<IDateTimeProvider, DateTimeProvider>();

        // Register the EF Core interceptor so module DbContexts can resolve it
        services.AddSingleton<AuditableInterceptor>();

        return services;
    }
}