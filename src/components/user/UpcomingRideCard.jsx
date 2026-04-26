import React from 'react';
import { Calendar, Clock, MapPin, Navigation, Navigation2 } from 'lucide-react';

const UpcomingRideCard = ({ ride }) => {
  if (!ride) return null;

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-premium border border-gray-100 dark:border-zinc-800 h-full flex flex-col justify-between hover:scale-[1.01] transition-all duration-300 group">
      <div className="flex justify-between items-start mb-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-yellow-600 dark:text-yellow-500">
            <Clock size={20} strokeWidth={3} />
            <h2 className="text-xl font-black tracking-tight">Upcoming Ride</h2>
          </div>
          <span className="inline-block bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest animate-pulse">
            In {ride.timeRemaining}
          </span>
        </div>
        <div className="text-right">
          <div className="text-4xl font-black text-gray-900 dark:text-white leading-none">{ride.time}</div>
          <div className="text-xs font-black text-gray-400 dark:text-zinc-500 uppercase tracking-widest mt-1.5">{ride.date}</div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-stretch bg-gray-50/50 dark:bg-zinc-800/50 p-6 rounded-2xl border border-gray-100 dark:border-zinc-800/50">
        <div className="w-full lg:w-1/3 h-40 rounded-xl overflow-hidden relative shadow-inner">
          <img 
            alt="Trip Map View" 
            className="w-full h-full object-cover grayscale opacity-80 dark:opacity-40 group-hover:scale-110 transition-transform duration-[3000ms]" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQ50IX4dl0OdS2-ihnsPj2COK3QTxQk7krP9tghbcftMT31kZcQmwAMl8wCFOY_4mfqTakl1Biykw30qd-adSwuhv0csb1kaJtGT8sp7N-f_OljIQ7xix8rYGSDsoi_Hxe7Qb_Jq_2WtiGg2rcnGBmDxH8zNv9Qxg7vM5aOQ1qrKPZRP3Yzx7U4KI6KTO0NQxM6KbSoaNmREGNjROXJuotC85abnQVSN-2DVnHg8i8OFrrboUKqD0x1D0nehu-sxoHjQ9jB9R8eVE"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
        
        <div className="flex-1 flex flex-col justify-center gap-6">
          <div className="relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-gray-200 dark:bg-zinc-700"></div>
            
            <div className="flex items-center gap-4 relative z-10 mb-6">
              <div className="w-3.5 h-3.5 rounded-full bg-yellow-500 border-2 border-white dark:border-zinc-900 shadow-sm"></div>
              <p className="text-sm font-bold text-gray-900 dark:text-white truncate">{ride.pickup}</p>
            </div>
            
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-3.5 h-3.5 rounded-full border-2 border-yellow-500 bg-white dark:bg-zinc-900 shadow-sm"></div>
              <p className="text-sm font-bold text-gray-900 dark:text-white truncate">{ride.dropoff}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <button className="flex-1 min-w-[160px] bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-black text-xs py-4 rounded-xl shadow-lg shadow-yellow-500/20 active:scale-95 transition-all flex items-center justify-center gap-2">
          <Navigation2 size={16} strokeWidth={3} />
          TRACK DRIVER
        </button>
        <button className="flex-1 min-w-[120px] bg-gray-100 dark:bg-zinc-800 hover:bg-red-500/10 hover:text-red-600 text-gray-500 dark:text-zinc-400 font-black text-xs py-4 rounded-xl transition-all">
          CANCEL RIDE
        </button>
      </div>
    </div>
  );
};

export default UpcomingRideCard;
