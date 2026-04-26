import React from 'react';
import HeroSection from '../components/home/HeroSection';

function Home() {
  return (
    <>
      <HeroSection />
      
      {/* Why SwiftRide Section */}
      <section className="bg-white dark:bg-zinc-900 py-24 px-6 border-y border-gray-100 dark:border-zinc-800 transition-colors duration-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl space-y-4">
            <h2 className="text-3xl font-bold dark:text-white">Why choose SwiftRide?</h2>
            <p className="text-gray-600 dark:text-zinc-400">
              We combine the world's most advanced logistics technology with a fleet of professional, vetted drivers to ensure your journey is seamless, safe, and sophisticated.
            </p>
          </div>
          <div className="flex gap-8">
            <div className="text-center">
              <div className="text-4xl font-black text-yellow-500">4.9/5</div>
              <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mt-2">Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-yellow-500">5min</div>
              <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mt-2">Avg. Wait</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-yellow-500">24/7</div>
              <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mt-2">Support</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
