import React from 'react';
import { MapPin, Globe } from 'lucide-react';
import { APP_NAME } from '../../utils/constants';

const CompanyStory = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5 space-y-8 animate-in fade-in slide-in-from-left duration-1000">
          <div className="space-y-4">
            <h3 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tighter leading-none">
              About M.S.Travels
            </h3>
            <p className="text-lg font-medium text-gray-500 dark:text-zinc-400 leading-relaxed">
              M.S.TRAVELS is known for its discipline and Quality of Services. At M.S.Travels, our continuous aim is to ensure passenger comfort and safety. Keeping this in mind, we have set high standards for our business Operations, right from our office personnel to chauffeurs. Furthermore, our cars are exceptionally well maintained and equipped with Fire Extinguisher, First Aid Kit, Tool Kit, Umbrella and Tissue Papers. They undergo regular routine maintenance. We ensure that our Drivers are thoroughly trained to maintain etiquette and standard procedures while dealing with a client.
            </p>
          </div>
          
          <p className="text-sm font-bold text-gray-400 dark:text-zinc-500 italic pt-6">
            "We believe in building long-term relationships with our clients based on trust, transparency, and mutual respect."
          </p>
        </div>
        
        <div className="lg:col-span-7 rounded-3xl overflow-hidden shadow-2xl animate-in fade-in slide-in-from-right duration-1000">
          <img 
            className="w-full h-full object-cover aspect-video hover:scale-105 transition-transform duration-[3000ms]" 
            src="https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=1740&auto=format&fit=crop" 
            alt={`${APP_NAME} Team`} 
          />
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;
