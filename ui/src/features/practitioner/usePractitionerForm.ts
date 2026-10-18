import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { practitionerSchema, type PractitionerFormValues } from './schema';

export const defaultPractitionerValues: PractitionerFormValues = {

  submissionDate: new Date().toISOString().split('T')[0],

  firstName: "", 
  middleInitial: "", 
  lastName: "", 
  formerLastName: "",
  dateOfBirth: "", 
  taxId: "", 
  isMedicareProvider: false, 
  medicareNumber: "",
  
  officeStreet1: "", 
  officeStreet2: "", 
  officeCity: "", 
  officeZipcode: "", 
  officeState: "", 
  officeCounty: "",
  homeStreet1: "", 
  homeStreet2: "", 
  homeCity: "", 
  homeZipcode: "", 
  homeState: "", 
  homeCounty: "",
  
  addEducationRecord: false, 
  degree: "", 
  collegeName: "", 
  collegeAddress: "", 
  graduationDate: "",
 
  addMedicalTrainingRecord: false,
  medicalTrainingType: "", 
  medicalTrainingHospitalName: "", 
  medicalTrainingHospitalAddress: "",
  specialty: "", 
  trainingStartDate: "", 
  trainingEndDate: "",
  
  addHospitalAffiliationRecord: false,
  hospitalAffiliationName: "", 
  hospitalAffiliationAddress: "", 
  startDateOfAffiliation: "",
  isAffiliationCurrent: false, 
  endDateOfAffiliation: "", 
  categoryOfMembership: "",

  addLicenseCertificationRecord: false,
  licenseCertificationType: "",
  laraLicenseType: "",
  otherLicenseType: "",
  boardCertification: "",
  otherBoardCertification: "",
  nursingCertification: "",
  licenseExpirationDate: "",
  licenseStatus: "",

  specialities: [],
  otherSpeciality: "",
  certificateOfLiability: false,
  certificateOfLiabilityExpirationDate: "",
  currentMalpracticeCoverage: "",
  malpracticeExplanation: "",
  malpracticeExpiration: "",
  languagesSpoken: [],
  culturalCompetency: "",

  fiveYearWorkHistory: false,
  sixMonthGap: "",
  sixMonthGapStartDate: "",
  sixMonthGapEndDate: "",
  sixMonthGapActivity: "",
  sixMonthGapReason: "",

  credentialingAcknowledgement: false,
  essentialDuties: "",
  essentialDutiesReason: "",
  illegalDrugUse: "",
  illegalDrugUseExplanation: "",
  lossOfLicense: "",
  lossOfLicenseExplanation: "",
  felonyConvictions: "",
  felonyConvictionsExplanation: "",
  lossOfPrivileges: "",
  lossOfPrivilegesExplanation: "",
  attestationSignature: "",

  psvStatus: "In-Progress",
  psvCreationDate: "",
  psvCompletionDate: "",
  verifierAccreditingOrg: "",
  otherVerifierAccreditingOrg: "",
  providerNameId: "",
  primarySourceVerifierId: "",
  credentialingProfileId: "",
  psvOwnerId: "",

  ichatBackgroundCheck: false,
  workforceBackgroundCheck: false,
  medicareBaseEnrollment: false,
  medicareOptOut: false,

  laraUploaded: false,
  laraLicenseTypeDoc: "",
  officialTranscript: false,
  degreeVerification: false,
  ecfmg: false,
  amaVerification: false,
  aoaVerification: false,

  mdhhsSanctionedProviderCheckDoc: false,
  mcbapVerification: false,
  oigCheckDoc: false,
  samGovCheckDoc: false,
  miPublicSexOffenderRegistryCheck: false,
  nationalSexOffenderRegistryCheck: false,

};

export function usePractitionerForm() {
  return useForm<PractitionerFormValues>({
    resolver: zodResolver(practitionerSchema) as any,
    defaultValues: defaultPractitionerValues,
  });
}