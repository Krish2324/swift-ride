import React from 'react';
import TrustCard from './TrustCard';
import { ShieldCheck, Shield, Headphones } from 'lucide-react';

const TrustGrid = () => {
  return (
    <section className="py-24 px-6 bg-gray-50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tighter leading-none">Why Choose Us?</h2>
          <p className="text-lg font-medium text-gray-500 dark:text-zinc-500 max-w-2xl mx-auto">
            M.S. TRAVELS is dedicated to making sure that the clients expectations are met. We have been in the business since 1992 and have built a reputation for providing reliable and efficient travel solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Large Bento Card */}
          <div className="md:col-span-2 bg-white dark:bg-zinc-900 rounded-3xl shadow-premium border border-gray-100 dark:border-zinc-800 overflow-hidden flex flex-col md:flex-row animate-in fade-in slide-in-from-left duration-1000 group hover:scale-[1.01] transition-transform">
            <div className="w-full md:w-1/2 p-10 flex flex-col justify-center space-y-6">
              <div className="bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:rotate-6">
                <ShieldCheck size={32} />
              </div>
              <div>
                <h4 className="text-2xl font-black text-gray-900 dark:text-white mb-4 tracking-tight leading-none">Experienced Professionals</h4>
                <p className="text-sm font-medium text-gray-500 dark:text-zinc-400 leading-relaxed">
                  Our team of experienced professionals is committed to ensuring that your travel needs are taken care of. We offer a wide range of services to cater to your diverse needs.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 h-80 md:h-auto relative overflow-hidden">
              <img 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3000ms]" 
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1740&auto=format&fit=crop" 
                alt="Professional Driver" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white dark:from-zinc-900 via-transparent to-transparent hidden md:block"></div>
            </div>
          </div>

          {/* Small Bento Card 1 */}
          <TrustCard 
            title="Well-Maintained Fleet"
            description="Our fleet of vehicles is exceptionally well maintained to guarantee comfort, safety, and a reliable travel experience."
            icon={Shield}
            colorClass="bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-white"
            delayClass="delay-200"
          />

          {/* Small Bento Card 2 */}
          <TrustCard 
            title="24/7 Customer Support"
            description="We offer competitive pricing along with around-the-clock 24/7 customer support to assist you anytime, anywhere."
            icon={Headphones}
            colorClass="bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-white"
            delayClass="delay-400"
          />
        </div>
      </div>
    </section>
  );
};

export default TrustGrid;
