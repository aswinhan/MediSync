import { z } from 'zod';
import { VALIDATION_MESSAGES } from '../../constants/validationMessages';

export const practitionerSchema = z.object({
  // --- Details Section ---
  submissionDate: z.string().min(1, VALIDATION_MESSAGES.REQUIRED),

  // --- Practitioner Information Section ---
  firstName: z.string().min(1, VALIDATION_MESSAGES.REQUIRED).max(255, VALIDATION_MESSAGES.MAX_LENGTH(255)),
  middleInitial: z.string().max(1, VALIDATION_MESSAGES.MAX_LENGTH(1)).optional(),
  lastName: z.string().min(1, VALIDATION_MESSAGES.REQUIRED).max(255, VALIDATION_MESSAGES.MAX_LENGTH(255)),
  formerLastName: z.string().max(255, VALIDATION_MESSAGES.MAX_LENGTH(255)).optional(),
  dateOfBirth: z.string().min(1, VALIDATION_MESSAGES.REQUIRED),
  taxId: z.string().min(1, VALIDATION_MESSAGES.REQUIRED).regex(/^\d+$/, VALIDATION_MESSAGES.NUMERIC).max(18, VALIDATION_MESSAGES.MAX_LENGTH(18)),
  isMedicareProvider: z.boolean(),
  medicareNumber: z.string().max(18, VALIDATION_MESSAGES.MAX_LENGTH(18)).optional().or(z.literal('')),

  // --- Office Address Section ---
  officeStreet1: z.string().min(1, VALIDATION_MESSAGES.REQUIRED).max(255, VALIDATION_MESSAGES.MAX_LENGTH(255)),
  officeStreet2: z.string().max(255, VALIDATION_MESSAGES.MAX_LENGTH(255)).optional(),
  officeCity: z.string().min(1, VALIDATION_MESSAGES.REQUIRED).max(255, VALIDATION_MESSAGES.MAX_LENGTH(255)),
  officeZipcode: z.string().min(1, VALIDATION_MESSAGES.REQUIRED).max(255, VALIDATION_MESSAGES.MAX_LENGTH(255)),
  officeState: z.string().min(1, VALIDATION_MESSAGES.REQUIRED).max(255, VALIDATION_MESSAGES.MAX_LENGTH(255)),
  officeCounty: z.string().min(1, VALIDATION_MESSAGES.REQUIRED).max(255, VALIDATION_MESSAGES.MAX_LENGTH(255)),

  // --- Home Address Section ---
  homeStreet1: z.string().min(1, VALIDATION_MESSAGES.REQUIRED).max(255, VALIDATION_MESSAGES.MAX_LENGTH(255)),
  homeStreet2: z.string().max(255, VALIDATION_MESSAGES.MAX_LENGTH(255)).optional(),
  homeCity: z.string().min(1, VALIDATION_MESSAGES.REQUIRED).max(255, VALIDATION_MESSAGES.MAX_LENGTH(255)),
  homeZipcode: z.string().min(1, VALIDATION_MESSAGES.REQUIRED).max(255, VALIDATION_MESSAGES.MAX_LENGTH(255)),
  homeState: z.string().min(1, VALIDATION_MESSAGES.REQUIRED).max(255, VALIDATION_MESSAGES.MAX_LENGTH(255)),
  homeCounty: z.string().min(1, VALIDATION_MESSAGES.REQUIRED).max(255, VALIDATION_MESSAGES.MAX_LENGTH(255)),

  // --- Education Section ---
  addEducationRecord: z.boolean(),
  degree: z.string().max(255, VALIDATION_MESSAGES.MAX_LENGTH(255)).optional().or(z.literal('')),
  collegeName: z.string().max(255, VALIDATION_MESSAGES.MAX_LENGTH(255)).optional().or(z.literal('')),
  collegeAddress: z.string().max(255, VALIDATION_MESSAGES.MAX_LENGTH(255)).optional().or(z.literal('')),
  graduationDate: z.string().optional().or(z.literal('')),

  // --- Post Graduate Medical Training ---
  addMedicalTrainingRecord: z.boolean(),
  medicalTrainingType: z.string().optional().or(z.literal('')),
  medicalTrainingHospitalName: z.string().max(255, VALIDATION_MESSAGES.MAX_LENGTH(255)).optional().or(z.literal('')),
  medicalTrainingHospitalAddress: z.string().max(255, VALIDATION_MESSAGES.MAX_LENGTH(255)).optional().or(z.literal('')),
  specialty: z.string().max(255, VALIDATION_MESSAGES.MAX_LENGTH(255)).optional().or(z.literal('')),
  trainingStartDate: z.string().optional().or(z.literal('')),
  trainingEndDate: z.string().optional().or(z.literal('')),

  // --- Hospital Affiliations ---
  addHospitalAffiliationRecord: z.boolean(),
  hospitalAffiliationName: z.string().max(255, VALIDATION_MESSAGES.MAX_LENGTH(255)).optional().or(z.literal('')),
  hospitalAffiliationAddress: z.string().max(255, VALIDATION_MESSAGES.MAX_LENGTH(255)).optional().or(z.literal('')),
  startDateOfAffiliation: z.string().optional().or(z.literal('')),
  isAffiliationCurrent: z.boolean().optional(),
  endDateOfAffiliation: z.string().optional().or(z.literal('')),
  categoryOfMembership: z.string().max(255, VALIDATION_MESSAGES.MAX_LENGTH(255)).optional().or(z.literal('')),

  // --- License/Certification Section ---
  addLicenseCertificationRecord: z.boolean(),
  licenseCertificationType: z.string().optional().or(z.literal('')),
  laraLicenseType: z.string().optional().or(z.literal('')),
  otherLicenseType: z.string().max(255, VALIDATION_MESSAGES.MAX_LENGTH(255)).optional().or(z.literal('')),
  boardCertification: z.string().optional().or(z.literal('')),
  otherBoardCertification: z.string().max(255, VALIDATION_MESSAGES.MAX_LENGTH(255)).optional().or(z.literal('')),
  nursingCertification: z.string().optional().or(z.literal('')),
  licenseExpirationDate: z.string().optional().or(z.literal('')),
  licenseStatus: z.string().optional().or(z.literal('')),

  // --- Professional Background ---
  specialities: z.array(z.string()).min(1, VALIDATION_MESSAGES.REQUIRED),
  otherSpeciality: z.string().max(255, VALIDATION_MESSAGES.MAX_LENGTH(255)).optional().or(z.literal('')),
  certificateOfLiability: z.boolean().refine(val => val === true, "You must provide a Certificate of Liability"),
  certificateOfLiabilityExpirationDate: z.string().min(1, VALIDATION_MESSAGES.REQUIRED),
  currentMalpracticeCoverage: z.string().min(1, VALIDATION_MESSAGES.REQUIRED),
  malpracticeExplanation: z.string().optional().or(z.literal('')),
  malpracticeExpiration: z.string().optional().or(z.literal('')),
  languagesSpoken: z.array(z.string()).min(1, VALIDATION_MESSAGES.REQUIRED),
  culturalCompetency: z.string().min(1, VALIDATION_MESSAGES.REQUIRED).max(32768, VALIDATION_MESSAGES.MAX_LENGTH(32768)),

  // --- Work History ---
  fiveYearWorkHistory: z.boolean().refine(val => val === true, "You must provide a five-year work history"),
  sixMonthGap: z.string().min(1, VALIDATION_MESSAGES.REQUIRED),
  sixMonthGapStartDate: z.string().optional().or(z.literal('')),
  sixMonthGapEndDate: z.string().optional().or(z.literal('')),
  sixMonthGapActivity: z.string().max(255, VALIDATION_MESSAGES.MAX_LENGTH(255)).optional().or(z.literal('')),
  sixMonthGapReason: z.string().max(32768, VALIDATION_MESSAGES.MAX_LENGTH(32768)).optional().or(z.literal('')),

  // --- Acknowledgements and Attestations ---
  credentialingAcknowledgement: z.boolean().refine(val => val === true, "You must acknowledge this statement"),
  essentialDuties: z.string().min(1, VALIDATION_MESSAGES.REQUIRED),
  essentialDutiesReason: z.string().max(32768, VALIDATION_MESSAGES.MAX_LENGTH(32768)).optional().or(z.literal('')),
  illegalDrugUse: z.string().min(1, VALIDATION_MESSAGES.REQUIRED),
  illegalDrugUseExplanation: z.string().max(32768, VALIDATION_MESSAGES.MAX_LENGTH(32768)).optional().or(z.literal('')),
  lossOfLicense: z.string().min(1, VALIDATION_MESSAGES.REQUIRED),
  lossOfLicenseExplanation: z.string().max(32768, VALIDATION_MESSAGES.MAX_LENGTH(32768)).optional().or(z.literal('')),
  felonyConvictions: z.string().min(1, VALIDATION_MESSAGES.REQUIRED),
  felonyConvictionsExplanation: z.string().max(32768, VALIDATION_MESSAGES.MAX_LENGTH(32768)).optional().or(z.literal('')),
  lossOfPrivileges: z.string().min(1, VALIDATION_MESSAGES.REQUIRED),
  lossOfPrivilegesExplanation: z.string().max(32768, VALIDATION_MESSAGES.MAX_LENGTH(32768)).optional().or(z.literal('')),
  attestationSignature: z.string().min(1, VALIDATION_MESSAGES.REQUIRED).max(255, VALIDATION_MESSAGES.MAX_LENGTH(255)),

  // --- Primary Source Verification (PSV) ---
  psvStatus: z.string().optional().or(z.literal('')),
  psvCreationDate: z.string().optional().or(z.literal('')),
  psvCompletionDate: z.string().optional().or(z.literal('')),
  verifierAccreditingOrg: z.string().min(1, VALIDATION_MESSAGES.REQUIRED),
  otherVerifierAccreditingOrg: z.string().max(255, VALIDATION_MESSAGES.MAX_LENGTH(255)).optional().or(z.literal('')),
  
  // Lookups & Ownership
  providerNameId: z.string().optional().or(z.literal('')),
  primarySourceVerifierId: z.string().optional().or(z.literal('')),
  credentialingProfileId: z.string().optional().or(z.literal('')),
  psvOwnerId: z.string().optional().or(z.literal('')),

  // --- Provider Verification (Documentation Uploads) ---
  ichatBackgroundCheck: z.boolean(),
  workforceBackgroundCheck: z.boolean(),
  medicareBaseEnrollment: z.boolean(),
  medicareOptOut: z.boolean(),

  laraUploaded: z.boolean(),
  laraLicenseTypeDoc: z.string().optional().or(z.literal('')),
  officialTranscript: z.boolean(),
  degreeVerification: z.boolean(),
  ecfmg: z.boolean(),
  amaVerification: z.boolean(),
  aoaVerification: z.boolean(),

  mdhhsSanctionedProviderCheckDoc: z.boolean().refine(val => val === true, "MDHHS Check is strictly required"),
  mcbapVerification: z.boolean(),
  oigCheckDoc: z.boolean().refine(val => val === true, "OIG Check is strictly required"),
  samGovCheckDoc: z.boolean().refine(val => val === true, "SAM.gov Check is strictly required"),
  miPublicSexOffenderRegistryCheck: z.boolean().refine(val => val === true, "MI Public Sex Offender Registry Check is required"),
  nationalSexOffenderRegistryCheck: z.boolean().refine(val => val === true, "National Sex Offender Registry Check is required"),


}).superRefine((data, ctx) => {
  // Conditional: Medicare
  if (data.isMedicareProvider && (!data.medicareNumber || data.medicareNumber.trim() === '')) {
    ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['medicareNumber'], message: VALIDATION_MESSAGES.MEDICARE_REQUIRED });
  }

  // Conditional: Education Record
  if (data.addEducationRecord) {
    if (!data.degree || data.degree.trim() === '') ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['degree'], message: VALIDATION_MESSAGES.REQUIRED });
    if (!data.collegeName || data.collegeName.trim() === '') ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['collegeName'], message: VALIDATION_MESSAGES.REQUIRED });
    if (!data.collegeAddress || data.collegeAddress.trim() === '') ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['collegeAddress'], message: VALIDATION_MESSAGES.REQUIRED });
    if (!data.graduationDate || data.graduationDate.trim() === '') ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['graduationDate'], message: VALIDATION_MESSAGES.REQUIRED });
  }

  // Conditional: Medical Training Record
  if (data.addMedicalTrainingRecord) {
    if (!data.medicalTrainingType || data.medicalTrainingType.trim() === '') ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['medicalTrainingType'], message: VALIDATION_MESSAGES.REQUIRED });
    if (!data.medicalTrainingHospitalName || data.medicalTrainingHospitalName.trim() === '') ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['medicalTrainingHospitalName'], message: VALIDATION_MESSAGES.REQUIRED });
    if (!data.medicalTrainingHospitalAddress || data.medicalTrainingHospitalAddress.trim() === '') ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['medicalTrainingHospitalAddress'], message: VALIDATION_MESSAGES.REQUIRED });
    if (!data.specialty || data.specialty.trim() === '') ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['specialty'], message: VALIDATION_MESSAGES.REQUIRED });
    if (!data.trainingStartDate || data.trainingStartDate.trim() === '') ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['trainingStartDate'], message: VALIDATION_MESSAGES.REQUIRED });
    if (!data.trainingEndDate || data.trainingEndDate.trim() === '') ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['trainingEndDate'], message: VALIDATION_MESSAGES.REQUIRED });
  }

  // Conditional: Hospital Affiliations Record
  if (data.addHospitalAffiliationRecord) {
    if (!data.hospitalAffiliationName || data.hospitalAffiliationName.trim() === '') ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['hospitalAffiliationName'], message: VALIDATION_MESSAGES.REQUIRED });
    if (!data.hospitalAffiliationAddress || data.hospitalAffiliationAddress.trim() === '') ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['hospitalAffiliationAddress'], message: VALIDATION_MESSAGES.REQUIRED });
    if (!data.startDateOfAffiliation || data.startDateOfAffiliation.trim() === '') ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['startDateOfAffiliation'], message: VALIDATION_MESSAGES.REQUIRED });
    if (!data.categoryOfMembership || data.categoryOfMembership.trim() === '') ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['categoryOfMembership'], message: VALIDATION_MESSAGES.REQUIRED });
    // Require End Date only if the affiliation is NOT current
    if (!data.isAffiliationCurrent && (!data.endDateOfAffiliation || data.endDateOfAffiliation.trim() === '')) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['endDateOfAffiliation'], message: "End Date is required for past affiliations" });
    }
  }
    // Conditional: License/Certification Record
  if (data.addLicenseCertificationRecord) {
    if (!data.licenseCertificationType || data.licenseCertificationType.trim() === '') {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['licenseCertificationType'], message: VALIDATION_MESSAGES.REQUIRED });
    }
    if (!data.licenseExpirationDate || data.licenseExpirationDate.trim() === '') {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['licenseExpirationDate'], message: VALIDATION_MESSAGES.REQUIRED });
    }

    // Branch 1: LARA License Logic
    if (data.licenseCertificationType === 'License') {
      if (!data.laraLicenseType || data.laraLicenseType.trim() === '') {
        ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['laraLicenseType'], message: VALIDATION_MESSAGES.REQUIRED });
      }
      if (data.laraLicenseType === 'Other' && (!data.otherLicenseType || data.otherLicenseType.trim() === '')) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['otherLicenseType'], message: "Specify the other license type" });
      }
    }

    // Branch 2: Board Certification Logic
    if (data.licenseCertificationType === 'Certification') {
      if (!data.boardCertification || data.boardCertification.trim() === '') {
        ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['boardCertification'], message: VALIDATION_MESSAGES.REQUIRED });
      }
      if (data.boardCertification === 'Other' && (!data.otherBoardCertification || data.otherBoardCertification.trim() === '')) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['otherBoardCertification'], message: "Specify the other board certification" });
      }
    }

    // Branch 3: Nursing Certification Logic
    if (data.licenseCertificationType === 'Nursing Certification') {
      if (!data.nursingCertification || data.nursingCertification.trim() === '') {
        ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['nursingCertification'], message: VALIDATION_MESSAGES.REQUIRED });
      }
      if (!data.licenseStatus || data.licenseStatus.trim() === '') {
        ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['licenseStatus'], message: VALIDATION_MESSAGES.REQUIRED });
      }
    }
  }

  // Professional Background Conditionals
  if (data.specialities.includes('Other') && (!data.otherSpeciality || data.otherSpeciality.trim() === '')) {
    ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['otherSpeciality'], message: "Please specify the other specialty" });
  }

  if (data.currentMalpracticeCoverage === 'No' && (!data.malpracticeExplanation || data.malpracticeExplanation.trim() === '')) {
    ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['malpracticeExplanation'], message: "Explanation is required when coverage is No" });
  }

  if (data.currentMalpracticeCoverage === 'Yes' && (!data.malpracticeExpiration || data.malpracticeExpiration.trim() === '')) {
    ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['malpracticeExpiration'], message: "Expiration date is required when coverage is Yes" });
  }

  // Work History Conditionals
  if (data.sixMonthGap === 'Yes') {
    if (!data.sixMonthGapStartDate || data.sixMonthGapStartDate.trim() === '') ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['sixMonthGapStartDate'], message: VALIDATION_MESSAGES.REQUIRED });
    if (!data.sixMonthGapEndDate || data.sixMonthGapEndDate.trim() === '') ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['sixMonthGapEndDate'], message: VALIDATION_MESSAGES.REQUIRED });
    if (!data.sixMonthGapActivity || data.sixMonthGapActivity.trim() === '') ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['sixMonthGapActivity'], message: VALIDATION_MESSAGES.REQUIRED });
    if (!data.sixMonthGapReason || data.sixMonthGapReason.trim() === '') ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['sixMonthGapReason'], message: VALIDATION_MESSAGES.REQUIRED });
  }

  // Attestation Conditionals
  if (data.essentialDuties === 'No' && (!data.essentialDutiesReason || data.essentialDutiesReason.trim() === '')) {
    ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['essentialDutiesReason'], message: "Reason is required when answering No" });
  }
  if (data.illegalDrugUse === 'No' && (!data.illegalDrugUseExplanation || data.illegalDrugUseExplanation.trim() === '')) {
    ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['illegalDrugUseExplanation'], message: "Explanation is required when answering No" });
  }
  if (data.lossOfLicense === 'Yes' && (!data.lossOfLicenseExplanation || data.lossOfLicenseExplanation.trim() === '')) {
    ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['lossOfLicenseExplanation'], message: "Explanation is required when answering Yes" });
  }
  if (data.felonyConvictions === 'Yes' && (!data.felonyConvictionsExplanation || data.felonyConvictionsExplanation.trim() === '')) {
    ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['felonyConvictionsExplanation'], message: "Explanation is required when answering Yes" });
  }
  if (data.lossOfPrivileges === 'Yes' && (!data.lossOfPrivilegesExplanation || data.lossOfPrivilegesExplanation.trim() === '')) {
    ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['lossOfPrivilegesExplanation'], message: "Explanation is required when answering Yes" });
  }

  // PSV Conditionals
  if (data.verifierAccreditingOrg === 'Other' && (!data.otherVerifierAccreditingOrg || data.otherVerifierAccreditingOrg.trim() === '')) {
    ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['otherVerifierAccreditingOrg'], message: "Please specify the other accrediting organization" });
  }

  // Background Check "OR" Logic
  if (!data.ichatBackgroundCheck && !data.workforceBackgroundCheck) {
    ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['ichatBackgroundCheck'], message: "Either Ichat or Workforce Background Check is required" });
  }

  // "One of the 6" Document Upload Logic
  const hasVerificationDoc = data.laraUploaded || data.officialTranscript || data.degreeVerification || data.ecfmg || data.amaVerification || data.aoaVerification;
  if (!hasVerificationDoc) {
    ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['laraUploaded'], message: "At least one primary source document (LARA, Transcript, Degree, ECFMG, AMA, or AOA) must be uploaded" });
  }

  // LARA License Picklist Logic
  if (data.laraUploaded && (!data.laraLicenseTypeDoc || data.laraLicenseTypeDoc.trim() === '')) {
    ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['laraLicenseTypeDoc'], message: "LARA License Type is required when LARA Upload is selected" });
  }
  
});

export type PractitionerFormValues = z.infer<typeof practitionerSchema>;