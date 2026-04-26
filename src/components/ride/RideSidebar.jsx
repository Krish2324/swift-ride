import React from 'react';
import RideList from './RideList';
import ConfirmRideBar from './ConfirmRideBar';

const RideSidebar = ({ rides, selectedRide, onSelect }) => {
  return (
    <aside className="w-full md:w-[450px] lg:w-[480px] shrink-0 flex flex-col h-[calc(100vh-80px)] overflow-hidden bg-white dark:bg-zinc-900 border-r border-gray-100 dark:border-zinc-800 z-10 shadow-premium transition-colors">
      <div className="flex flex-col flex-1 overflow-y-auto px-6 py-8 scrollbar-hide">
        {/* Header */}
        <div className="mb-8 animate-in fade-in slide-in-from-top duration-700">
          <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-2 leading-tight">
            Select your ride
          </h1>
          <p className="text-gray-500 dark:text-zinc-500 font-medium">
            Choose a vehicle that fits your need and budget.
          </p>
        </div>

        {/* Ride Options */}
        <div className="animate-in fade-in slide-in-from-bottom duration-700 delay-200">
          <RideList 
            rides={rides} 
            selectedRideId={selectedRide?.id} 
            onSelect={onSelect} 
          />
        </div>
        
        {/* Spacer to push confirm bar to bottom */}
        <div className="h-20 shrink-0"></div>
      </div>

      {/* Sticky Bottom Bar */}
      <div className="px-6 bg-white dark:bg-zinc-900">
        <ConfirmRideBar selectedRide={selectedRide} />
      </div>
    </aside>
  );
};

export default RideSidebar;
