import React from 'react';
import LocationInputs from './LocationInputs';
import RecentLocations from './RecentLocations';

const BookingSidebar = ({ pickup, setPickup, dropoff, setDropoff }) => {
  return (
    <div className="flex flex-col gap-6 h-full">
      {/* Search Card */}
      <div className="bg-white dark:bg-zinc-900 rounded-[24px] shadow-premium p-6 border border-gray-100 dark:border-zinc-800 animate-in fade-in slide-in-from-left duration-700">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Book a Ride</h1>
        <LocationInputs 
          pickup={pickup} 
          setPickup={setPickup} 
          dropoff={dropoff} 
          setDropoff={setDropoff} 
        />
      </div>

      {/* Recent Locations Card */}
      <div className="flex-1 overflow-y-auto bg-white dark:bg-zinc-900 rounded-[24px] shadow-sm p-6 border border-gray-100 dark:border-zinc-800 animate-in fade-in slide-in-from-bottom duration-700 delay-200">
        <RecentLocations />
      </div>
    </div>
  );
};

export default BookingSidebar;
