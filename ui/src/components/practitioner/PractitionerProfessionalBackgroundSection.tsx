import { useFormContext } from 'react-hook-form';
import { Briefcase } from 'lucide-react';
import { FormInput, FormSelect, FormCheckbox, FormMultiSelect, FormTextArea } from '../ui/FormControls';
import { BACKGROUND_SPECIALTIES, MALPRACTICE_COVERAGE_OPTIONS, LANGUAGES_SPOKEN } from '../../constants/options';
import type { PractitionerFormValues } from '../../features/practitioner/schema';

export function PractitionerProfessionalBackgroundSection() {
  const { register, watch, formState: { errors } } = useFormContext<PractitionerFormValues>();
  
  const specialities = watch('specialities') || [];
  const coverage = watch('currentMalpracticeCoverage');

  return (
    <div className="bg-[#131c31] border border-slate-800/80 rounded-xl p-6 shadow-neo-drop flex flex-col gap-6">
      <div className="flex items-center space-x-2 border-b border-slate-800 pb-2">
        <Briefcase className="w-4 h-4 text-cyan-400" />
        <h2 className="text-sm font-bold tracking-wider text-slate-300 uppercase">Professional Background</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          <div className="space-y-4">
            <FormMultiSelect label="Specialities *" options={BACKGROUND_SPECIALTIES} {...register("specialities")} error={errors.specialities} />
            {specialities.includes('Other') && (
              <div className="animate-in fade-in zoom-in duration-200">
                <FormInput label="Specify Other Speciality *" maxLength={255} {...register("otherSpeciality")} error={errors.otherSpeciality} />
              </div>
            )}
          </div>

          <div className="p-4 bg-[#070b15] rounded-xl border border-slate-800 shadow-neo-inner space-y-4">
            <FormCheckbox label="I agree to provide a Certificate of Liability *" {...register("certificateOfLiability")} error={errors.certificateOfLiability} />
            <FormInput label="Certificate of Liability Expiration Date *" type="date" {...register("certificateOfLiabilityExpirationDate")} error={errors.certificateOfLiabilityExpirationDate} />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <div className="p-4 bg-[#070b15] rounded-xl border border-slate-800 shadow-neo-inner space-y-4">
            <FormSelect label="Current Malpractice Insurance Coverage? *" options={MALPRACTICE_COVERAGE_OPTIONS} {...register("currentMalpracticeCoverage")} error={errors.currentMalpracticeCoverage} />
            
            {coverage === 'No' && (
              <div className="animate-in fade-in zoom-in duration-200">
                <FormTextArea label="Explanation *" placeholder="Provide a detailed explanation..." {...register("malpracticeExplanation")} error={errors.malpracticeExplanation} />
              </div>
            )}

            {coverage === 'Yes' && (
              <div className="animate-in fade-in zoom-in duration-200 space-y-4">
                <FormInput label="Upload Insurance Coverage File *" type="file" className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-cyan-500/10 file:text-cyan-400 hover:file:bg-cyan-500/20" />
                <FormInput label="Insurance Coverage Expiration Date *" type="date" {...register("malpracticeExpiration")} error={errors.malpracticeExpiration} />
              </div>
            )}
          </div>

          <FormMultiSelect label="Languages Spoken *" options={LANGUAGES_SPOKEN} {...register("languagesSpoken")} error={errors.languagesSpoken} />
        </div>
      </div>

      <div className="border-t border-slate-800 pt-6">
        <FormTextArea 
          label="Have you been trained in cultural competency? Please detail your experience. *" 
          placeholder="Describe your training..." 
          {...register("culturalCompetency")} 
          error={errors.culturalCompetency} 
        />
      </div>

    </div>
  );
}