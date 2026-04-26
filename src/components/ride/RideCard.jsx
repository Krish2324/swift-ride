import React from 'react';
import { Clock, User, CheckCircle2 } from 'lucide-react';

const RideCard = ({ ride, isSelected, onSelect }) => {
  const Icon = ride.icon || Clock;

  return (
    <div 
      onClick={() => onSelect(ride)}
      className={`group relative p-4 rounded-2xl cursor-pointer transition-all duration-300 border-2 ${
        isSelected 
          ? 'border-yellow-500 bg-yellow-50/50 dark:bg-yellow-500/10 shadow-lg scale-[1.02]' 
          : 'border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-gray-200 dark:hover:border-zinc-700 shadow-sm hover:shadow-md'
      }`}
    >
      <div className="flex items-center gap-4">
        {/* Ride Image/Icon Placeholder */}
        <div className={`w-20 h-16 rounded-xl flex items-center justify-center overflow-hidden transition-colors ${
          isSelected ? 'bg-yellow-100 dark:bg-yellow-500/20' : 'bg-gray-100 dark:bg-zinc-800'
        }`}>
          {ride.image ? (
            <img src={ride.image} alt={ride.name} className="w-full h-full object-cover" />
          ) : (
            <Icon size={32} className={isSelected ? 'text-yellow-600' : 'text-gray-400'} />
          )}
        </div>

        {/* Ride Info */}
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start mb-1">
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-gray-900 dark:text-white truncate">
                {ride.name}
              </h3>
              {ride.isPremium && (
                <span className="bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-[8px] uppercase font-black px-2 py-0.5 rounded-full tracking-tighter">
                  Premium
                </span>
              )}
            </div>
            <span className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
              ₹{ride.price}
            </span>
          </div>

          <div className="flex items-center gap-4 text-gray-500 dark:text-zinc-500">
            <span className="flex items-center gap-1 text-xs">
              <Clock size={14} className={isSelected ? 'text-yellow-600' : ''} />
              {ride.eta} min
            </span>
            <span className="flex items-center gap-1 text-xs">
              <User size={14} />
              {ride.capacity}
            </span>
          </div>
        </div>

        {/* Selected Indicator */}
        {isSelected && (
          <div className="absolute -top-2 -right-2 bg-yellow-500 text-gray-900 rounded-full p-1 shadow-lg animate-in zoom-in duration-300">
            <CheckCircle2 size={16} strokeWidth={3} />
          </div>
        )}
      </div>
    </div>
  );
};

export default RideCard;
