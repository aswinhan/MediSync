import { useFormContext } from 'react-hook-form';
import { ShieldAlert, FileSignature } from 'lucide-react';
import { FormInput, FormSelect, FormCheckbox, FormTextArea } from '../ui/FormControls';
import { YES_NO_OPTIONS, MALPRACTICE_COVERAGE_OPTIONS } from '../../constants/options';
import type { PractitionerFormValues } from '../../features/practitioner/schema';

export function PractitionerAttestationsSection() {
  const { register, watch, formState: { errors } } = useFormContext<PractitionerFormValues>();
  
  const essentialDuties = watch('essentialDuties');
  const illegalDrugUse = watch('illegalDrugUse');
  const lossOfLicense = watch('lossOfLicense');
  const felonyConvictions = watch('felonyConvictions');
  const lossOfPrivileges = watch('lossOfPrivileges');

  return (
    <div className="bg-surface-panel border border-border-subtle rounded-xl p-6 shadow-neo-drop flex flex-col gap-6">
      <div className="flex items-center space-x-2 border-b border-border-subtle pb-2">
        <ShieldAlert className="w-4 h-4 text-cyan-400" />
        <h2 className="text-sm font-bold tracking-wider text-content-secondary uppercase">Acknowledgements & Attestations</h2>
      </div>

      <div className="p-4 bg-amber-950/20 border border-amber-900/50 rounded-xl shadow-neo-inner">
        <FormCheckbox 
          label="I acknowledge: If denied credentialing, provider shall be informed in writing of the reason for the adverse credentialing decision. Each provider is afforded an appeal process by written notification within 30 days. *" 
          {...register("credentialingAcknowledgement")} 
          error={errors.credentialingAcknowledgement} 
          className="text-amber-500"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6">
        
        {/* Row 1: Essential Duties */}
        <div className="space-y-3">
          <FormSelect label="Can you perform the essential duties of the position? *" options={YES_NO_OPTIONS} {...register("essentialDuties")} error={errors.essentialDuties} />
          {essentialDuties === 'No' && (
            <div className="animate-in fade-in zoom-in duration-200">
              <FormTextArea label="Reason for inability *" {...register("essentialDutiesReason")} error={errors.essentialDutiesReason} />
            </div>
          )}
        </div>

        {/* Row 2: Drug Use */}
        <div className="space-y-3">
          <FormSelect label="Lack of present illegal drug use? *" options={YES_NO_OPTIONS} {...register("illegalDrugUse")} error={errors.illegalDrugUse} />
          {illegalDrugUse === 'No' && (
            <div className="animate-in fade-in zoom-in duration-200">
              <FormTextArea label="Explanation *" {...register("illegalDrugUseExplanation")} error={errors.illegalDrugUseExplanation} />
            </div>
          )}
        </div>

        {/* Row 3: License Loss */}
        <div className="space-y-3">
          <FormSelect label="History of loss of license? *" options={YES_NO_OPTIONS} {...register("lossOfLicense")} error={errors.lossOfLicense} />
          {lossOfLicense === 'Yes' && (
            <div className="animate-in fade-in zoom-in duration-200">
              <FormTextArea label="Explanation *" {...register("lossOfLicenseExplanation")} error={errors.lossOfLicenseExplanation} />
            </div>
          )}
        </div>

        {/* Row 4: Felonies */}
        <div className="space-y-3">
          <FormSelect label="History of felony convictions? *" options={YES_NO_OPTIONS} {...register("felonyConvictions")} error={errors.felonyConvictions} />
          {felonyConvictions === 'Yes' && (
            <div className="animate-in fade-in zoom-in duration-200">
              <FormTextArea label="Explanation *" {...register("felonyConvictionsExplanation")} error={errors.felonyConvictionsExplanation} />
            </div>
          )}
        </div>

        {/* Row 5: Privilege Loss */}
        <div className="space-y-3">
          <FormSelect label="History of loss or limitations of privileges or disciplinary action? *" options={YES_NO_OPTIONS} {...register("lossOfPrivileges")} error={errors.lossOfPrivileges} />
          {lossOfPrivileges === 'Yes' && (
            <div className="animate-in fade-in zoom-in duration-200">
              <FormTextArea label="Explanation *" {...register("lossOfPrivilegesExplanation")} error={errors.lossOfPrivilegesExplanation} />
            </div>
          )}
        </div>

        {/* Row 6: Malpractice Sync */}
        <div className="space-y-3">
          <FormSelect label="Current Malpractice Insurance Coverage? *" options={MALPRACTICE_COVERAGE_OPTIONS} {...register("currentMalpracticeCoverage")} error={errors.currentMalpracticeCoverage} />
          <p className="text-[10px] text-slate-500 font-medium tracking-wide">This field automatically synchronizes with the Professional Background section.</p>
        </div>

      </div>

      <div className="border-t border-border-subtle pt-6 mt-4 flex items-end space-x-4">
        <div className="bg-cyan-500/10 p-3 rounded-lg border border-cyan-500/20 text-cyan-400">
          <FileSignature className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <FormInput 
            label="Attestation by the applicant of the correctness and completeness of application (e-Signature) *" 
            placeholder="Type your full legal name..." 
            maxLength={255} 
            {...register("attestationSignature")} 
            error={errors.attestationSignature} 
            className="text-cyan-100 font-medium placeholder-cyan-900/50"
          />
        </div>
      </div>

    </div>
  );
}