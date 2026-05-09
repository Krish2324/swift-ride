import React from 'react';

const AboutHero = () => {
  return (
    <section className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <img 
        className="absolute inset-0 w-full h-full object-cover" 
        src="https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?q=80&w=1760&auto=format&fit=crop" 
        alt="City Skyline" 
      />
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col gap-8 animate-in fade-in slide-in-from-bottom duration-1000">
        <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none">
          ABOUT <span className="text-yellow-500">M.S.TRAVELS.</span>
        </h1>
        <p className="text-xl md:text-2xl font-medium text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Welcome to M.S.Travels. We are dedicated to making sure that the clients expectations are met with discipline and Quality of Services.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
