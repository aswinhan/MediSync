namespace Modules.Common.Infrastructure.Time;

internal sealed class DateTimeProvider : IDateTimeProvider
{
    // Centralizing this allows us to mock the "current time" easily in unit tests
    public DateTime UtcNow => DateTime.UtcNow;
}