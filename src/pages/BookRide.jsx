import React, { useState } from 'react';
import MapView from '../components/booking/MapView';
import BookingSidebar from '../components/booking/BookingSidebar';
import MobileBottomSheet from '../components/booking/MobileBottomSheet';

const BookRide = () => {
  const [pickup, setPickup] = useState('123 Market St, San Francisco');
  const [dropoff, setDropoff] = useState('');

  return (
    <div className="relative h-[calc(100vh-80px)] w-full overflow-hidden mt-20">
      {/* Background Map Layer */}
      <MapView />

      {/* Desktop Booking Sidebar */}
      <div className="absolute top-6 left-6 bottom-6 w-[400px] z-10 hidden md:block">
        <BookingSidebar 
          pickup={pickup} 
          setPickup={setPickup} 
          dropoff={dropoff} 
          setDropoff={setDropoff} 
        />
      </div>

      {/* Mobile Interaction Layer */}
      <div className="md:hidden">
        <MobileBottomSheet 
          dropoff={dropoff} 
          setDropoff={setDropoff} 
        />
      </div>
      
      {/* Accessibility Overlay */}
      <div className="absolute top-6 right-6 z-10 hidden md:flex flex-col gap-2">
        <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md p-3 rounded-2xl shadow-premium border border-white/20">
          <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-1">Status</div>
          <div className="flex items-center gap-2 text-xs font-semibold text-green-500">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Drivers Nearby
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookRide;
