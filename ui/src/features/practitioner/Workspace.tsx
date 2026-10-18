import { FormProvider } from 'react-hook-form';
import type { PractitionerFormValues } from './schema';
import { usePractitionerForm } from './usePractitionerForm';

// Layout Components
import { Sidebar } from '../../components/layout/Sidebar';
import { TopHeader } from '../../components/layout/TopHeader';

// Left Column Sections (Practitioner Form)
import { PractitionerInfoSection } from '../../components/practitioner/PractitionerInfoSection';
import { PractitionerAddressSection } from '../../components/practitioner/PractitionerAddressSection';
import { PractitionerEducationSection } from '../../components/practitioner/PractitionerEducationSection';
import { PractitionerMedicalTrainingSection } from '../../components/practitioner/PractitionerMedicalTrainingSection';
import { PractitionerHospitalAffiliationsSection } from '../../components/practitioner/PractitionerHospitalAffiliationsSection';
import { PractitionerLicenseSection } from '../../components/practitioner/PractitionerLicenseSection';
import { PractitionerProfessionalBackgroundSection } from '../../components/practitioner/PractitionerProfessionalBackgroundSection';
import { PractitionerWorkHistorySection } from '../../components/practitioner/PractitionerWorkHistorySection';
import { PractitionerAttestationsSection } from '../../components/practitioner/PractitionerAttestationsSection';

// Right Column Sections (PSV & Document Verification)
import { PractitionerPsvSection } from '../../components/practitioner/PractitionerPsvSection';
import { PractitionerProviderVerificationSection } from '../../components/practitioner/PractitionerProviderVerificationSection';

export function PractitionerWorkspace() {
  const methods = usePractitionerForm();

  const onSubmit = (data: PractitionerFormValues) => {
    console.log("Valid Payload Ready for API:", data);
    alert("Form is valid! Check console for payload.");
  };

  return (
    <div className="flex h-screen bg-surface-base text-content-primary font-sans overflow-hidden">
      
      {/* 1. Left Sidebar Navigation */}
      <Sidebar />

      {/* 2. Main Workspace Area */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        <FormProvider {...methods}>
          
          {/* 3. Global Header (Inside FormProvider to access Status/Dates) */}
          <TopHeader />

          {/* 4. Scrollable Form Content Container */}
          <main className="flex-1 overflow-y-auto p-4 lg:p-8">
            <form onSubmit={methods.handleSubmit(onSubmit)} className="grid grid-cols-1 xl:grid-cols-12 gap-8 max-w-[1600px] mx-auto pb-24">
              
              {/* LEFT COLUMN: Practitioner Data (7 Columns Wide) */}
              <div className="xl:col-span-7 space-y-6">
                <PractitionerInfoSection />
                <PractitionerAddressSection />
                
                {/* Grouped sections for a tighter layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <PractitionerEducationSection />
                  <PractitionerMedicalTrainingSection />
                </div>
                
                <PractitionerHospitalAffiliationsSection />
                <PractitionerLicenseSection />
                <PractitionerProfessionalBackgroundSection />
                <PractitionerWorkHistorySection />
                <PractitionerAttestationsSection />
                
                <div className="flex justify-center pt-6">
                  <button type="submit" className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-content-primary font-bold py-3.5 px-12 rounded-full shadow-glow text-sm uppercase tracking-wider hover:scale-105 transition-transform">
                    Submit Application
                  </button>
                </div>
              </div>

              {/* RIGHT COLUMN: PSV & Auditing (5 Columns Wide) */}
              <div className="xl:col-span-5 space-y-6">
                <PractitionerPsvSection />
                <PractitionerProviderVerificationSection />
              </div>

            </form>
          </main>

        </FormProvider>
      </div>
    </div>
  );
}