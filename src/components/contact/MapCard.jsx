import React from 'react';
import { Building2 } from 'lucide-react';

const MapCard = () => {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-3xl p-10 shadow-premium border border-gray-100 dark:border-zinc-800 space-y-6 animate-in fade-in slide-in-from-left duration-1000 delay-200">
      <div className="flex items-center gap-3">
        <Building2 className="text-gray-400 dark:text-zinc-500" size={24} />
        <h3 className="text-xl font-black text-gray-900 dark:text-white tracking-tight">Headquarters</h3>
      </div>
      
      <div className="w-full h-48 rounded-2xl overflow-hidden relative group">
        <img 
          src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1760&auto=format&fit=crop" 
          alt="Map" 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[5000ms]" 
        />
        <div className="absolute inset-0 bg-yellow-500/10 mix-blend-multiply transition-opacity group-hover:opacity-0"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 bg-yellow-500 rounded-full border-4 border-white dark:border-zinc-900 shadow-xl animate-bounce"></div>
        </div>
      </div>
      
      <p className="text-sm font-medium text-gray-500 dark:text-zinc-400 leading-relaxed">
        400 Mobility Way, Suite 1200<br />
        San Francisco, CA 94105
      </p>
    </div>
  );
};

export default MapCard;
