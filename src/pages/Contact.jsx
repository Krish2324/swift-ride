import React from 'react';
import ContactInfoList from '../components/contact/ContactInfoList';
import MapCard from '../components/contact/MapCard';
import ContactForm from '../components/contact/ContactForm';

const ContactHeaderLocal = () => (
  <header className="max-w-3xl mb-16 animate-in fade-in slide-in-from-top duration-700">
    <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tighter leading-none mb-6">
      How can we <span className="text-yellow-600 dark:text-yellow-500">help?</span>
    </h1>
    <p className="text-lg md:text-xl font-medium text-gray-500 dark:text-zinc-500 leading-relaxed">
      We're dedicated to keeping your enterprise moving seamlessly. Reach out to our support team for prompt assistance with any inquiry.
    </p>
  </header>
);

const Contact = () => {
  return (
    <main className="pt-32 pb-24 max-w-7xl mx-auto px-6 font-sans selection:bg-yellow-100 selection:text-yellow-900 transition-colors duration-500 bg-gray-50 dark:bg-zinc-950 min-h-screen">
      <ContactHeaderLocal />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        {/* Left Column: Info & Map */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          <ContactInfoList />
          <MapCard />
        </div>
        
        {/* Right Column: Form */}
        <div className="lg:col-span-8">
          <ContactForm />
        </div>
      </div>
    </main>
  );
};

export default Contact;
