import React from 'react';

const TrustCard = ({ title, description, icon: Icon, colorClass, delayClass }) => {
  return (
    <div className={`bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-premium border border-gray-100 dark:border-zinc-800 flex flex-col justify-between hover:scale-[1.02] transition-all duration-300 group animate-in fade-in slide-in-from-bottom ${delayClass}`}>
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:rotate-6 ${colorClass}`}>
        <Icon size={28} />
      </div>
      <div>
        <h4 className="text-xl font-black text-gray-900 dark:text-white mb-3 tracking-tight leading-none">{title}</h4>
        <p className="text-sm font-medium text-gray-500 dark:text-zinc-400 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TrustCard;
