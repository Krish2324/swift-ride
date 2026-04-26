import React from 'react';
import { Car } from 'lucide-react';

const RideHistoryItem = ({ ride }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white dark:bg-zinc-900/50 hover:bg-gray-50 dark:hover:bg-zinc-800 rounded-2xl transition-all cursor-pointer border border-transparent hover:border-gray-100 dark:hover:border-zinc-700 group">
      <div className="flex items-center gap-4 min-w-0">
        <div className="w-12 h-12 rounded-2xl bg-gray-100 dark:bg-zinc-800 flex items-center justify-center text-gray-500 dark:text-zinc-500 group-hover:bg-yellow-500/10 group-hover:text-yellow-600 transition-colors shrink-0">
          <Car size={20} />
        </div>
        <div className="min-w-0">
          <div className="text-sm font-bold text-gray-900 dark:text-white truncate">{ride.route}</div>
          <div className="text-[10px] font-black text-gray-400 dark:text-zinc-500 uppercase tracking-widest mt-0.5">
            {ride.date} • {ride.type}
          </div>
        </div>
      </div>
      <div className="text-right shrink-0">
        <div className="text-sm font-black text-gray-900 dark:text-white">₹{ride.price}</div>
        <div className="text-[10px] font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-tighter">
          {ride.status}
        </div>
      </div>
    </div>
  );
};

export default RideHistoryItem;
