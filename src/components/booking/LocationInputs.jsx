import React from 'react';
import { MapPin, Navigation, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LocationInputs = ({ pickup, setPickup, dropoff, setDropoff }) => {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/select-ride');
  };
  return (
    <div className="relative space-y-0">
      {/* Visual Timeline Line */}
      <div className="absolute left-[23px] top-[32px] bottom-[32px] w-[2px] bg-gray-100 dark:bg-zinc-800 z-0"></div>

      {/* Pickup Input */}
      <div className="relative z-10 flex items-center gap-4 bg-white dark:bg-zinc-900 py-3 group">
        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 ring-8 ring-yellow-500/10 shrink-0 ml-4"></div>
        <div className="flex-1">
          <input 
            type="text" 
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            placeholder="Current Location" 
            className="w-full bg-gray-50 dark:bg-zinc-800/50 border-none rounded-xl px-4 py-3.5 text-sm font-medium text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-500/50 transition-all placeholder-gray-400 dark:placeholder-zinc-600 h-12"
          />
        </div>
      </div>

      {/* Dropoff Input */}
      <div className="relative z-10 flex items-center gap-4 bg-white dark:bg-zinc-900 py-3 group">
        <div className="w-1.5 h-1.5 bg-gray-900 dark:bg-white shrink-0 ml-4 rounded-sm"></div>
        <div className="flex-1">
          <input 
            type="text" 
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
            placeholder="Where to?" 
            className="w-full bg-gray-50 dark:bg-zinc-800/50 border-none rounded-xl px-4 py-3.5 text-sm font-medium text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-500/50 transition-all placeholder-gray-400 dark:placeholder-zinc-600 h-12"
          />
        </div>
      </div>

      <button 
        onClick={handleSearch}
        className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold text-sm py-4 rounded-xl transition-all shadow-lg hover:shadow-yellow-500/20 active:scale-[0.98] mt-4 flex items-center justify-center gap-2"
      >
        <Search size={18} />
        Search Rides
      </button>
    </div>
  );
};

export default LocationInputs;
