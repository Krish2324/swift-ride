import React from 'react';
import { Navigation } from 'lucide-react';

const MissionSection = () => {
  return (
    <section className="py-24 px-6 bg-gray-50 dark:bg-zinc-900/50">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in duration-700">
        <div className="flex justify-center">
          <div className="bg-yellow-500 text-gray-900 p-4 rounded-3xl shadow-xl shadow-yellow-500/20 ring-8 ring-yellow-500/10">
            <Navigation size={40} strokeWidth={2.5} />
          </div>
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tighter leading-tight">
          Your travel needs, covered.
        </h2>
        <p className="text-lg md:text-xl font-medium text-gray-500 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
          We are specialised in providing online car hire services such as Airport Taxi Transfer, Multidays Outstation Cabs from your hotel or downtown, and Cab Service for Local Sightseeing.
        </p>
      </div>
    </section>
  );
};

export default MissionSection;
