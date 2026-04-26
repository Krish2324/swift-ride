import React from 'react';
import { Radio } from 'lucide-react';

const AvailabilityToggle = ({ isOnline, onToggle }) => {
  return (
    <div className="relative flex items-center bg-gray-100 dark:bg-zinc-800 rounded-full p-1 shadow-inner border border-gray-200 dark:border-zinc-700 w-full md:w-auto">
      <button 
        onClick={() => onToggle(false)}
        className={`flex-1 px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
          !isOnline 
            ? 'bg-white dark:bg-zinc-700 text-gray-900 dark:text-white shadow-sm' 
            : 'text-gray-500 dark:text-zinc-500 hover:text-gray-700'
        }`}
      >
        Offline
      </button>
      <button 
        onClick={() => onToggle(true)}
        className={`flex-1 flex items-center justify-center gap-2 px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
          isOnline 
            ? 'bg-gradient-to-b from-yellow-400 to-yellow-500 text-gray-900 shadow-lg shadow-yellow-500/20' 
            : 'text-gray-500 dark:text-zinc-500 hover:text-gray-700'
        }`}
      >
        <div className={`w-2 h-2 rounded-full ${isOnline ? 'bg-gray-900 animate-pulse' : 'bg-gray-400'}`}></div>
        Online
      </button>
    </div>
  );
};

export default AvailabilityToggle;
