import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ShieldCheck, User, FileText, Send, AlertTriangle, CheckCircle2, AlertCircle } from 'lucide-react';
import axios from 'axios';
import { practitionerSchema, type PractitionerFormValues } from './schema';
import { FormInput, FormSelect, FormCheckbox } from '../../components/ui/FormControls';

export function PractitionerWorkspace() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<any>(null);

  const { register, handleSubmit, watch, formState: { errors } } = useForm<PractitionerFormValues>({
    // We cast the resolver to any here to bypass complex Zod .superRefine() strict type mismatch warnings
    resolver: zodResolver(practitionerSchema) as any,
    defaultValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      taxId: "",
      practitionerNpi: "",
      isMedicareProvider: false,
      medicareNumber: "",
      sixMonthGap: "No",
      sixMonthGapReason: "",
      attestationSignature: "",
      psvDetails: {
        verifierAccreditingOrganization: "NCQA (NCQA)",
        otherAccreditingOrganization: "",
        laraLicense: "Medicine (MD/DO)",
        mdhhsSanctionedProviderCheck: false,
        officeOfInspectorGeneralCheck: false,
        samGovCheck: false
      }
    } as PractitionerFormValues // <-- This single cast fixes both Error 2322 and 2345!
  });

  const watchIsMedicareProvider = watch("isMedicareProvider");
  const watchVerifierOrg = watch("psvDetails.verifierAccreditingOrganization");
  const watchSixMonthGap = watch("sixMonthGap");

  const onSubmit = async (data: PractitionerFormValues) => {
    setIsSubmitting(true);
    setSubmitResult(null);
    try {
      const response = await axios.post('https://localhost:5001/api/practitioner/submit', data);
      setSubmitResult({ success: true, message: `Successfully Submitted! ID: ${response.data.submissionId}` });
    } catch (error: any) {
      setSubmitResult({
        success: false,
        message: error.response?.data?.detail || error.message || "Network error connecting to .NET backend"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b1120] text-slate-200 font-sans p-6">
      <header className="flex justify-between items-center bg-[#131c31] border border-slate-800 rounded-xl px-6 py-4 mb-6 shadow-neo-drop">
        <div className="flex items-center space-x-3">
          <div className="bg-cyan-500/10 p-2 rounded-lg border border-cyan-500/20 text-cyan-400">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-lg font-semibold tracking-wide text-white">MEDISYNC AI — ENTERPRISE PROVIDER SUITE</h1>
            <p className="text-xs text-slate-400">Credentialing & Provider Verification Workspace</p>
          </div>
        </div>
        <div className="flex items-center space-x-6 text-sm">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-slate-300">Global System Status: <strong className="text-emerald-400">Optimal</strong></span>
          </div>
          <div className="bg-[#070b15] px-4 py-1.5 rounded-full border border-slate-800 text-xs text-cyan-400">
            Verification Status: <strong>In-Progress</strong>
          </div>
        </div>
      </header>

      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* COL 1: Demographics */}
        <div className="bg-[#131c31] border border-slate-800/80 rounded-xl p-5 shadow-neo-drop flex flex-col gap-4">
          <div className="flex items-center space-x-2 border-b border-slate-800 pb-2">
            <User className="w-4 h-4 text-cyan-400" />
            <h2 className="text-sm font-bold tracking-wider text-slate-300 uppercase">Practitioner Details</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <FormInput label="First Name" {...register("firstName")} error={errors.firstName} />
            <FormInput label="Last Name" {...register("lastName")} error={errors.lastName} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <FormInput label="Date of Birth" type="date" {...register("dateOfBirth")} error={errors.dateOfBirth} />
            <FormInput label="Tax ID" placeholder="9 digits" {...register("taxId")} error={errors.taxId} />
          </div>
          <FormInput label="Practitioner NPI" placeholder="10 digits" {...register("practitionerNpi")} error={errors.practitionerNpi} />
          <div className="mt-2 p-3 bg-[#070b15] rounded-xl border border-slate-800 shadow-neo-inner">
            <FormCheckbox label="Medicare Provider Active?" {...register("isMedicareProvider")} />
            {watchIsMedicareProvider && (
              <div className="mt-3 pt-3 border-t border-slate-800">
                <FormInput label="Medicare Number" {...register("medicareNumber")} error={errors.medicareNumber} />
              </div>
            )}
          </div>
        </div>

        {/* COL 2: PSV & Compliance */}
        <div className="bg-[#131c31] border border-slate-800/80 rounded-xl p-5 shadow-neo-drop flex flex-col gap-4">
          <div className="flex items-center space-x-2 border-b border-slate-800 pb-2">
            <FileText className="w-4 h-4 text-cyan-400" />
            <h2 className="text-sm font-bold tracking-wider text-slate-300 uppercase">Primary Source Verification</h2>
          </div>
          <FormSelect 
            label="Verifier Accrediting Org" 
            {...register("psvDetails.verifierAccreditingOrganization")} error={errors.psvDetails?.verifierAccreditingOrganization}
            options={[
              { label: "NCQA (NCQA)", value: "NCQA (NCQA)" },
              { label: "Joint Commission", value: "Joint Commission" },
              { label: "URAC", value: "URAC" },
              { label: "Other", value: "Other" }
            ]} 
          />
          {watchVerifierOrg === "Other" && (
            <FormInput label="Specify Other Org" {...register("psvDetails.otherAccreditingOrganization")} error={errors.psvDetails?.otherAccreditingOrganization} />
          )}
          <FormSelect 
            label="LARA License Type" 
            {...register("psvDetails.laraLicense")} error={errors.psvDetails?.laraLicense}
            options={[
              { label: "Medicine (MD/DO)", value: "Medicine (MD/DO)" },
              { label: "Nursing (RN/LPN)", value: "Nursing (RN/LPN)" },
              { label: "Social Worker", value: "Social Worker" },
              { label: "Psychiatry", value: "Psychiatry" }
            ]} 
          />
          <div className="mt-2 p-3 bg-[#070b15] rounded-xl border border-slate-800 shadow-neo-inner space-y-3">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Required Audits</p>
            <FormCheckbox label="MDHHS Sanctioned Provider Check" {...register("psvDetails.mdhhsSanctionedProviderCheck")} error={errors.psvDetails?.mdhhsSanctionedProviderCheck} />
            <FormCheckbox label="OIG Inspector General Check" {...register("psvDetails.officeOfInspectorGeneralCheck")} error={errors.psvDetails?.officeOfInspectorGeneralCheck} />
            <FormCheckbox label="SAM.gov Clearance Check" {...register("psvDetails.samGovCheck")} error={errors.psvDetails?.samGovCheck} />
          </div>
        </div>

        {/* COL 3: History & Submission */}
        <div className="bg-[#131c31] border border-slate-800/80 rounded-xl p-5 shadow-neo-drop flex flex-col h-full justify-between">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 border-b border-slate-800 pb-2">
              <AlertTriangle className="w-4 h-4 text-cyan-400" />
              <h2 className="text-sm font-bold tracking-wider text-slate-300 uppercase">History & Actions</h2>
            </div>
            <FormSelect 
              label="6+ Month Gap in Employment?" 
              {...register("sixMonthGap")} error={errors.sixMonthGap}
              options={[{ label: "Yes", value: "Yes" }, { label: "No", value: "No" }]} 
            />
            {watchSixMonthGap === "Yes" && (
              <FormInput label="Explanation of Gap" placeholder="Provide detailed reason..." {...register("sixMonthGapReason")} error={errors.sixMonthGapReason} />
            )}
            <div className="pt-2">
              <FormInput label="Attestation e-Signature" placeholder="Type full legal name" {...register("attestationSignature")} error={errors.attestationSignature} />
            </div>
          </div>
          <div className="space-y-4 mt-6">
            {submitResult && (
              <div className={`p-3 rounded-lg text-xs font-medium border flex items-center space-x-2 ${submitResult.success ? 'bg-emerald-950/40 border-emerald-500/30 text-emerald-300' : 'bg-red-950/40 border-red-500/30 text-red-300'}`}>
                {submitResult.success ? <CheckCircle2 className="w-4 h-4 flex-shrink-0" /> : <AlertCircle className="w-4 h-4 flex-shrink-0" />}
                <span>{submitResult.message}</span>
              </div>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-medium py-2.5 rounded-lg shadow-glow transition-all flex items-center justify-center space-x-2 text-xs uppercase tracking-wider disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? "Validating & Submitting..." : "Submit Application"}</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}