import React from 'react';
import { Flame, Navigation } from 'lucide-react';

const SurgeCard = ({ bonus, area }) => {
  return (
    <div className="bg-zinc-900 rounded-2xl p-8 shadow-premium border border-white/5 flex flex-col justify-end min-h-[350px] relative overflow-hidden group">
      {/* Background Simulation Layer - Abstract Map Hotspot */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop" 
          alt="Heatmap" 
          className="w-full h-full object-cover opacity-20 grayscale group-hover:scale-110 transition-transform duration-[2000ms]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        {/* Glowing Surge Pulse */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 space-y-6">
        <div className="flex items-center gap-3">
          <div className="bg-yellow-500 text-gray-900 p-2 rounded-xl shadow-lg ring-4 ring-yellow-500/20">
            <Flame size={20} strokeWidth={3} />
          </div>
          <div>
            <h3 className="text-sm font-black text-white uppercase tracking-widest leading-none">Surge Active</h3>
            <p className="text-[10px] font-bold text-yellow-500/80 uppercase tracking-tighter">High Demand Zone</p>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-xl font-bold text-white leading-tight">
            Drive towards <span className="text-yellow-500">{area}</span> for a <span className="text-yellow-500">₹{bonus}</span> bonus per trip.
          </p>
        </div>

        <button className="w-full bg-white dark:bg-zinc-800 text-gray-900 dark:text-white font-black text-xs py-4 rounded-xl shadow-lg hover:bg-yellow-500 hover:text-gray-900 transition-all flex items-center justify-center gap-3 active:scale-95 group/btn">
          <Navigation size={16} className="group-hover/btn:animate-bounce" />
          NAVIGATE TO ZONE
        </button>
      </div>
    </div>
  );
};

export default SurgeCard;
