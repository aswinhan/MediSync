import { useFormContext } from 'react-hook-form';
import { MapPin, Home } from 'lucide-react';
import { FormInput } from '../ui/FormControls';
import type { PractitionerFormValues } from '../../features/practitioner/schema';

export function PractitionerAddressSection() {
  const { register, formState: { errors } } = useFormContext<PractitionerFormValues>();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      
      {/* Office Address Panel */}
      <div className="bg-[#131c31] border border-slate-800/80 rounded-xl p-6 shadow-neo-drop flex flex-col gap-4">
        <div className="flex items-center space-x-2 border-b border-slate-800 pb-2 mb-2">
          <MapPin className="w-4 h-4 text-cyan-400" />
          <h2 className="text-sm font-bold tracking-wider text-slate-300 uppercase">Office Address</h2>
        </div>
        
        <FormInput label="Street 1 *" maxLength={255} {...register("officeStreet1")} error={errors.officeStreet1} />
        <FormInput label="Street 2" maxLength={255} {...register("officeStreet2")} error={errors.officeStreet2} />
        
        <div className="grid grid-cols-2 gap-4">
          <FormInput label="City *" maxLength={255} {...register("officeCity")} error={errors.officeCity} />
          <FormInput label="Zipcode *" maxLength={255} {...register("officeZipcode")} error={errors.officeZipcode} />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <FormInput label="State *" maxLength={255} {...register("officeState")} error={errors.officeState} />
          <FormInput label="County *" maxLength={255} {...register("officeCounty")} error={errors.officeCounty} />
        </div>
      </div>

      {/* Home Address Panel */}
      <div className="bg-[#131c31] border border-slate-800/80 rounded-xl p-6 shadow-neo-drop flex flex-col gap-4">
        <div className="flex items-center space-x-2 border-b border-slate-800 pb-2 mb-2">
          <Home className="w-4 h-4 text-cyan-400" />
          <h2 className="text-sm font-bold tracking-wider text-slate-300 uppercase">Home Address</h2>
        </div>
        
        <FormInput label="Street 1 *" maxLength={255} {...register("homeStreet1")} error={errors.homeStreet1} />
        <FormInput label="Street 2" maxLength={255} {...register("homeStreet2")} error={errors.homeStreet2} />
        
        <div className="grid grid-cols-2 gap-4">
          <FormInput label="City *" maxLength={255} {...register("homeCity")} error={errors.homeCity} />
          <FormInput label="Zipcode *" maxLength={255} {...register("homeZipcode")} error={errors.homeZipcode} />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <FormInput label="State *" maxLength={255} {...register("homeState")} error={errors.homeState} />
          <FormInput label="County *" maxLength={255} {...register("homeCounty")} error={errors.homeCounty} />
        </div>
      </div>

    </div>
  );
}