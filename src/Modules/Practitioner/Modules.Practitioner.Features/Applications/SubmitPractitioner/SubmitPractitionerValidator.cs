namespace Modules.Practitioner.Features.Applications.SubmitPractitioner;

// 3. Changed from Request to Command
public sealed class SubmitPractitionerValidator : AbstractValidator<SubmitPractitionerCommand>
{
    public SubmitPractitionerValidator()
    {
        RuleFor(x => x.FirstName).NotEmpty().MaximumLength(100);
        RuleFor(x => x.LastName).NotEmpty().MaximumLength(100);

        RuleFor(x => x.TaxId)
            .NotEmpty()
            .Matches(@"^\d{9}$").WithMessage("Tax ID must be exactly 9 digits.");

        RuleFor(x => x.PractitionerNpi)
            .NotEmpty()
            .Matches(@"^\d{10}$").WithMessage("NPI must be exactly 10 digits.");

        // 4. Fixed property name to IsMedicareProvider
        When(x => x.IsMedicareProvider, () =>
        {
            RuleFor(x => x.MedicareNumber)
                .NotEmpty().WithMessage("Medicare number is required when Medicare Provider is checked.");
        });

        // 5. Fixed property names to match the nested DTO
        RuleFor(x => x.PsvDetails.VerifierAccreditingOrganization)
            .NotEmpty()
            .Must(BeAValidVerifierOrg).WithMessage("Invalid Verifier Accrediting Organization.");

        When(x => x.PsvDetails.VerifierAccreditingOrganization == "Other (Other)", () =>
        {
            RuleFor(x => x.PsvDetails.OtherAccreditingOrganization)
                .NotEmpty().WithMessage("Other Accrediting Organization must be specified.");
        });

        RuleFor(x => x.PsvDetails.LaraLicense)
            .Must(BeAValidLaraLicense).When(x => !string.IsNullOrEmpty(x.PsvDetails.LaraLicense))
            .WithMessage("Invalid LARA License type.");

        RuleFor(x => x.AttestationSignature)
            .NotEmpty().WithMessage("Applicant e-Signature attestation is required.");
    }

    private static bool BeAValidVerifierOrg(string org)
    {
        string[] validOrgs = {
            "COA (COA)", "NCQA (NCQA)", "Joint Commission (Joint Commission)",
            "URAC (URAC)", "Other (Other)", "CARF (CARF)", "None (None)"
        };
        return validOrgs.Contains(org);
    }

    private static bool BeAValidLaraLicense(string license)
    {
        string[] validLicenses = {
            "Acupuncture (Acupuncture)", "Audiology (Audiology)", "Addiction Medicine (Addiction Medicine)",
            "Behavior Analysts (Behavior Analysts)", "Counseling (Counseling)", "Genetic Counseling (Genetic Counseling)",
            "Marriage and Family Therapy (Marriage and Family Therapy)", "Massage Therapy (Massage Therapy)",
            "Medicine (Medicine)", "Nursing (Nursing)", "Nursing Home Administrator (Nursing Home Administrator)",
            "Occupational Therapy (Occupational Therapy)", "Osteopathic Medicine & Surgery (Osteopathic Medicine & Surgery)",
            "Pharmacy (Pharmacy)", "Physical Therapy (Physical Therapy)", "Physician Assistant (PA) (Physician Assistant (PA))",
            "Psychology (Psychology)", "Respiratory Care (Respiratory Care)", "Social Worker (Social Worker)",
            "Speech-Language Pathology (Speech-Language Pathology)", "Nurse Practitioner (NP) (Nurse Practitioner (NP))",
            "Other (Other)", "Psychiatry (Psychiatry)"
        };
        return validLicenses.Contains(license);
    }
}