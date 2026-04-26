import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

const TripCard = ({ trip }) => {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-premium border border-gray-100 dark:border-zinc-800 flex flex-col gap-4 hover:shadow-xl transition-all group animate-in fade-in slide-in-from-bottom duration-500">
      <div className="flex justify-between items-start mb-2">
        <div className={`text-[10px] uppercase font-black px-2.5 py-1 rounded-full ${
          trip.status === 'Completed' 
            ? 'bg-green-500/10 text-green-600' 
            : 'bg-yellow-500/10 text-yellow-600'
        }`}>
          {trip.status}
        </div>
        <div className="text-sm font-black text-gray-900 dark:text-white tracking-tight">₹{trip.price}</div>
      </div>

      <div className="flex gap-4 relative">
        {/* Localized Timeline Visual */}
        <div className="flex flex-col items-center pt-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 z-10 shadow-sm border-2 border-white dark:border-zinc-900"></div>
          <div className="w-[1.5px] h-10 bg-gray-100 dark:bg-zinc-800 my-1"></div>
          <div className="w-2.5 h-2.5 rounded-full border-2 border-yellow-500 z-10 bg-white dark:bg-zinc-900"></div>
        </div>

        <div className="flex flex-col gap-5 w-full min-w-0">
          <div className="space-y-0.5">
            <p className="text-xs font-bold text-gray-900 dark:text-white truncate pr-2">{trip.pickup}</p>
            <p className="text-[10px] font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-widest">{trip.pickupTime}</p>
          </div>
          <div className="space-y-0.5">
            <p className="text-xs font-bold text-gray-900 dark:text-white truncate pr-2">{trip.dropoff}</p>
            <p className="text-[10px] font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-widest">{trip.dropTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripCard;
