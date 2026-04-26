import React from 'react';
import { Target, TrendingUp } from 'lucide-react';

const WeeklyGoalCard = ({ achieved, goal }) => {
  const percentage = Math.round((achieved / goal) * 100);

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-premium border border-gray-100 dark:border-zinc-800 flex flex-col gap-8 transition-all hover:shadow-xl h-full">
      <div className="flex justify-between items-center">
        <h2 className="text-xs font-bold text-gray-500 dark:text-zinc-500 uppercase tracking-widest leading-none flex items-center gap-2">
          Weekly Goal
        </h2>
        <div className="bg-zinc-100 dark:bg-zinc-800 p-2 rounded-xl text-gray-400">
          <Target size={18} />
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center gap-6">
        <div className="flex justify-between items-end">
          <div className="text-3xl font-black text-gray-900 dark:text-white">₹{achieved.toLocaleString()}</div>
          <div className="text-sm font-bold text-gray-400 dark:text-zinc-500 mb-1">/ ₹{goal.toLocaleString()}</div>
        </div>
        
        <div className="w-full h-4 bg-gray-100 dark:bg-zinc-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-full transition-all duration-1000 ease-out" 
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        
        <p className="text-[10px] font-black text-yellow-600 dark:text-yellow-500 uppercase tracking-widest text-right">
          {percentage}% to goal
        </p>
      </div>

      {/* Insight Box */}
      <div className="bg-yellow-50 dark:bg-yellow-500/5 rounded-2xl p-4 flex items-center gap-4 border border-yellow-100/50 dark:border-yellow-500/10">
        <div className="bg-yellow-500 text-gray-900 p-1.5 rounded-lg shrink-0">
          <TrendingUp size={14} strokeWidth={3} />
        </div>
        <p className="text-xs font-semibold text-gray-700 dark:text-zinc-300">
          Demand is high in Nikol area right now.
        </p>
      </div>
    </div>
  );
};

export default WeeklyGoalCard;
