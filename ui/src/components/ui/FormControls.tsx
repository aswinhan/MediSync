import { forwardRef } from 'react';

interface BaseInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: { message?: string };
}

export const FormInput = forwardRef<HTMLInputElement, BaseInputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="flex flex-col w-full">
        <label className="block text-slate-400 mb-1.5 text-xs font-medium">{label}</label>
        <input
          ref={ref}
          className={`w-full bg-[#070b15] border ${error ? 'border-red-500' : 'border-slate-800'} rounded-lg px-3 py-2.5 text-slate-200 text-sm shadow-neo-inner focus:outline-none focus:border-cyan-500 transition-colors ${className}`}
          {...props}
        />
        {error?.message && <span className="text-red-400 text-[10px] mt-1.5 font-medium tracking-wide">{error.message}</span>}
      </div>
    );
  }
);
FormInput.displayName = 'FormInput';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { label: string; value: string }[];
  error?: { message?: string };
}

export const FormSelect = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, error, className = '', ...props }, ref) => {
    return (
      <div className="flex flex-col w-full">
        <label className="block text-slate-400 mb-1.5 text-xs font-medium">{label}</label>
        <select
          ref={ref}
          className={`w-full bg-[#070b15] border ${error ? 'border-red-500' : 'border-slate-800'} rounded-lg px-3 py-2.5 text-slate-200 text-sm shadow-neo-inner focus:outline-none focus:border-cyan-500 transition-colors ${className}`}
          {...props}
        >
          <option value="" disabled>Select an option</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        {error?.message && <span className="text-red-400 text-[10px] mt-1.5 font-medium tracking-wide">{error.message}</span>}
      </div>
    );
  }
);
FormSelect.displayName = 'FormSelect';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: { message?: string };
}

export const FormCheckbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="flex flex-col">
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            ref={ref}
            className={`w-4 h-4 rounded bg-[#070b15] border-slate-700 text-cyan-500 focus:ring-0 focus:ring-offset-0 ${className}`}
            {...props}
          />
          <span className="text-slate-300 text-sm font-medium">{label}</span>
        </div>
        {error?.message && <span className="text-red-400 text-[10px] mt-1 ml-7 font-medium tracking-wide">{error.message}</span>}
      </div>
    );
  }
);
FormCheckbox.displayName = 'FormCheckbox';