import React from 'react';
import { Globe, Leaf } from 'lucide-react';

const CompanyStory = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5 space-y-8 animate-in fade-in slide-in-from-left duration-1000">
          <div className="space-y-4">
            <h3 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tighter leading-none">
              Built for the demanding traveler.
            </h3>
            <p className="text-lg font-medium text-gray-500 dark:text-zinc-400 leading-relaxed">
              Founded in Ahmedabad, SwiftRide was born from a simple observation: modern transit is often louder than it is efficient. We set out to change that by focusing on minimalist design and tactile functionality.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3 pt-4">
            <div className="bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-3">
              <Globe size={16} />
              Global Reach
            </div>
            <div className="bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-zinc-400 px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-3">
              <Leaf size={16} />
              Sustainable Fleet
            </div>
          </div>
          
          <p className="text-sm font-bold text-gray-400 dark:text-zinc-500 italic">
            "We prioritise clarity, safety, and speed above all else."
          </p>
        </div>
        
        <div className="lg:col-span-7 rounded-3xl overflow-hidden shadow-2xl animate-in fade-in slide-in-from-right duration-1000">
          <img 
            className="w-full h-full object-cover aspect-video hover:scale-105 transition-transform duration-[3000ms]" 
            src="https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=1740&auto=format&fit=crop" 
            alt="SwiftRide Team" 
          />
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;
