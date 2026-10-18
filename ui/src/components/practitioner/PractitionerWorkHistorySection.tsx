import { useFormContext } from 'react-hook-form';
import { Clock } from 'lucide-react';
import { FormInput, FormSelect, FormCheckbox, FormTextArea } from '../ui/FormControls';
import { YES_NO_OPTIONS } from '../../constants/options';
import type { PractitionerFormValues } from '../../features/practitioner/schema';

export function PractitionerWorkHistorySection() {
  const { register, watch, formState: { errors } } = useFormContext<PractitionerFormValues>();
  const sixMonthGap = watch('sixMonthGap');

  return (
    <div className="bg-[#131c31] border border-slate-800/80 rounded-xl p-6 shadow-neo-drop flex flex-col gap-6">
      <div className="flex items-center space-x-2 border-b border-slate-800 pb-2">
        <Clock className="w-4 h-4 text-cyan-400" />
        <h2 className="text-sm font-bold tracking-wider text-slate-300 uppercase">Work History</h2>
      </div>

      <div className="space-y-6">
        <div className="p-4 bg-[#070b15] rounded-xl border border-slate-800 shadow-neo-inner">
          <FormCheckbox label="I can provide a resume with a five-year work history *" {...register("fiveYearWorkHistory")} error={errors.fiveYearWorkHistory} />
          <p className="text-[10px] text-slate-500 ml-7 mt-1 tracking-wide">Please provide a resume with five years of work history via document upload.</p>
        </div>

        <div className="w-full md:w-1/2">
          <FormSelect label="6+ month gap in employment since professionally licensed? *" options={YES_NO_OPTIONS} {...register("sixMonthGap")} error={errors.sixMonthGap} />
        </div>

        {sixMonthGap === 'Yes' && (
          <div className="p-5 bg-[#070b15] rounded-xl border border-slate-800 shadow-neo-inner grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <FormInput label="Gap Start Date *" type="date" {...register("sixMonthGapStartDate")} error={errors.sixMonthGapStartDate} />
                <FormInput label="Gap End Date *" type="date" {...register("sixMonthGapEndDate")} error={errors.sixMonthGapEndDate} />
              </div>
              <FormInput label="Gap Activity *" maxLength={255} {...register("sixMonthGapActivity")} error={errors.sixMonthGapActivity} />
            </div>
            
            <div className="h-full">
              <FormTextArea label="Gap Reason *" placeholder="Provide a detailed explanation for the gap..." className="h-full min-h-[120px]" {...register("sixMonthGapReason")} error={errors.sixMonthGapReason} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}