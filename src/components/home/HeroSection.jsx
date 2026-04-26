import React from 'react';
import BookingCard from './BookingCard';
import { AppWindow, Download } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[900px] flex items-center justify-center overflow-hidden pt-20">
      {/* Background with modern overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCF-dCXSuquNw8O7Xk2si5T-h0x4ZCe79GCZ2Fz7HameOzPp5NaCc4IyxWO1c1ZResCNqwE2D-LzAlqtgcYFej36M9Wmnzh08kBggd8plDeJ6fkEfWE8FQJf9ikWR2KLSPDbkWKOO4_Sv4W9ItzLA79J9QbJwbIlOddMjhZ3HkLajEBbNARldPXW59_tN2RGPdaGIAPNQynKubBNKLBwcvsPxjZlKZ_YzG_l9Aqflc2i8Okz_bYTs7l56_PJhZdEMTkAFxuVu2QPC4" 
          alt="Premium SwiftRide Service" 
          className="w-full h-full object-cover dark:opacity-40 transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-900/60 to-transparent dark:from-black/95 dark:via-black/80"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-12 gap-16 items-center py-20">
        {/* Hero Content */}
        <div className="lg:col-span-6 space-y-8 animate-in fade-in slide-in-from-left duration-700">
          <h1 className="text-5xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight">
            Effortless Movement. <br />
            <span className="text-yellow-500">Every Time.</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
            Experience premium mobility with real-time tracking, transparent pricing, and professional drivers. Your next destination is just a tap away.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="flex items-center gap-3 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-8 py-5 rounded-2xl transition-all shadow-xl hover:shadow-yellow-500/20 active:scale-95 group">
              Get the App
              <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
            </button>
            <button className="flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-bold px-8 py-5 rounded-2xl transition-all active:scale-95">
              View Fleet
            </button>
          </div>

          {/* Social Proof Placeholder */}
          <div className="flex items-center gap-6 pt-8 border-t border-white/10">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-gray-900 bg-gray-800 flex items-center justify-center text-[10px] font-bold text-white uppercase italic">
                  SR
                </div>
              ))}
            </div>
            <div className="text-sm text-gray-400">
              <span className="text-white font-bold block">50k+ Active Riders</span>
              Trusted in 20+ major cities worldwide.
            </div>
          </div>
        </div>

        {/* Booking Card placement */}
        <div className="lg:col-span-5 lg:col-start-8 animate-in fade-in zoom-in duration-700 delay-200">
          <BookingCard />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
