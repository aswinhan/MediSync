using Modules.Common.Domain;

namespace Modules.Practitioner.Domain.Entities;

public sealed class PractitionerProfile : IAuditableEntity
{
    public Guid Id { get; private set; }

    // Core Practitioner Demographics
    public string FirstName { get; private set; } = string.Empty;
    public string LastName { get; private set; } = string.Empty;
    public DateTime DateOfBirth { get; private set; }
    public string TaxId { get; private set; } = string.Empty;
    public string PractitionerNpi { get; private set; } = string.Empty;
    public bool IsMedicareProvider { get; private set; }
    public string? MedicareNumber { get; private set; }

    // Navigation Property to Child PSV Record
    public PractitionerPsv PrimarySourceVerification { get; private set; } = null!;

    // Audit Fields (Populated automatically by EF Core Interceptor)
    public DateTime CreatedOnUtc { get; set; }
    public string? CreatedBy { get; set; }
    public DateTime? ModifiedOnUtc { get; set; }
    public string? ModifiedBy { get; set; }

    private PractitionerProfile() { } // EF Core constructor

    // Factory method for creating a valid domain entity
    public static PractitionerProfile Create(
        string firstName,
        string lastName,
        DateTime dob,
        string taxId,
        string npi,
        bool isMedicareProvider,
        string? medicareNumber)
    {
        return new PractitionerProfile
        {
            Id = Guid.NewGuid(),
            FirstName = firstName,
            LastName = lastName,
            DateOfBirth = dob,
            TaxId = taxId,
            PractitionerNpi = npi,
            IsMedicareProvider = isMedicareProvider,
            MedicareNumber = medicareNumber
        };
    }

    public void AssignPsv(PractitionerPsv psv)
    {
        PrimarySourceVerification = psv;
    }
}