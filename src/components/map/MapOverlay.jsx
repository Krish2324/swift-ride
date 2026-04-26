import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

const MapOverlay = ({ pickup, eta }) => {
  return (
    <div className="absolute inset-0 pointer-events-none p-6">
      <div className="flex justify-between items-start gap-4">
        {/* Pickup Info Card */}
        <div className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md rounded-2xl p-4 shadow-premium pointer-events-auto max-w-xs animate-in fade-in slide-in-from-top duration-700">
          <div className="flex items-start gap-4">
            <div className="bg-yellow-500/20 text-yellow-600 p-2 rounded-full mt-1 shrink-0">
              <MapPin size={20} />
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-widest mb-1">Pickup From</p>
              <p className="text-sm font-bold text-gray-900 dark:text-white leading-tight">
                {pickup}
              </p>
            </div>
          </div>
        </div>

        {/* ETA Card */}
        <div className="bg-zinc-900/90 dark:bg-white/90 backdrop-blur-md text-white dark:text-zinc-900 rounded-2xl p-4 shadow-2xl pointer-events-auto flex flex-col items-end animate-in fade-in slide-in-from-right duration-700 delay-200">
          <p className="text-[10px] font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-widest mb-1">Estimated Arrival</p>
          <p className="text-3xl font-black text-yellow-500 leading-none">
            {eta} <span className="text-sm font-bold uppercase ml-1">min</span>
          </p>
        </div>
      </div>

      {/* Center Pin / Dropoff Mock */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <div className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-4 py-2 rounded-full text-xs font-bold mb-3 shadow-2xl animate-bounce duration-[2000ms]">
          Dropping here
        </div>
        <div className="relative">
          <div className="w-8 h-8 bg-yellow-500 rounded-full border-4 border-white dark:border-zinc-900 shadow-2xl flex items-center justify-center">
            <div className="w-2.5 h-2.5 bg-white dark:bg-zinc-900 rounded-full shadow-inner"></div>
          </div>
          <div className="absolute -inset-4 bg-yellow-500/20 rounded-full animate-ping duration-[1500ms]"></div>
        </div>
      </div>
    </div>
  );
};

export default MapOverlay;
