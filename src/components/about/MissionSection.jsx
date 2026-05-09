import React from 'react';
import { Navigation } from 'lucide-react';

const MissionSection = () => {
  return (
    <section className="py-24 px-6 bg-gray-50 dark:bg-zinc-900/50">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in duration-700">
        <div className="flex justify-center">
          <div className="bg-yellow-500 text-gray-900 p-4 rounded-3xl shadow-xl shadow-yellow-500/20 ring-8 ring-yellow-500/10">
            <Navigation size={40} strokeWidth={2.5} />
          </div>
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tighter leading-tight">
          Our Mission & Philosophy
        </h2>
        <p className="text-lg md:text-xl font-medium text-gray-500 dark:text-zinc-400 max-w-4xl mx-auto leading-relaxed text-left">
          <strong className="text-gray-900 dark:text-white">Our Mission:</strong> Our aim is to provide our clients with a travel experience that exceeds their expectations. We strive to be the best travel company in the industry by offering exceptional service, competitive pricing, and innovative travel solutions. Our mission is to make travel accessible and affordable for everyone while maintaining the highest level of quality and customer satisfaction.
          <br /><br />
          <strong className="text-gray-900 dark:text-white">Our Philosophy:</strong> At M.S. Travels, we believe that travel is not just about reaching a destination, but it's about the journey. We are committed to making every journey memorable by providing personalized service and attention to detail. We believe in building long-term relationships with our clients based on trust, transparency, and mutual respect.
        </p>
      </div>
    </section>
  );
};

export default MissionSection;
