import React from 'react';
import { Settings, ChevronRight, User, Bell, Shield } from 'lucide-react';

const SettingsPanel = () => {
  const options = [
    { label: 'Edit Profile', icon: User },
    { label: 'Notifications', icon: Bell },
    { label: 'Security & Privacy', icon: Shield },
  ];

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-premium border border-gray-100 dark:border-zinc-800">
      <div className="flex items-center gap-2 mb-8 text-gray-900 dark:text-white leading-none">
        <Settings size={20} className="text-yellow-600 dark:text-yellow-500" />
        <h2 className="text-xl font-black tracking-tight">Quick Settings</h2>
      </div>

      <div className="space-y-2">
        {options.map((option) => {
          const Icon = option.icon;
          return (
            <button 
              key={option.label}
              className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-zinc-800 transition-all text-left flex items-center group"
            >
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-zinc-800 flex items-center justify-center text-gray-400 dark:text-zinc-500 group-hover:bg-yellow-500/10 group-hover:text-yellow-600 transition-colors">
                  <Icon size={16} />
                </div>
                <span className="text-sm font-bold text-gray-700 dark:text-zinc-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors tracking-tight">
                  {option.label}
                </span>
              </div>
              <ChevronRight size={18} className="text-gray-300 dark:text-zinc-700 group-hover:text-yellow-500 group-hover:translate-x-1 transition-all" />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SettingsPanel;
