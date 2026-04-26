import React from 'react';
import { User, Briefcase, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const VehicleCard = ({ vehicle }) => {
  const isLuxury = vehicle.type === 'Luxury';

  return (
    <div className={`relative flex flex-col bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-premium border transition-all duration-500 overflow-hidden group hover:scale-[1.02] hover:shadow-2xl ${
      vehicle.isPopular 
        ? 'border-yellow-500 ring-4 ring-yellow-500/10 md:-translate-y-4' 
        : 'border-gray-100 dark:border-zinc-800 hover:border-gray-200 dark:hover:border-zinc-700'
    }`}>
      {/* Most Popular Badge */}
      {vehicle.isPopular && (
        <div className="absolute top-0 right-0 bg-yellow-500 text-gray-900 text-[10px] font-black uppercase tracking-widest py-1.5 px-4 rounded-bl-2xl">
          Most Popular
        </div>
      )}

      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h3 className="text-2xl font-black text-gray-900 dark:text-white leading-none mb-2">{vehicle.type}</h3>
          <p className="text-[10px] font-black text-gray-400 dark:text-zinc-500 uppercase tracking-widest">{vehicle.tagline}</p>
        </div>
        <div className={`p-3 rounded-2xl ${vehicle.isPopular ? 'bg-yellow-500/10 text-yellow-600' : 'bg-gray-50 dark:bg-zinc-800 text-gray-400'}`}>
          <vehicle.icon size={24} />
        </div>
      </div>

      {/* Image Area */}
      <div className="w-full h-40 rounded-2xl bg-gray-50 dark:bg-zinc-800/50 flex items-center justify-center overflow-hidden mb-8 shadow-inner relative">
        <img 
          src={vehicle.image} 
          alt={vehicle.type} 
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent"></div>
      </div>

      {/* Pricing & Specs */}
      <div className="space-y-6 mt-auto">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">₹{vehicle.basePrice}</span>
          <span className="text-xs font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-widest">Est. Base</span>
        </div>

        <div className="flex items-center gap-6 border-y border-gray-50 dark:border-zinc-800/50 py-4">
          <div className="flex items-center gap-2">
            <User size={16} className="text-gray-400" />
            <span className="text-sm font-black text-gray-700 dark:text-zinc-300">{vehicle.capacity.people}</span>
          </div>
          <div className="flex items-center gap-2">
            <Briefcase size={16} className="text-gray-400" />
            <span className="text-sm font-black text-gray-700 dark:text-zinc-300">{vehicle.capacity.luggage}</span>
          </div>
        </div>

        <Link 
          to="/book-ride"
          className={`w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all active:scale-95 ${
            vehicle.isPopular 
              ? 'bg-yellow-500 text-gray-900 shadow-lg shadow-yellow-500/20 hover:bg-yellow-600' 
              : isLuxury 
                ? 'bg-zinc-900 text-white hover:bg-black dark:bg-white dark:text-zinc-900' 
                : 'bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-zinc-400 hover:bg-gray-200 dark:hover:bg-zinc-700'
          }`}
        >
          Select {vehicle.type}
          <ChevronRight size={16} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default VehicleCard;
