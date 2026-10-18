import { LayoutDashboard, UserCircle, FolderOpen, Activity, Settings, CheckCircle2, Circle } from 'lucide-react';

export function Sidebar() {
  return (
    <aside className="w-64 bg-surface-base border-r border-border-subtle/50 hidden lg:flex flex-col h-full shrink-0">
      <div className="p-6 flex items-center space-x-3 mb-4">
        <div className="w-8 h-8 rounded bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-content-primary text-lg shadow-glow">
          M
        </div>
        <h1 className="text-sm font-bold tracking-wider text-content-primary uppercase">Medisync</h1>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        <a href="#" className="flex items-center space-x-3 text-content-muted hover:text-cyan-400 hover:bg-slate-800/30 px-3 py-2.5 rounded-lg transition-colors">
          <LayoutDashboard className="w-4 h-4" /> <span className="text-sm font-medium">Dashboard</span>
        </a>
        <a href="#" className="flex items-center space-x-3 text-content-muted hover:text-cyan-400 hover:bg-slate-800/30 px-3 py-2.5 rounded-lg transition-colors">
          <UserCircle className="w-4 h-4" /> <span className="text-sm font-medium">Profile</span>
        </a>
        <a href="#" className="flex items-center space-x-3 text-content-muted hover:text-cyan-400 hover:bg-slate-800/30 px-3 py-2.5 rounded-lg transition-colors">
          <FolderOpen className="w-4 h-4" /> <span className="text-sm font-medium">Document Vault</span>
        </a>
        <a href="#" className="flex items-center space-x-3 text-content-muted hover:text-cyan-400 hover:bg-slate-800/30 px-3 py-2.5 rounded-lg transition-colors">
          <Activity className="w-4 h-4" /> <span className="text-sm font-medium">Activity</span>
        </a>
        <a href="#" className="flex items-center space-x-3 text-content-muted hover:text-cyan-400 hover:bg-slate-800/30 px-3 py-2.5 rounded-lg transition-colors">
          <Settings className="w-4 h-4" /> <span className="text-sm font-medium">Settings</span>
        </a>

        <div className="pt-8 pb-2">
          <h3 className="px-3 text-xs font-bold text-slate-500 uppercase tracking-widest">Compliance Workflow</h3>
        </div>
        
        <div className="relative border-l border-border-subtle ml-5 pl-5 space-y-5 py-2">
          <div className="flex items-center text-cyan-400">
            <CheckCircle2 className="w-4 h-4 absolute -left-[9px] bg-surface-base" />
            <span className="text-sm font-bold">Practitioner Form</span>
          </div>
          <div className="flex items-center text-amber-500">
            <Circle className="w-4 h-4 absolute -left-[9px] bg-surface-base text-amber-500 fill-amber-500/20" />
            <span className="text-sm font-bold">Primary Verification</span>
          </div>
          <div className="flex items-center text-slate-500">
            <Circle className="w-4 h-4 absolute -left-[9px] bg-surface-base" />
            <span className="text-sm font-medium">Committee Review</span>
          </div>
          <div className="flex items-center text-slate-500">
            <Circle className="w-4 h-4 absolute -left-[9px] bg-surface-base" />
            <span className="text-sm font-medium">Communication</span>
          </div>
        </div>
      </nav>
    </aside>
  );
}