namespace Modules.Practitioner.Features.Applications.SubmitPractitioner;

// 1. Unified to "Command" and added the AttestationSignature required by the form
public sealed record SubmitPractitionerCommand(
    string FirstName,
    string LastName,
    DateTime DateOfBirth,
    string TaxId,
    string PractitionerNpi,
    bool IsMedicareProvider,
    string? MedicareNumber,
    PractitionerPsvDto PsvDetails,
    string AttestationSignature
) : IEndpointRequest<SubmitPractitionerResponse>;

public sealed record PractitionerPsvDto(
    string VerifierAccreditingOrganization,
    string? OtherAccreditingOrganization,
    string LaraLicense,
    bool MdhhsSanctionedProviderCheck,
    bool OfficeOfInspectorGeneralCheck,
    bool SamGovCheck
);

// 2. Unified Response Record returning the Salesforce IDs
public sealed record SubmitPractitionerResponse(Guid SubmissionId, string ProfileId, string PsvId, string Status);