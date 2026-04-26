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
          Clearing the path forward.
        </h2>
        <p className="text-lg md:text-xl font-medium text-gray-500 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
          Our mission is to eliminate the friction of modern travel. We believe technology should serve to quietly and efficiently move you to your destination, blending the urgency of transit with the polished reliability of a premium enterprise platform.
        </p>
      </div>
    </section>
  );
};

export default MissionSection;
