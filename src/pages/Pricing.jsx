import React from 'react';
import PricingHeader from '../components/pricing/PricingHeader';
import PricingGrid from '../components/pricing/PricingGrid';
import ComparisonTable from '../components/pricing/ComparisonTable';

const Pricing = () => {
  return (
    <main className="pt-32 pb-24 max-w-7xl mx-auto px-6 font-sans selection:bg-yellow-100 selection:text-yellow-900 transition-colors duration-500 bg-gray-50 dark:bg-zinc-950 min-h-screen border-b border-gray-100 dark:border-zinc-900">
      <PricingHeader />
      <PricingGrid />
      <ComparisonTable />
      
      {/* Call to Action Footer Section */}
      <section className="mt-24 bg-zinc-900 rounded-3xl p-12 text-center flex flex-col items-center gap-8 shadow-2xl relative overflow-hidden group">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-500/10 via-transparent to-transparent opacity-50"></div>
        <div className="space-y-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter">Ready to ride?</h2>
          <p className="text-zinc-400 font-medium max-w-xl mx-auto text-lg">
            Download the SwiftRide app for a more personalized experience, or book your ride instantly online.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 relative z-10">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-black text-xs px-10 py-5 rounded-2xl shadow-xl shadow-yellow-500/20 active:scale-95 transition-all uppercase tracking-widest leading-none">
            Book Now
          </button>
          <button className="bg-zinc-800 hover:bg-zinc-700 text-white font-black text-xs px-10 py-5 rounded-2xl active:scale-95 transition-all uppercase tracking-widest leading-none border border-zinc-700">
            Learn More
          </button>
        </div>
      </section>
    </main>
  );
};

export default Pricing;
