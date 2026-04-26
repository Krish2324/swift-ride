import React from 'react';
import RideHistoryItem from './RideHistoryItem';
import { History } from 'lucide-react';

const RideHistoryList = ({ history }) => {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-premium border border-gray-100 dark:border-zinc-800">
      <div className="flex justify-between items-end mb-8 px-1">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-gray-900 dark:text-white">
            <History size={20} className="text-yellow-600 dark:text-yellow-500" />
            <h2 className="text-2xl font-black tracking-tight">Recent History</h2>
          </div>
          <p className="text-[10px] font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-widest leading-none">Your last few rides</p>
        </div>
        <button className="text-[10px] font-black text-yellow-600 dark:text-yellow-500 uppercase tracking-widest hover:translate-x-1 transition-transform">
          View All History →
        </button>
      </div>

      <div className="space-y-2">
        {history.map((ride, index) => (
          <RideHistoryItem key={index} ride={ride} />
        ))}
      </div>
    </div>
  );
};

export default RideHistoryList;
