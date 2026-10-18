using Modules.Common.Domain;

namespace Modules.Practitioner.Domain.Entities;

public sealed class PractitionerPsv : IAuditableEntity
{
    public Guid Id { get; private set; }
    public Guid PractitionerProfileId { get; private set; }

    // PSV Specific Fields
    public string VerifierAccreditingOrganization { get; private set; } = string.Empty;
    public string? OtherAccreditingOrganization { get; private set; }
    public string LaraLicense { get; private set; } = string.Empty;
    public bool MdhhsSanctionedProviderCheck { get; private set; }
    public bool OfficeOfInspectorGeneralCheck { get; private set; }
    public bool SamGovCheck { get; private set; }

    // Audit Fields
    public DateTime CreatedOnUtc { get; set; }
    public string? CreatedBy { get; set; }
    public DateTime? ModifiedOnUtc { get; set; }
    public string? ModifiedBy { get; set; }

    private PractitionerPsv() { } // EF Core constructor

    public static PractitionerPsv Create(
        Guid practitionerId,
        string verifierOrg,
        string? otherOrg,
        string laraLicense,
        bool mdhhsCheck,
        bool oigCheck,
        bool samGovCheck)
    {
        return new PractitionerPsv
        {
            Id = Guid.NewGuid(),
            PractitionerProfileId = practitionerId,
            VerifierAccreditingOrganization = verifierOrg,
            OtherAccreditingOrganization = otherOrg,
            LaraLicense = laraLicense,
            MdhhsSanctionedProviderCheck = mdhhsCheck,
            OfficeOfInspectorGeneralCheck = oigCheck,
            SamGovCheck = samGovCheck
        };
    }
}