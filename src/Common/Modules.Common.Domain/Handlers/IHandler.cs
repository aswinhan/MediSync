namespace Modules.Common.Domain.Handlers;

// Marker interface for Requests
public interface IEndpointRequest<TResponse> : IRequest<Result<TResponse>>
{
}

// Wrapper for the Handler
public interface IHandler<in TRequest, TResponse> : IRequestHandler<TRequest, Result<TResponse>>
    where TRequest : IEndpointRequest<TResponse>
{
}