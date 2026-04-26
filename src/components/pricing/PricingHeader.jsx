import React from 'react';

const PricingHeader = () => {
  return (
    <header className="text-center max-w-3xl mx-auto flex flex-col gap-6 mb-16 animate-in fade-in slide-in-from-top duration-700">
      <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tighter leading-none">
        Transparent Pricing, <span className="text-yellow-600 dark:text-yellow-500">Premium Fleet</span>
      </h1>
      <p className="text-lg md:text-xl font-medium text-gray-500 dark:text-zinc-500 leading-relaxed">
        Select the perfect ride for your journey. No hidden fees, just clear, upfront estimates for every category.
      </p>
    </header>
  );
};

export default PricingHeader;
