import React from 'react';
import MapOverlay from './MapOverlay';

const RideMapView = ({ pickup, eta }) => {
  return (
    <section className="flex-grow bg-gray-100 dark:bg-zinc-800 relative hidden md:block overflow-hidden transition-colors">
      <div className="absolute inset-0">
        {/* Using a high-quality stylized map view */}
        <img 
          alt="Map of Ahmedabad" 
          className="w-full h-full object-cover opacity-80 dark:opacity-40 grayscale contrast-125 dark:invert dark:contrast-100" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4fxKzfnSbYGsPzEoZ5MGV4QWDNr-uzlzOeVbX5Oik6-jY6tZ5PcsOY-_lnpJTMW7EddbOS-v6yDkJpiLEwyfufDx9Dwq-W8FEL0d48Xvw2-KZ9nrhud0XJnnyX9FqRObCk7WFK9GggviSKfggbWzmPHs41HCDVlZKbt6ckB2Y78ZPugcJGoBuRMei6wAJdfNCPf28Rqlyc3g31nhYTUzPMoTCtcykdTniIMz3rjPlQiXqFtvMHvFBLQFNfzCgxtUBZtRYXiWKz_Q"
        />
        
        {/* Animated route line simulation */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-xl" viewBox="0 0 1000 1000">
          <path 
            d="M 200 200 L 400 300 L 600 500 L 800 600" 
            fill="transparent" 
            stroke="#eab308" 
            strokeWidth="4" 
            strokeDasharray="10 5" 
            className="animate-pulse"
          />
        </svg>
      </div>

      <MapOverlay pickup={pickup} eta={eta} />
      
      {/* City identification label (Localized to Nikol, Ahmedabad) */}
      <div className="absolute bottom-6 right-6 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
        <p className="text-[10px] font-bold text-gray-900 dark:text-white uppercase tracking-tighter">
          Nikol, Ahmedabad, GJ
        </p>
      </div>
    </section>
  );
};

export default RideMapView;
