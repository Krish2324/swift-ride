import React from 'react';
import TripCard from './TripCard';

const TripList = ({ trips }) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end px-1">
        <div className="space-y-1">
          <h2 className="text-2xl font-black text-gray-900 dark:text-white leading-none">Recent Trips</h2>
          <p className="text-xs font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-widest">Last 24 Hours</p>
        </div>
        <button className="text-xs font-black text-yellow-600 dark:text-yellow-500 uppercase tracking-widest hover:translate-x-1 transition-transform">
          View All Trips →
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trips.map((trip) => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </div>
    </div>
  );
};

export default TripList;
