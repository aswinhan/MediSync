import { useFormContext } from 'react-hook-form';
import { Building2 } from 'lucide-react';
import { FormInput, FormCheckbox } from '../ui/FormControls';
import type { PractitionerFormValues } from '../../features/practitioner/schema';

export function PractitionerHospitalAffiliationsSection() {
  const { register, watch, formState: { errors } } = useFormContext<PractitionerFormValues>();
  
  const addHospitalAffiliationRecord = watch('addHospitalAffiliationRecord');
  const isAffiliationCurrent = watch('isAffiliationCurrent');

  return (
    <div className="bg-surface-panel border border-border-subtle rounded-xl p-6 shadow-neo-drop flex flex-col gap-6">
      <div className="flex items-center space-x-2 border-b border-border-subtle pb-2">
        <Building2 className="w-4 h-4 text-cyan-400" />
        <h2 className="text-sm font-bold tracking-wider text-content-secondary uppercase">Hospital Affiliations</h2>
      </div>

      <div className="p-4 bg-surface-input rounded-xl border border-border-subtle shadow-neo-inner">
        <FormCheckbox label="Add Hospital Affiliation Record" {...register("addHospitalAffiliationRecord")} />
        
        {addHospitalAffiliationRecord && (
          <div className="mt-5 pt-5 border-t border-border-subtle grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="space-y-4">
              <FormInput label="Hospital Affiliation Name *" maxLength={255} {...register("hospitalAffiliationName")} error={errors.hospitalAffiliationName} />
              <FormInput label="Hospital Affiliation Address *" maxLength={255} {...register("hospitalAffiliationAddress")} error={errors.hospitalAffiliationAddress} />
              <FormInput label="Category of Membership *" maxLength={255} {...register("categoryOfMembership")} error={errors.categoryOfMembership} />
            </div>
            
            <div className="space-y-4">
              <FormInput label="Start Date of Affiliation *" type="date" {...register("startDateOfAffiliation")} error={errors.startDateOfAffiliation} />
              
              <div className="p-3 bg-surface-panel rounded-lg border border-border-subtle mt-2">
                <FormCheckbox label="Is this affiliation current?" {...register("isAffiliationCurrent")} />
              </div>
              
              {/* Hide End Date if the affiliation is currently active */}
              {!isAffiliationCurrent && (
                <div className="animate-in fade-in zoom-in duration-200">
                  <FormInput label="End Date of Affiliation *" type="date" {...register("endDateOfAffiliation")} error={errors.endDateOfAffiliation} />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}