import React, { useState } from 'react';
import { MapPin, Navigation, Calendar, Clock, Car, ShieldCheck, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BookingCard = () => {
  const navigate = useNavigate();
  const [rideType, setRideType] = useState('economy');

  const rideTypes = [
    { id: 'economy', name: 'Economy', icon: Car, desc: 'Everyday rides' },
    { id: 'premium', name: 'Premium', icon: ShieldCheck, desc: 'Luxury travel' },
    { id: 'xl', name: 'XL', icon: Users, desc: 'Large groups' },
  ];

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-premium border border-gray-100 dark:border-zinc-800 transition-all">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight">Book a Ride</h2>
      
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        {/* Pickup */}
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-zinc-500">Pickup Location</label>
          <div className="relative group">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-zinc-600 group-focus-within:text-yellow-500 transition-colors">
              <MapPin size={20} />
            </span>
            <input 
              type="text" 
              placeholder="Enter pickup location" 
              className="w-full bg-gray-50 dark:bg-zinc-800/50 border border-gray-200 dark:border-zinc-800 focus:border-yellow-500 dark:focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/10 rounded-2xl pl-12 pr-4 py-4 text-sm font-medium text-gray-900 dark:text-white transition-all outline-none"
            />
          </div>
        </div>

        {/* Dropoff */}
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-zinc-500">Destination</label>
          <div className="relative group">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-zinc-600 group-focus-within:text-yellow-500 transition-colors">
              <Navigation size={20} />
            </span>
            <input 
              type="text" 
              placeholder="Enter destination" 
              className="w-full bg-gray-50 dark:bg-zinc-800/50 border border-gray-200 dark:border-zinc-800 focus:border-yellow-500 dark:focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/10 rounded-2xl pl-12 pr-4 py-4 text-sm font-medium text-gray-900 dark:text-white transition-all outline-none"
            />
          </div>
        </div>

        {/* Date & Time */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-zinc-500">Date</label>
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-zinc-600" size={18} />
              <input 
                type="date" 
                className="w-full bg-gray-50 dark:bg-zinc-800/50 border border-gray-200 dark:border-zinc-800 rounded-2xl pl-12 pr-4 py-4 text-sm font-medium text-gray-900 dark:text-white transition-all outline-none focus:border-yellow-500"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-zinc-500">Time</label>
            <div className="relative">
              <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-zinc-600" size={18} />
              <input 
                type="time" 
                className="w-full bg-gray-50 dark:bg-zinc-800/50 border border-gray-200 dark:border-zinc-800 rounded-2xl pl-12 pr-4 py-4 text-sm font-medium text-gray-900 dark:text-white transition-all outline-none focus:border-yellow-500"
              />
            </div>
          </div>
        </div>

        {/* Ride Type Grid */}
        <div className="space-y-4">
          <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-zinc-500">Select Ride Type</label>
          <div className="grid grid-cols-3 gap-3">
            {rideTypes.map((type) => {
              const Icon = type.icon;
              return (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setRideType(type.id)}
                  className={`flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all gap-2 ${
                    rideType === type.id
                      ? 'border-yellow-500 bg-yellow-50/50 dark:bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 shadow-sm'
                      : 'border-gray-100 dark:border-zinc-800 bg-transparent text-gray-400 dark:text-zinc-600 hover:border-gray-200 dark:hover:border-zinc-700'
                  }`}
                >
                  <Icon size={24} />
                  <span className="text-[10px] font-bold uppercase tracking-tight">{type.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Final CTA */}
        <button 
          onClick={() => navigate('/book-ride')}
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold text-lg py-5 rounded-2xl transition-all shadow-lg hover:shadow-xl active:scale-[0.98] mt-4"
        >
          Request Ride
        </button>
      </form>
    </div>
  );
};

export default BookingCard;
