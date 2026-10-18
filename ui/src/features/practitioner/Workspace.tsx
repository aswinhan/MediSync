import { FormProvider } from 'react-hook-form';
import { ShieldCheck } from 'lucide-react';
import type { PractitionerFormValues } from './schema';
import { usePractitionerForm } from './usePractitionerForm';
import { PractitionerInfoSection } from '../../components/practitioner/PractitionerInfoSection';
import { PractitionerAddressSection } from '../../components/practitioner/PractitionerAddressSection';
import { PractitionerEducationSection } from '../../components/practitioner/PractitionerEducationSection';
import { PractitionerMedicalTrainingSection } from '../../components/practitioner/PractitionerMedicalTrainingSection';
import { PractitionerHospitalAffiliationsSection } from '../../components/practitioner/PractitionerHospitalAffiliationsSection';
import { PractitionerLicenseSection } from '../../components/practitioner/PractitionerLicenseSection';
import { PractitionerProfessionalBackgroundSection } from '../../components/practitioner/PractitionerProfessionalBackgroundSection';
import { PractitionerWorkHistorySection } from '../../components/practitioner/PractitionerWorkHistorySection';
import { PractitionerAttestationsSection } from '../../components/practitioner/PractitionerAttestationsSection';
import { PractitionerPsvSection } from '../../components/practitioner/PractitionerPsvSection';
import { PractitionerProviderVerificationSection } from '../../components/practitioner/PractitionerProviderVerificationSection';

export function PractitionerWorkspace() {
  const methods = usePractitionerForm();

  const onSubmit = (data: PractitionerFormValues) => {
    console.log("Valid Payload Ready for API:", data);
    alert("Form is valid! Check console for payload.");
  };

  return (
    <div className="min-h-screen bg-[#0b1120] text-slate-200 font-sans p-6 pb-20">
      <header className="flex items-center space-x-3 bg-[#131c31] border border-slate-800 rounded-xl px-6 py-4 mb-6 shadow-neo-drop">
        <div className="bg-cyan-500/10 p-2 rounded-lg border border-cyan-500/20 text-cyan-400">
          <ShieldCheck className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-lg font-semibold tracking-wide text-white">MEDISYNC</h1>
          <p className="text-xs text-slate-400">Individual Practitioner Credentialing Application</p>
        </div>
      </header>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="max-w-4xl mx-auto space-y-6">
          
          <PractitionerInfoSection />
          <PractitionerAddressSection />
          <PractitionerEducationSection />
          <PractitionerMedicalTrainingSection />
          <PractitionerHospitalAffiliationsSection />
          <PractitionerLicenseSection />
          <PractitionerProfessionalBackgroundSection />
          <PractitionerWorkHistorySection />
          <PractitionerAttestationsSection />
          <PractitionerPsvSection />
          <PractitionerProviderVerificationSection />
          <div className="flex justify-end pt-4 sticky bottom-6 z-10">
            <button
              type="submit"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-3 px-8 rounded-xl shadow-glow transition-all text-sm uppercase tracking-widest border border-cyan-400/30"
            >
              Simulate Submit
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}