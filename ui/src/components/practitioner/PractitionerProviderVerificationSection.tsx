import { useFormContext } from 'react-hook-form';
import { FormSelect } from '../ui/FormControls';
import { FormUploadCard } from '../ui/FormControls';
import { LARA_LICENSE_TYPES } from '../../constants/options';
import type { PractitionerFormValues } from '../../features/practitioner/schema';

export function PractitionerProviderVerificationSection() {
  const { register, watch, formState: { errors } } = useFormContext<PractitionerFormValues>();
  const laraUploaded = watch('laraUploaded');

  return (
    <div className="bg-surface-panel border border-border-subtle rounded-xl p-5 shadow-neo-drop flex flex-col gap-4">
      <h2 className="text-sm font-bold tracking-wider text-content-secondary uppercase border-b border-border-subtle pb-2">Documentation Uploads</h2>
      
      {/* 3-Column Grid for Upload Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        
        <FormUploadCard label="Ichat Background Check" {...register("ichatBackgroundCheck")} error={errors.ichatBackgroundCheck} statusColor="bg-amber-500" />
        <FormUploadCard label="Workforce Background Check" {...register("workforceBackgroundCheck")} statusColor="bg-emerald-500" />
        <FormUploadCard label="Medicare Base Enrollment" {...register("medicareBaseEnrollment")} statusColor="bg-emerald-500" />
        
        <FormUploadCard label="Medicare Opt Out" {...register("medicareOptOut")} statusColor="bg-amber-500" />
        
        <div className="flex flex-col gap-2">
          <FormUploadCard label="LARA License Required" {...register("laraUploaded")} error={errors.laraUploaded} statusColor="bg-red-500" />
          {laraUploaded && (
            <div className="animate-in fade-in slide-in-from-top-2 duration-200">
               <FormSelect label="License Type" options={LARA_LICENSE_TYPES} {...register("laraLicenseTypeDoc")} error={errors.laraLicenseTypeDoc} className="py-1.5 text-xs" />
            </div>
          )}
        </div>

        <FormUploadCard label="Official Transcript Required" {...register("officialTranscript")} statusColor="bg-emerald-500" />
        
        <FormUploadCard label="AMA Verification Required" {...register("amaVerification")} statusColor="bg-emerald-500" />
        <FormUploadCard label="AOA Verification Required" {...register("aoaVerification")} statusColor="bg-amber-500" />
        <FormUploadCard label="MDHHS Sanctioned Provider Check" {...register("mdhhsSanctionedProviderCheckDoc")} error={errors.mdhhsSanctionedProviderCheckDoc} statusColor="bg-red-500" />
        
        <FormUploadCard label="MCBAP Verification" {...register("mcbapVerification")} statusColor="bg-amber-500" />
        <FormUploadCard label="Office of Inspector General Check" {...register("oigCheckDoc")} error={errors.oigCheckDoc} statusColor="bg-emerald-500" />
        <FormUploadCard label="SAM.gov Check" {...register("samGovCheckDoc")} error={errors.samGovCheckDoc} statusColor="bg-emerald-500" />
        
        <FormUploadCard label="MI Public Sex Offender Registry" {...register("miPublicSexOffenderRegistryCheck")} error={errors.miPublicSexOffenderRegistryCheck} statusColor="bg-cyan-500" />
        <FormUploadCard label="National Sex Offender Registry" {...register("nationalSexOffenderRegistryCheck")} error={errors.nationalSexOffenderRegistryCheck} statusColor="bg-emerald-500" />

      </div>

      <div className="pt-6 mt-2 border-t border-border-subtle flex justify-center">
        <button type="button" className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-content-primary font-bold py-3 px-8 rounded-full shadow-glow text-sm uppercase tracking-wider hover:scale-105 transition-transform">
          Submit Audit Verification
        </button>
      </div>

    </div>
  );
}