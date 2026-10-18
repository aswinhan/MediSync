import { useFormContext } from 'react-hook-form';
import { Stethoscope } from 'lucide-react';
import { FormInput, FormCheckbox } from '../ui/FormControls';
import { MEDICAL_TRAINING_TYPES, SPECIALTY_OPTIONS } from '../../constants/options';
import type { PractitionerFormValues } from '../../features/practitioner/schema';

export function PractitionerMedicalTrainingSection() {
  const { register, watch, formState: { errors } } = useFormContext<PractitionerFormValues>();
  const addMedicalTrainingRecord = watch('addMedicalTrainingRecord');

  return (
    <div className="bg-[#131c31] border border-slate-800/80 rounded-xl p-6 shadow-neo-drop flex flex-col gap-6">
      <div className="flex items-center space-x-2 border-b border-slate-800 pb-2">
        <Stethoscope className="w-4 h-4 text-cyan-400" />
        <h2 className="text-sm font-bold tracking-wider text-slate-300 uppercase">Post Graduate Medical Training</h2>
      </div>

      <div className="p-4 bg-[#070b15] rounded-xl border border-slate-800 shadow-neo-inner">
        <FormCheckbox label="Add Post Graduate Medical Training Record" {...register("addMedicalTrainingRecord")} />
        
        {addMedicalTrainingRecord && (
          <div className="mt-5 pt-5 border-t border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="space-y-4">
              <label className="block space-y-1 text-sm font-medium text-slate-300">
                <span>Medical Training Type *</span>
                <select className="w-full rounded-lg border border-slate-700 bg-[#131c31] px-3 py-2 text-slate-100 focus:border-cyan-400 focus:outline-none" {...register("medicalTrainingType")}>
                  <option value="">Select medical training type</option>
                  {MEDICAL_TRAINING_TYPES.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
                </select>
                {errors.medicalTrainingType && <span className="text-xs text-red-400">{errors.medicalTrainingType.message}</span>}
              </label>
              <FormInput label="Hospital Name *" maxLength={255} {...register("medicalTrainingHospitalName")} error={errors.medicalTrainingHospitalName} />
              <FormInput label="Hospital Address *" maxLength={255} {...register("medicalTrainingHospitalAddress")} error={errors.medicalTrainingHospitalAddress} />
            </div>
            
            <div className="space-y-4">
              <label className="block space-y-1 text-sm font-medium text-slate-300">
                <span>Specialty *</span>
                <select className="w-full rounded-lg border border-slate-700 bg-[#131c31] px-3 py-2 text-slate-100 focus:border-cyan-400 focus:outline-none" {...register("specialty")}>
                  <option value="">Select specialty</option>
                  {SPECIALTY_OPTIONS.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
                </select>
                {errors.specialty && <span className="text-xs text-red-400">{errors.specialty.message}</span>}
              </label>
              <div className="grid grid-cols-2 gap-4">
                <FormInput label="Training Start Date *" type="date" {...register("trainingStartDate")} error={errors.trainingStartDate} />
                <FormInput label="Training End Date *" type="date" {...register("trainingEndDate")} error={errors.trainingEndDate} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}