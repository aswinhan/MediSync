import { useFormContext } from 'react-hook-form';
import { User, Calendar } from 'lucide-react';
import { FormInput, FormCheckbox } from '../ui/FormControls';
import type { PractitionerFormValues } from '../../features/practitioner/schema';

export function PractitionerInfoSection() {
  // useFormContext automatically connects to the parent form in Workspace.tsx
  const { register, watch, formState: { errors } } = useFormContext<PractitionerFormValues>();
  
  // Watch this specific field to conditionally render the Medicare Number input
  const isMedicareProvider = watch('isMedicareProvider');

  return (
    <div className="bg-[#131c31] border border-slate-800/80 rounded-xl p-6 shadow-neo-drop flex flex-col gap-6">
      
      {/* Details Sub-Section */}
      <div>
        <div className="flex items-center space-x-2 border-b border-slate-800 pb-2 mb-4">
          <Calendar className="w-4 h-4 text-cyan-400" />
          <h2 className="text-sm font-bold tracking-wider text-slate-300 uppercase">Details</h2>
        </div>
        <div className="w-1/2 pr-2">
          <FormInput label="Submission Date *" type="date" {...register("submissionDate")} error={errors.submissionDate} />
        </div>
      </div>

      {/* Practitioner Info Sub-Section */}
      <div>
        <div className="flex items-center space-x-2 border-b border-slate-800 pb-2 mb-4">
          <User className="w-4 h-4 text-cyan-400" />
          <h2 className="text-sm font-bold tracking-wider text-slate-300 uppercase">Practitioner Information</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-4">
          <div className="md:col-span-5">
            <FormInput label="First Name *" maxLength={255} {...register("firstName")} error={errors.firstName} />
          </div>
          <div className="md:col-span-2">
            <FormInput label="M.I." maxLength={1} {...register("middleInitial")} error={errors.middleInitial} />
          </div>
          <div className="md:col-span-5">
            <FormInput label="Last Name *" maxLength={255} {...register("lastName")} error={errors.lastName} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <FormInput label="Former Last Name" maxLength={255} {...register("formerLastName")} error={errors.formerLastName} />
          <FormInput label="Date of Birth *" type="date" {...register("dateOfBirth")} error={errors.dateOfBirth} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <FormInput label="Tax ID # *" maxLength={18} {...register("taxId")} error={errors.taxId} />
        </div>

        <div className="mt-4 p-4 bg-[#070b15] rounded-xl border border-slate-800 shadow-neo-inner">
          <FormCheckbox label="Medicare Provider?" {...register("isMedicareProvider")} />
          
          {/* Conditional Rendering block based on Salesforce logic */}
          {isMedicareProvider && (
            <div className="mt-4 pt-4 border-t border-slate-800">
              <div className="w-1/2">
                <FormInput label="Medicare Number *" maxLength={18} {...register("medicareNumber")} error={errors.medicareNumber} />
              </div>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}