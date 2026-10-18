import { useFormContext } from 'react-hook-form';
import { GraduationCap } from 'lucide-react';
import { FormInput, FormCheckbox } from '../ui/FormControls';
import type { PractitionerFormValues } from '../../features/practitioner/schema';

export function PractitionerEducationSection() {
  const { register, watch, formState: { errors } } = useFormContext<PractitionerFormValues>();
  
  // Watch the checkbox to conditionally render the education fields
  const addEducationRecord = watch('addEducationRecord');

  return (
    <div className="bg-[#131c31] border border-slate-800/80 rounded-xl p-6 shadow-neo-drop flex flex-col gap-6">
      <div className="flex items-center space-x-2 border-b border-slate-800 pb-2">
        <GraduationCap className="w-4 h-4 text-cyan-400" />
        <h2 className="text-sm font-bold tracking-wider text-slate-300 uppercase">Academics & Training</h2>
      </div>

      <div className="p-4 bg-[#070b15] rounded-xl border border-slate-800 shadow-neo-inner">
        <FormCheckbox label="Add Education Record" {...register("addEducationRecord")} />
        
        {addEducationRecord && (
          <div className="mt-5 pt-5 border-t border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="space-y-4">
              <FormInput label="Degree *" maxLength={255} {...register("degree")} error={errors.degree} />
              <FormInput label="Graduation Date *" type="date" {...register("graduationDate")} error={errors.graduationDate} />
            </div>
            
            <div className="space-y-4">
              <FormInput label="College/University Name *" maxLength={255} {...register("collegeName")} error={errors.collegeName} />
              <FormInput label="College/University Address *" maxLength={255} {...register("collegeAddress")} error={errors.collegeAddress} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}