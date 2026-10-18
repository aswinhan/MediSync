import { useFormContext } from 'react-hook-form';
import { Bell, Search, ShieldCheck, Sun, Moon } from 'lucide-react';
import type { PractitionerFormValues } from '../../features/practitioner/schema';
import { PSV_STATUS_OPTIONS } from '../../constants/options';
import { useTheme } from '../theme/ThemeProvider';

export function TopHeader() {
  const { register } = useFormContext<PractitionerFormValues>();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 bg-surface-panel/95 backdrop-blur border-b border-border-subtle px-6 py-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <ShieldCheck className="w-5 h-5 text-cyan-400" />
          <h2 className="text-xs font-bold tracking-widest text-content-muted uppercase">Individual Practitioner Credentialing Application</h2>
        </div>
        <div className="flex items-center space-x-6 text-content-muted">
          <div className="flex items-center space-x-2 text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Global System Status</span>
          </div>
          
          {/* Theme Toggle Button */}
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-surface-input text-content-muted hover:text-cyan-400 transition-colors">
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          
          <Search className="w-4 h-4 hover:text-content-primary cursor-pointer" />
          <Bell className="w-4 h-4 hover:text-content-primary cursor-pointer" />
        </div>
      </div>

      <div className="flex items-center justify-between bg-surface-base rounded-xl p-4 border border-border-subtle shadow-neo-drop">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full bg-surface-input border-2 border-cyan-500 overflow-hidden shrink-0">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex&backgroundColor=transparent" alt="Profile" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs text-content-muted font-semibold uppercase tracking-wider">PSV ID:</span>
              <span className="text-lg font-bold text-cyan-500 tracking-wide">PSV-8947-02</span>
              <span className="text-[10px] bg-surface-input px-2 py-0.5 rounded text-content-muted">(read-only)</span>
            </div>
            <p className="text-xs text-content-muted mt-1">Practitioner: <strong className="text-content-primary">Alex Rodriguez</strong></p>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-8 text-xs">
          <div>
            <label className="block text-content-muted font-semibold uppercase tracking-wider mb-1">Status</label>
            <select {...register("psvStatus")} className="bg-surface-panel border border-cyan-500/50 text-cyan-500 font-bold rounded-lg px-3 py-1.5 focus:outline-none shadow-glow">
              {PSV_STATUS_OPTIONS.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
            </select>
          </div>
          <div>
            <span className="block text-content-muted font-semibold uppercase tracking-wider mb-1">Created</span>
            <span className="font-medium text-content-primary">2026-10-18</span>
          </div>
          <div>
            <span className="block text-content-muted font-semibold uppercase tracking-wider mb-1">Deadline</span>
            <span className="font-medium text-content-primary">2027-04-16</span>
          </div>
          <div className="bg-amber-500/10 border border-amber-500/30 p-2 rounded-lg">
            <span className="block text-amber-600 font-semibold uppercase tracking-wider mb-1">Days to Deadline</span>
            <span className="font-bold text-amber-500">180 Days</span>
          </div>
        </div>
      </div>
    </header>
  );
}