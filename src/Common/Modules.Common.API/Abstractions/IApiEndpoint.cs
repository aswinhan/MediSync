using Microsoft.AspNetCore.Routing;

namespace Modules.Common.API.Abstractions;

public interface IApiEndpoint
{
    // Every vertical slice endpoint will implement this interface.
    // The RouteBuilder allows us to map MapGet, MapPost, etc.
    void MapEndpoint(IEndpointRouteBuilder app);
}