namespace Modules.Common.Application.Abstractions;

// Abstracting DateTime makes unit testing our vertical slices significantly easier,
// as we can mock the current time when validating things like Expiration Dates.
public interface IDateTimeProvider
{
    DateTime UtcNow { get; }
}