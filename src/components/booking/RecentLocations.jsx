import React from 'react';
import { Clock, Star, MapPin } from 'lucide-react';

const RecentLocations = () => {
  const locations = [
    { id: 1, title: 'SFO International Airport', subtitle: 'San Francisco, CA', icon: Clock },
    { id: 2, title: 'Home', subtitle: '456 Elm St, Apt 2B', icon: Star },
    { id: 3, title: 'Work', subtitle: '789 Market St, Financial District', icon: MapPin },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-zinc-500 px-1">
        Recent Destinations
      </h3>
      
      <div className="space-y-1">
        {locations.map((loc) => {
          const Icon = loc.icon;
          return (
            <button 
              key={loc.id} 
              className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-zinc-800/50 transition-all text-left group"
            >
              <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-zinc-800 flex items-center justify-center shrink-0 group-hover:bg-yellow-500/10 transition-colors">
                <Icon size={18} className="text-gray-500 dark:text-zinc-400 group-hover:text-yellow-600 dark:group-hover:text-yellow-500" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-gray-900 dark:text-white leading-tight">
                  {loc.title}
                </span>
                <span className="text-xs text-gray-500 dark:text-zinc-500 whitespace-nowrap overflow-hidden text-ellipsis">
                  {loc.subtitle}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default RecentLocations;
