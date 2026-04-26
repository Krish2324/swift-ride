import React from 'react';
import AvailabilityToggle from './AvailabilityToggle';

const DashboardHeader = ({ isOnline, onToggle }) => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12 animate-in fade-in slide-in-from-top duration-700">
      <div className="space-y-1">
        <h1 className="text-5xl font-black text-gray-900 dark:text-white leading-none tracking-tighter">
          Dashboard
        </h1>
        <p className="text-xl font-medium text-gray-500 dark:text-zinc-500">
          Welcome back, Krish. <span className="text-yellow-600 dark:text-yellow-500">Ready for the road?</span>
        </p>
      </div>

      <div className="w-full md:w-auto">
        <AvailabilityToggle isOnline={isOnline} onToggle={onToggle} />
      </div>
    </header>
  );
};

export default DashboardHeader;
