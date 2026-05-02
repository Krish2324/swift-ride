import React from 'react';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-zinc-950 pt-32 pb-24 font-sans">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
        
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white">
            Need a Cab? <span className="text-yellow-500">Contact Us</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-zinc-400 font-medium">
            We are available 24/7. Tap a button below to instantly connect with us.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-12">
          {/* Call Button */}
          <a 
            href="tel:+918238917405"
            className="flex flex-col items-center justify-center gap-4 bg-white dark:bg-zinc-900 border-2 border-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-500/10 p-10 rounded-3xl shadow-lg transition-all group"
          >
            <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
              <Phone size={40} className="text-white" />
            </div>
            <div className="space-y-1">
              <h2 className="text-3xl font-black text-gray-900 dark:text-white">Call Now</h2>
              <p className="text-xl font-bold text-gray-600 dark:text-zinc-400">+91 8238917405</p>
            </div>
          </a>

          {/* WhatsApp Button */}
          <a 
            href="https://wa.me/918238917405?text=Hi, I want to book a cab."
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-4 bg-white dark:bg-zinc-900 border-2 border-[#25D366] hover:bg-[#25D366]/10 dark:hover:bg-[#25D366]/10 p-10 rounded-3xl shadow-lg transition-all group"
          >
            <div className="w-20 h-20 bg-[#25D366] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
              <MessageCircle size={40} className="text-white" />
            </div>
            <div className="space-y-1">
              <h2 className="text-3xl font-black text-gray-900 dark:text-white">WhatsApp</h2>
              <p className="text-xl font-bold text-gray-600 dark:text-zinc-400">Message Us</p>
            </div>
          </a>
        </div>

        {/* Other Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-8">
          <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-gray-100 dark:border-zinc-800 flex items-center gap-4 text-left">
            <Mail className="text-yellow-500 shrink-0" size={32} />
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white">Email Us</h3>
              <p className="text-gray-500 dark:text-zinc-400">info@mstravelssilvassa.com</p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-gray-100 dark:border-zinc-800 flex items-center gap-4 text-left">
            <MapPin className="text-yellow-500 shrink-0" size={32} />
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white">Our Office</h3>
              <p className="text-gray-500 dark:text-zinc-400 text-sm">Shop No. 412/9, Survey No-88, 10, Opp. Win tree Hotel, Silvassa - 396230</p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
};

export default Contact;
