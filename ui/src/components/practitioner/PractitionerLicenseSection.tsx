import { useFormContext } from 'react-hook-form';
import { Award } from 'lucide-react';
import { FormInput, FormSelect, FormCheckbox } from '../ui/FormControls';
import { 
  LICENSE_CERT_TYPES, 
  LARA_LICENSE_TYPES, 
  BOARD_CERTIFICATIONS, 
  NURSING_CERTIFICATIONS, 
  LICENSE_STATUS_OPTIONS 
} from '../../constants/options';
import type { PractitionerFormValues } from '../../features/practitioner/schema';

export function PractitionerLicenseSection() {
  const { register, watch, formState: { errors } } = useFormContext<PractitionerFormValues>();
  
  const addLicenseRecord = watch('addLicenseCertificationRecord');
  const type = watch('licenseCertificationType');
  const laraType = watch('laraLicenseType');
  const boardType = watch('boardCertification');

  return (
    <div className="bg-[#131c31] border border-slate-800/80 rounded-xl p-6 shadow-neo-drop flex flex-col gap-6">
      <div className="flex items-center space-x-2 border-b border-slate-800 pb-2">
        <Award className="w-4 h-4 text-cyan-400" />
        <h2 className="text-sm font-bold tracking-wider text-slate-300 uppercase">Practitioner License / Certification</h2>
      </div>

      <div className="p-4 bg-[#070b15] rounded-xl border border-slate-800 shadow-neo-inner">
        <FormCheckbox label="Add License / Certification Record" {...register("addLicenseCertificationRecord")} />
        
        {addLicenseRecord && (
          <div className="mt-5 pt-5 border-t border-slate-800 grid grid-cols-1 gap-6 animate-in fade-in slide-in-from-top-2 duration-300">
            
            {/* Top Row: Type Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormSelect 
                label="License/Certification Type *" 
                options={LICENSE_CERT_TYPES} 
                {...register("licenseCertificationType")} 
                error={errors.licenseCertificationType} 
              />
              <FormInput 
                label="Expiration Date *" 
                type="date" 
                {...register("licenseExpirationDate")} 
                error={errors.licenseExpirationDate} 
              />
            </div>

            {/* Dynamic Rendering based on Type Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#131c31] p-4 rounded-lg border border-slate-800">
              
              {/* Branch 1: LARA License */}
              {type === 'License' && (
                <>
                  <FormSelect label="License Types (LARA) *" options={LARA_LICENSE_TYPES} {...register("laraLicenseType")} error={errors.laraLicenseType} />
                  {laraType === 'Other' && (
                    <FormInput label="Other License Type *" maxLength={255} {...register("otherLicenseType")} error={errors.otherLicenseType} />
                  )}
                </>
              )}

              {/* Branch 2: Board Certification */}
              {type === 'Certification' && (
                <>
                  <FormSelect label="Board Certifications *" options={BOARD_CERTIFICATIONS} {...register("boardCertification")} error={errors.boardCertification} />
                  {boardType === 'Other' && (
                    <FormInput label="Other Board Certification *" maxLength={255} {...register("otherBoardCertification")} error={errors.otherBoardCertification} />
                  )}
                </>
              )}

              {/* Branch 3: Nursing Certification */}
              {type === 'Nursing Certification' && (
                <>
                  <FormSelect label="Nursing Certifications *" options={NURSING_CERTIFICATIONS} {...register("nursingCertification")} error={errors.nursingCertification} />
                  <FormSelect label="License/Certification Status *" options={LICENSE_STATUS_OPTIONS} {...register("licenseStatus")} error={errors.licenseStatus} />
                </>
              )}
            </div>

            {/* File Upload Simulation */}
            <div className="w-full md:w-1/2 mt-2">
              <FormInput 
                label="Upload Document Proof *" 
                type="file" 
                className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-cyan-500/10 file:text-cyan-400 hover:file:bg-cyan-500/20"
              />
            </div>

          </div>
        )}
      </div>
    </div>
  );
}