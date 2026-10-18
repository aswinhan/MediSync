import { useFormContext } from 'react-hook-form';
import { FileBadge, ShieldAlert } from 'lucide-react';
import { FormCheckbox, FormSelect } from '../ui/FormControls';
import { LARA_LICENSE_TYPES } from '../../constants/options';
import type { PractitionerFormValues } from '../../features/practitioner/schema';

export function PractitionerProviderVerificationSection() {
  const { register, watch, formState: { errors } } = useFormContext<PractitionerFormValues>();
  
  const laraUploaded = watch('laraUploaded');

  return (
    <div className="bg-[#131c31] border border-slate-800/80 rounded-xl p-6 shadow-neo-drop flex flex-col gap-6">
      <div className="flex items-center space-x-2 border-b border-slate-800 pb-2">
        <FileBadge className="w-4 h-4 text-cyan-400" />
        <h2 className="text-sm font-bold tracking-wider text-slate-300 uppercase">Provider Verification (Documentation Uploads)</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Left Column */}
        <div className="space-y-6">
          
          {/* Background Checks Group */}
          <div className="p-4 bg-[#070b15] rounded-xl border border-slate-800 shadow-neo-inner space-y-3">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Background Checks (Select at least one)</h3>
            <FormCheckbox label="Ichat Background Check" {...register("ichatBackgroundCheck")} error={errors.ichatBackgroundCheck} />
            <FormCheckbox label="Workforce Background Check" {...register("workforceBackgroundCheck")} />
          </div>

          {/* Medicare Group */}
          <div className="p-4 bg-[#070b15] rounded-xl border border-slate-800 shadow-neo-inner space-y-3">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Medicare Documentation</h3>
            <FormCheckbox label="Medicare Base Enrollment" {...register("medicareBaseEnrollment")} />
            <FormCheckbox label="Medicare Opt Out" {...register("medicareOptOut")} />
          </div>

          {/* Registries & Sanctions Group */}
          <div className="p-4 bg-amber-950/20 rounded-xl border border-amber-900/50 shadow-neo-inner space-y-3">
            <div className="flex items-center space-x-2 mb-2">
              <ShieldAlert className="w-4 h-4 text-amber-500" />
              <h3 className="text-xs font-semibold text-amber-500 uppercase tracking-wider">Required Compliance Checks</h3>
            </div>
            <FormCheckbox label="MDHHS Sanctioned Provider Check" {...register("mdhhsSanctionedProviderCheckDoc")} error={errors.mdhhsSanctionedProviderCheckDoc} />
            <FormCheckbox label="Office of Inspector General Check" {...register("oigCheckDoc")} error={errors.oigCheckDoc} />
            <FormCheckbox label="SAM.gov Check" {...register("samGovCheckDoc")} error={errors.samGovCheckDoc} />
            <FormCheckbox label="MI Public Sex Offender Registry Check" {...register("miPublicSexOffenderRegistryCheck")} error={errors.miPublicSexOffenderRegistryCheck} />
            <FormCheckbox label="National Sex Offender Registry Check" {...register("nationalSexOffenderRegistryCheck")} error={errors.nationalSexOffenderRegistryCheck} />
            
            <div className="pt-2 border-t border-amber-900/30">
              <FormCheckbox label="MCBAP Verification (Optional)" {...register("mcbapVerification")} />
            </div>
          </div>

        </div>

        {/* Right Column */}
        <div className="space-y-6">
          
          {/* The "One of 6" Verification Group */}
          <div className="p-4 bg-[#070b15] rounded-xl border border-slate-800 shadow-neo-inner space-y-3 h-full">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Primary Verification (Select at least one)</h3>
            
            <div className="space-y-3 pb-4">
              <FormCheckbox label="LARA License" {...register("laraUploaded")} error={errors.laraUploaded} />
              
              {laraUploaded && (
                <div className="ml-7 animate-in fade-in slide-in-from-top-2 duration-200">
                  <FormSelect label="LARA License Type" options={LARA_LICENSE_TYPES} {...register("laraLicenseTypeDoc")} error={errors.laraLicenseTypeDoc} />
                </div>
              )}
            </div>

            <FormCheckbox label="Official Transcript (from Accredited School)" {...register("officialTranscript")} />
            <FormCheckbox label="Degree Verification (National Student Clearinghouse)" {...register("degreeVerification")} />
            <FormCheckbox label="ECFMG" {...register("ecfmg")} />
            <FormCheckbox label="AMA Verification" {...register("amaVerification")} />
            <FormCheckbox label="AOA Verification" {...register("aoaVerification")} />
          </div>

        </div>

      </div>
    </div>
  );
}