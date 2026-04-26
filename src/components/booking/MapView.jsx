import React from 'react';
import { MapPin, Navigation, Info } from 'lucide-react';

const MapView = () => {
  return (
    <div className="absolute inset-0 z-0 bg-gray-200 dark:bg-zinc-900 flex items-center justify-center overflow-hidden">
      {/* City Map Background Image */}
      <img 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfozA2VXfZBvI2MQnDM4L-IUQOiJJP0BJEm3odWExeJ8OoaG8R6EkkBwBu8vbYPz2O3IYLpJGTTnt5XJYi96tftSqJOR1fsMzTzKBetMMBvFgCLUx1xTUcrWRGhwuW4IHxhSps9L0krFiCVo9heZXn9HiDp4dtZjP8G0Qni01HRNYxAmrfP5hBagk7bWoparYbIv1a50MgWSLP6JN8I_tn7PXMvCq-lG3EeX8fsp80MVlgUEykWK40NYRjE2Bthu16_GIbzsScxTE" 
        alt="Stylized City Map" 
        className="w-full h-full object-cover opacity-60 dark:opacity-30 grayscale contrast-125"
      />

      {/* Simulated Route Line (SVG) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-xl" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M 500 250 Q 450 350, 400 400 T 600 500" 
          fill="transparent" 
          stroke="#eab308" 
          strokeWidth="6" 
          strokeDasharray="12 6" 
          className="animate-pulse"
        />
      </svg>

      {/* Decorative Map Markers */}
      
      {/* Pickup Marker */}
      <div className="absolute top-[250px] left-[500px] transform -translate-x-1/2 -translate-y-1/2 group">
        <div className="flex flex-col items-center">
          <div className="bg-white dark:bg-zinc-800 px-3 py-1.5 rounded-full shadow-premium text-[10px] font-bold border border-gray-100 dark:border-zinc-700 mb-2 whitespace-nowrap animate-in fade-in zoom-in duration-500">
            Current Location
          </div>
          <div className="w-5 h-5 bg-yellow-500 rounded-full shadow-xl ring-8 ring-yellow-500/20 border-2 border-white dark:border-zinc-900"></div>
        </div>
      </div>

      {/* Dropoff Marker */}
      <div className="absolute top-[500px] left-[600px] transform -translate-x-1/2 -translate-y-1/2 group">
        <div className="flex flex-col items-center">
          <div className="w-6 h-6 bg-zinc-900 dark:bg-white rounded-lg shadow-xl border-2 border-white dark:border-zinc-900 flex items-center justify-center animate-bounce duration-[2000ms]">
            <Navigation size={12} className="text-white dark:text-zinc-900 fill-current" />
          </div>
        </div>
      </div>

      {/* Nearby Drivers (Simulated) */}
      <div className="absolute top-[400px] left-[450px] animate-pulse">
        <div className="w-8 h-8 bg-zinc-800/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-white/20">
          <Navigation size={14} className="text-yellow-500 rotate-45" />
        </div>
      </div>

      <div className="absolute bottom-[350px] right-[400px]">
        <div className="w-8 h-8 bg-zinc-800/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-white/20">
          <Navigation size={14} className="text-yellow-500 -rotate-90" />
        </div>
      </div>
    </div>
  );
};

export default MapView;
