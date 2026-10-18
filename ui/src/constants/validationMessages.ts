export const VALIDATION_MESSAGES = {
  REQUIRED: "This field is required",
  MAX_LENGTH: (max: number) => `Maximum ${max} characters allowed`,
  NUMERIC: "Must contain only numbers",
  MEDICARE_REQUIRED: "Medicare number is required when provider is active",
};