import React from 'react';
import AboutHero from '../components/about/AboutHero';
import MissionSection from '../components/about/MissionSection';
import CompanyStory from '../components/about/CompanyStory';
import TrustGrid from '../components/about/TrustGrid';
import ServicesSection from '../components/about/ServicesSection';
import { APP_NAME } from '../utils/constants';

const About = () => {
  return (
    <main className="font-sans selection:bg-yellow-100 selection:text-yellow-900 transition-colors duration-500 bg-white dark:bg-zinc-950 min-h-screen">
      <AboutHero />
      <MissionSection />
      <CompanyStory />
      <TrustGrid />
      <ServicesSection />
      
      {/* Footer CTA */}
      <section className="py-24 px-6 bg-white dark:bg-zinc-950 border-t border-gray-50 dark:border-zinc-900 text-center space-y-10">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tighter">Experience the difference.</h2>
          <p className="text-lg font-medium text-gray-500 dark:text-zinc-400 max-w-2xl mx-auto">
            Join thousands of travelers who trust {APP_NAME} for their daily mobility.
          </p>
        </div>
        <div className="flex justify-center">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-black text-xs px-10 py-5 rounded-2xl shadow-xl shadow-yellow-500/20 active:scale-95 transition-all uppercase tracking-widest leading-none">
            Book Your First Ride
          </button>
        </div>
      </section>
    </main>
  );
};

export default About;
