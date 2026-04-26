import React from 'react';
import { IndianRupee, TrendingUp } from 'lucide-react';

const EarningsCard = ({ earnings, trips, onlineTime }) => {
  const chartData = [30, 50, 80, 45, 60, 95, 20]; // Mock chart heights in %

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-premium border border-gray-100 dark:border-zinc-800 flex flex-col justify-between min-h-[350px] transition-all hover:shadow-xl">
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <h2 className="text-xs font-bold text-gray-500 dark:text-zinc-500 uppercase tracking-widest">Today's Earnings</h2>
          <div className="text-4xl font-black text-gray-900 dark:text-white flex items-center gap-1">
            <span className="text-2xl text-yellow-500">₹</span>{earnings}
          </div>
          <p className="text-sm font-medium text-gray-500 dark:text-zinc-500">
            {trips} Trips • {onlineTime} Online
          </p>
        </div>
        <div className="bg-yellow-500/10 p-3 rounded-2xl text-yellow-600 dark:text-yellow-500">
          <IndianRupee size={24} />
        </div>
      </div>

      {/* Modern Bar Chart Representation */}
      <div className="flex items-end justify-between gap-3 h-32 mt-12 pt-6 border-t border-gray-50 dark:border-zinc-800">
        {chartData.map((height, i) => (
          <div 
            key={i} 
            className={`w-full rounded-t-lg transition-all duration-500 hover:scale-105 group relative flex justify-center ${
              i === 5 
                ? 'bg-yellow-500 shadow-[0_-4px_15px_rgba(234,179,8,0.3)]' 
                : 'bg-gray-100 dark:bg-zinc-800 hover:bg-yellow-200 dark:hover:bg-yellow-500/20'
            }`}
            style={{ height: `${height}%` }}
          >
            {i === 5 && (
              <span className="absolute -top-10 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-[10px] font-black px-2 py-1 rounded-md animate-bounce">
                Now
              </span>
            )}
            {/* Tooltip on hover */}
            <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-900 text-white text-[10px] px-2 py-1 rounded pointer-events-none">
              ₹{height * 2}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EarningsCard;
