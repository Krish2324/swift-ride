import React from 'react';

const StatsCard = ({ label, value, icon: Icon, colorClass }) => {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-premium border border-gray-100 dark:border-zinc-800 flex items-center gap-5 hover:scale-[1.02] transition-all group">
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:rotate-6 ${colorClass}`}>
        <Icon size={28} />
      </div>
      <div>
        <div className="text-xs font-black text-gray-400 dark:text-zinc-500 uppercase tracking-widest leading-none mb-1.5">{label}</div>
        <div className="text-2xl font-black text-gray-900 dark:text-white leading-none tracking-tight">{value}</div>
      </div>
    </div>
  );
};

export default StatsCard;
