namespace Modules.Practitioner.Features.Applications.SubmitPractitioner;

public interface ISalesforceModuleApi
{
    Task<Result<object>> BuildPractitionerCompositeAsync(SubmitPractitionerCommand request, CancellationToken cancellationToken);
    Task<Result<SubmitPractitionerResponse>> ExecuteCompositeAsync(object compositeRequest, CancellationToken cancellationToken);
}

public interface ISubmissionsModuleApi
{
    Task<Guid> CreateSubmissionRecordAsync(string type, object rawPayload, object compositePayload, CancellationToken cancellationToken);
    Task MarkFailedAsync(Guid submissionId, string reason, CancellationToken cancellationToken);
    Task MarkCompletedAsync(Guid submissionId, Dictionary<string, string> generatedIds, CancellationToken cancellationToken);
}

public sealed class SubmitPractitionerHandler(
    ISalesforceModuleApi salesforceApi,
    ISubmissionsModuleApi submissionsApi)
    : IHandler<SubmitPractitionerCommand, SubmitPractitionerResponse> // 6. Matched Command Name
{
    // 7. Renamed HandleAsync to Handle to satisfy MediatR's IRequestHandler interface
    public async Task<Result<SubmitPractitionerResponse>> Handle(
        SubmitPractitionerCommand request,
        CancellationToken cancellationToken)
    {
        // 1. Transform domain request into structured Salesforce Composite payload
        var buildResult = await salesforceApi.BuildPractitionerCompositeAsync(request, cancellationToken);
        if (buildResult.IsFailure)
        {
            return buildResult.Error;
        }
        var compositeRequest = buildResult.Value;

        // 2. Persist the raw JSON and composite payload into NoSQL Submission store (Auditing)
        var submissionId = await submissionsApi.CreateSubmissionRecordAsync(
            type: "Practitioner",
            rawPayload: request,
            compositePayload: compositeRequest,
            cancellationToken);

        // 3. Dispatch to Salesforce Composite REST API
        var salesforceResult = await salesforceApi.ExecuteCompositeAsync(compositeRequest, cancellationToken);

        if (salesforceResult.IsFailure)
        {
            await submissionsApi.MarkFailedAsync(submissionId, salesforceResult.Error.Description, cancellationToken);
            return salesforceResult.Error;
        }

        // 4. Update submission status with generated Salesforce record IDs
        var generatedIds = new Dictionary<string, string>
        {
            { "CredentialingProfileId", salesforceResult.Value.ProfileId },
            { "PsvId", salesforceResult.Value.PsvId }
        };
        await submissionsApi.MarkCompletedAsync(submissionId, generatedIds, cancellationToken);

        return Result.Success(
            new SubmitPractitionerResponse(submissionId, salesforceResult.Value.ProfileId, salesforceResult.Value.PsvId, "Submitted"));
    }
}
// 8. Removed the duplicate Response Record declaration from the bottom of the file