import { useFormContext } from 'react-hook-form';
import { FormInput, FormSelect } from '../ui/FormControls';
import { VERIFIER_ACCREDITING_ORGS } from '../../constants/options';
import type { PractitionerFormValues } from '../../features/practitioner/schema';

export function PractitionerPsvSection() {
  const { register, watch, formState: { errors } } = useFormContext<PractitionerFormValues>();
  const verifierOrg = watch('verifierAccreditingOrg');

  return (
    <div className="bg-surface-panel border border-border-subtle rounded-xl p-5 shadow-neo-drop flex flex-col gap-4">
      <h2 className="text-sm font-bold tracking-wider text-content-secondary uppercase border-b border-border-subtle pb-2">Provider Verification (PSV)</h2>
      
      <div className="space-y-4">
        <FormSelect label="Verifier's Accrediting Organization *" options={VERIFIER_ACCREDITING_ORGS} {...register("verifierAccreditingOrg")} error={errors.verifierAccreditingOrg} />
        {verifierOrg === 'Other' && (
          <FormInput label="Other Accrediting Organization *" maxLength={255} {...register("otherVerifierAccreditingOrg")} error={errors.otherVerifierAccreditingOrg} />
        )}
        
        <div className="grid grid-cols-2 gap-4">
          <FormInput label="Provider Name" placeholder="Lookup..." {...register("providerNameId")} />
          <FormInput label="Primary Source Verifier" placeholder="Lookup..." {...register("primarySourceVerifierId")} />
        </div>
        <FormInput label="Credentialing Profile ID" placeholder="Lookup..." {...register("credentialingProfileId")} />
      </div>
    </div>
  );
}