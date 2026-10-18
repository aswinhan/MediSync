import { UploadCloud } from 'lucide-react';
import { forwardRef } from 'react';

interface BaseInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: { message?: string };
}

export const FormInput = forwardRef<HTMLInputElement, BaseInputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="flex flex-col w-full">
        <label className="block text-content-muted mb-1.5 text-xs font-medium">{label}</label>
        <input
          ref={ref}
          className={`w-full bg-surface-input border ${error ? 'border-red-500' : 'border-border-subtle'} rounded-lg px-3 py-2.5 text-content-primary text-sm shadow-neo-inner focus:outline-none focus:border-cyan-500 transition-colors ${className}`}
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
        <label className="block text-content-muted mb-1.5 text-xs font-medium">{label}</label>
        <select
          ref={ref}
          className={`w-full bg-surface-input border ${error ? 'border-red-500' : 'border-border-subtle'} rounded-lg px-3 py-2.5 text-content-primary text-sm shadow-neo-inner focus:outline-none focus:border-cyan-500 transition-colors ${className}`}
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
            className={`w-4 h-4 rounded bg-surface-input border-slate-700 text-cyan-500 focus:ring-0 focus:ring-offset-0 ${className}`}
            {...props}
          />
          <span className="text-content-secondary text-sm font-medium">{label}</span>
        </div>
        {error?.message && <span className="text-red-400 text-[10px] mt-1 ml-7 font-medium tracking-wide">{error.message}</span>}
      </div>
    );
  }
);
FormCheckbox.displayName = 'FormCheckbox';

export const FormTextArea = forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string; error?: { message?: string } }>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="flex flex-col w-full">
        <label className="block text-content-muted mb-1.5 text-xs font-medium">{label}</label>
        <textarea
          ref={ref}
          className={`w-full bg-surface-input border ${error ? 'border-red-500' : 'border-border-subtle'} rounded-lg px-3 py-2.5 text-content-primary text-sm shadow-neo-inner focus:outline-none focus:border-cyan-500 transition-colors min-h-[100px] ${className}`}
          {...props}
        />
        {error?.message && <span className="text-red-400 text-[10px] mt-1.5 font-medium tracking-wide">{error.message}</span>}
      </div>
    );
  }
);
FormTextArea.displayName = 'FormTextArea';

interface MultiSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { label: string; value: string }[];
  error?: { message?: string };
}

export const FormMultiSelect = forwardRef<HTMLSelectElement, MultiSelectProps>(
  ({ label, options, error, className = '', ...props }, ref) => {
    return (
      <div className="flex flex-col w-full">
        <label className="block text-content-muted mb-1.5 text-xs font-medium">
          {label} <span className="text-[10px] text-slate-500 font-normal tracking-wide ml-2">(Hold Ctrl/Cmd to select multiple)</span>
        </label>
        <select
          multiple
          ref={ref}
          className={`w-full bg-surface-input border ${error ? 'border-red-500' : 'border-border-subtle'} rounded-lg px-3 py-2.5 text-content-primary text-sm shadow-neo-inner focus:outline-none focus:border-cyan-500 transition-colors h-32 ${className}`}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} className="py-1.5 px-2 hover:bg-slate-800 cursor-pointer rounded mb-0.5">{opt.label}</option>
          ))}
        </select>
        {error?.message && <span className="text-red-400 text-[10px] mt-1.5 font-medium tracking-wide">{error.message}</span>}
      </div>
    );
  }
);
FormMultiSelect.displayName = 'FormMultiSelect';

export const FormToggle = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement> & { label?: string; error?: any }>(
  ({ label, className = '', error, ...props }, ref) => (
    <label className={`flex flex-col items-center justify-center cursor-pointer ${className}`}>
      {label && <span className="mb-3 text-xs font-semibold text-content-secondary text-center h-8 flex items-center leading-snug">{label}</span>}
      <div className="relative">
        <input type="checkbox" className="sr-only peer" ref={ref} {...props} />
        <div className={`w-11 h-6 bg-slate-800 border ${error ? 'border-red-500' : 'border-slate-700'} peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-400 peer-checked:after:bg-cyan-400 after:border-slate-400 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-900/40 peer-checked:border-cyan-500 shadow-neo-inner`}></div>
      </div>
    </label>
  )
);
FormToggle.displayName = 'FormToggle';

export const FormUploadCard = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement> & { label: string; statusColor?: string; error?: any }>(
  ({ label, statusColor = 'bg-amber-500', error, className = '', ...props }, ref) => {
    return (
      <div className={`flex flex-col items-center justify-between p-4 bg-surface-input rounded-xl border ${error ? 'border-red-500' : 'border-border-subtle'} shadow-neo-inner relative transition-colors hover:border-cyan-900/50 ${className}`}>
        <FormToggle label={label} ref={ref} {...props} error={error} />
        
        <div className="mt-4 pt-3 border-t border-border-subtle/50 w-full flex flex-col items-center">
          <label className="cursor-pointer flex flex-col items-center text-slate-500 hover:text-cyan-400 transition-colors group">
            <UploadCloud className="w-5 h-5 mb-1.5 group-hover:scale-110 transition-transform" />
            <span className="text-[9px] uppercase tracking-widest flex items-center gap-1.5 font-bold">
              Verification <span className={`w-1.5 h-1.5 rounded-full ${statusColor} shadow-[0_0_5px_currentColor]`} />
            </span>
            {/* Hidden actual file input for functionality */}
            <input type="file" className="hidden" />
          </label>
        </div>
      </div>
    );
  }
);
FormUploadCard.displayName = 'FormUploadCard';