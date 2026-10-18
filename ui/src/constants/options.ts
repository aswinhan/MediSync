export const MEDICAL_TRAINING_TYPES = [
  { label: "Internship", value: "Internship" },
  { label: "Residencies", value: "Residencies" },
  { label: "Fellowships", value: "Fellowships" },
  { label: "Preceptorships", value: "Preceptorships" },
];

export const SPECIALTY_OPTIONS = [
  { label: "EMDR", value: "EMDR (EMDR)" },
  { label: "Child Psych", value: "Child Psych (Child Psych)" },
  { label: "Adult Psych", value: "Adult Psych (Adult Psych)" },
  { label: "Infant Mental Health", value: "infant Mental Health (infant Mental Health)" },
  { label: "Eating Disorders", value: "Eating Disorders (Eating Disorders)" },
  { label: "Prolonged Exposure Therapy", value: "Prolonged Exposure Therapy (Prolonged Exposure Therapy)" },
  { label: "Co-occurring (MH & SUD)", value: "Co-occurring ()MH & SUD) (Co-occurring ()MH & SUD))" },
  { label: "Other (Specify)", value: "Other (Specify) (Other (Specify))" },
];

// --- NEW LISTS ---

export const LICENSE_CERT_TYPES = [
  { label: "License", value: "License" },
  { label: "Certification", value: "Certification" },
  { label: "Nursing Certification", value: "Nursing Certification" },
];

export const LARA_LICENSE_TYPES = [
  "Acupuncture", "Audiology", "Addiction Medicine", "Behavior Analysts", "Counseling", 
  "Genetic Counseling", "Marriage and Family Therapy", "Massage Therapy", "Medicine", 
  "Nursing", "Nursing Home Administrator", "Occupational Therapy", "Osteopathic Medicine & Surgery", 
  "Pharmacy", "Physical Therapy", "Physician Assistant (PA)", "Psychology", "Respiratory Care", 
  "Social Worker", "Speech-Language Pathology", "Nurse Practitioner (NP)", "Psychiatry", "Other"
].map(type => ({ label: type, value: type }));

export const BOARD_CERTIFICATIONS = [
  { label: "MCBAP- MI Certification Board for Addiction Professionals", value: "MCBAP- MI Certification Board for Addiction Professionals" },
  { label: "AMA- American Medical Association", value: "AMA- American Medical Association" },
  { label: "ABPM- American Board of Preventative Medicine", value: "ABPM- American Board of Preventative Medicine" },
  { label: "BACB - Behavior Analyst Certification Board", value: "BACB - Behavior Analyst Certification Board" },
  { label: "ABPN - American Board of Psychiatry and Neurology", value: "ABPN - American Board of Psychiatry and Neurology" },
  { label: "ABFM - American Board of Family Medicine", value: "ABFM - American Board of Family Medicine" },
  { label: "ABIM- American Board of Internal Medicine", value: "ABIM- American Board of Internal Medicine" },
  { label: "ABNS- American Board of Neurological Surgery", value: "ABNS- American Board of Neurological Surgery" },
  { label: "ABEM- American Board of Emergency Medicine", value: "ABEM- American Board of Emergency Medicine" },
  { label: "NBCOT-National Board for Certification in Occupational Therapy", value: "NBCOT-National Board for Certification in Occupational Therapy" },
  { label: "AOA- American Osteopathic Association Board Certification", value: "AOA- American Osteopathic Association Board Certification" },
  { label: "The Board of Pharmacy Specialties (BPS)", value: "The Board of Pharmacy Specialties (BPS)" },
  { label: "American Physical Therapy Association (APTA MI)", value: "American Physical Therapy Association (APTA MI)" },
  { label: "NCCPA- National Commission for Certifying Physician Assistants", value: "NCCPA- National Commission for Certifying Physician Assistants" },
  { label: "ABPP - American Board of Professional Psychology", value: "ABPP - American Board of Professional Psychology" },
  { label: "The National Board for Respiratory Care (NBRC)", value: "The National Board for Respiratory Care (NBRC)" },
  { label: "BCD- Board Certified Diplomate in Clinical Social Work", value: "BCD- Board Certified Diplomate in Clinical Social Work" },
  { label: "ANCDS- Academy of Neurologic Communication Disorders and Sciences", value: "ANCDS- Academy of Neurologic Communication Disorders and Sciences" },
  { label: "AANPCB- American Academy of Nurse Practitioners Certification Board", value: "AANPCB- American Academy of Nurse Practitioners Certification Board" },
  { label: "Other", value: "Other" }
];

export const NURSING_CERTIFICATIONS = [
  "AACRN - Advanced AIDS Certified Registered Nurse",
  "ACNP-BC - Acute Care Nurse Practitioner",
  "AGACNP-BC - Adult-Gerontology Acute Care Nurse Practitioner",
  "PMHNP-BC - Psychiatric-Mental Health Nurse Practitioner",
  "FNP-BC - Family Nurse Practitioner",
  "CRNA - Certified Registered Nurse Anesthetist",
  "CNM - Certified Nurse Midwife",
  "CNS - Clinical Nurse Specialist"
  // Note: You can paste the rest of the 100+ items from the Excel sheet right here!
].map(type => ({ label: type, value: type }));

export const LICENSE_STATUS_OPTIONS = [
  { label: "Active", value: "Active" },
  { label: "Expired", value: "Expired" },
];

export const BACKGROUND_SPECIALTIES = [
  "Adult Psych", "Child Psych", "Co-occuring (MH & SUD)", "Eating Disorders", 
  "Eye Movement Desensitization and Reprocessing (EMDR)", "Infant Mental Health", 
  "Prolonged Exposure Therapy", "Women's Specialty (SUD)", "SUD Detox", 
  "Opiod/Methadone Treatment Program (OTP)", "Other"
].map(type => ({ label: type, value: type }));

export const MALPRACTICE_COVERAGE_OPTIONS = [
  { label: "Yes", value: "Yes" },
  { label: "No", value: "No" },
];

export const LANGUAGES_SPOKEN = [
  "English", "Spanish", "French", "German", "Mandarin", "Cantonese", "Hindi", 
  "Arabic", "Russian", "Portuguese", "Japanese", "Korean", "Vietnamese", "Italian",
  "Abkhaz", "Adyghe", "Afrikaans", "Akan", "Albanian", "American Sign Language",
  "Amharic", "Aragonese", "Aramaic", "Armenian", "ASL", "Aymara", "Balinese", "Basque",
  "Bengali", "Bosnian", "Bulgarian", "Catalan", "Cherokee", "Croatian", "Czech", "Danish"
  // Note: Paste the remaining languages from the Excel file here
].map(type => ({ label: type, value: type }));

export const YES_NO_OPTIONS = [
  { label: "Yes", value: "Yes" },
  { label: "No", value: "No" },
];

export const PSV_STATUS_OPTIONS = [
  { label: "In-Progress", value: "In-Progress" },
  { label: "Complete", value: "Complete" },
  { label: "Expired Licensure/Certification", value: "Expired Licensure/Certification" },
  { label: "Expired", value: "Expired" },
];

export const VERIFIER_ACCREDITING_ORGS = [
  { label: "COA", value: "COA" },
  { label: "NCQA", value: "NCQA" },
  { label: "Joint Commission", value: "Joint Commission" },
  { label: "URAC", value: "URAC" },
  { label: "CARF", value: "CARF" },
  { label: "None", value: "None" },
  { label: "Other", value: "Other" },
];
