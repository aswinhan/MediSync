import * as z from 'zod';

export const practitionerSchema = z.object({
  // 1. Details & Demographics
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  dateOfBirth: z.string().min(1, "DOB is required"),
  taxId: z.string().regex(/^\d{9}$/, "Tax ID must be exactly 9 digits"),
  practitionerNpi: z.string().regex(/^\d{10}$/, "NPI must be exactly 10 digits"),
  isMedicareProvider: z.boolean().default(false),
  medicareNumber: z.string().optional(),

  // 2. PSV Details
  psvDetails: z.object({
    verifierAccreditingOrganization: z.string().min(1, "Verifier Org required"),
    otherAccreditingOrganization: z.string().optional(),
    laraLicense: z.string().min(1, "LARA License required"),
    mdhhsSanctionedProviderCheck: z.boolean(),
    officeOfInspectorGeneralCheck: z.boolean(),
    samGovCheck: z.boolean(),
  }),

  // 3. Work History & Attestations
  sixMonthGap: z.enum(["Yes", "No"]).optional(),
  sixMonthGapReason: z.string().optional(),
  attestationSignature: z.string().min(1, "e-Signature is required")
})
// ENTERPRISE CONDITIONAL LOGIC
.superRefine((data, ctx) => {
  // Rule: If Medicare Provider is checked, Medicare Number is REQUIRED
  if (data.isMedicareProvider && !data.medicareNumber) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Medicare Number is required",
      path: ["medicareNumber"]
    });
  }

  // Rule: If Verifier Org is "Other", Other Org name is REQUIRED
  if (data.psvDetails.verifierAccreditingOrganization === "Other" && !data.psvDetails.otherAccreditingOrganization) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Please specify the other organization",
      path: ["psvDetails", "otherAccreditingOrganization"]
    });
  }

  // Rule: If 6+ month gap is "Yes", Reason is REQUIRED
  if (data.sixMonthGap === "Yes" && !data.sixMonthGapReason) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Explanation is required for employment gap",
      path: ["sixMonthGapReason"]
    });
  }
});

export type PractitionerFormValues = z.infer<typeof practitionerSchema>;