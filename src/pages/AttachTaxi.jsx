import React from 'react';
import { Car, Phone, MessageCircle, CheckCircle } from 'lucide-react';
import { APP_NAME } from '../utils/constants';

const AttachTaxi = () => {
  const benefits = [
    "Earn higher revenue with steady bookings.",
    "No hidden charges or complicated commission structures.",
    "Flexible working hours - you are your own boss.",
    "24/7 driver support and assistance.",
    "Weekly timely payouts directly to your bank account."
  ];

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-zinc-950 pt-32 pb-24 font-sans">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
        
        {/* Header */}
        <div className="space-y-4">
          <div className="w-24 h-24 bg-yellow-500/20 text-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Car size={48} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white">
            Attach Your Car With <span className="text-yellow-500">{APP_NAME}</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-zinc-400 font-medium max-w-2xl mx-auto">
            Join the largest and fastest-growing cab network in India. Start earning more today with zero hassle.
          </p>
        </div>

        {/* Benefits */}
        <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-gray-100 dark:border-zinc-800 text-left max-w-2xl mx-auto shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b-2 border-yellow-500 inline-block pb-2">
            Why Join Us?
          </h3>
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="text-green-500 shrink-0 mt-1" size={20} />
                <span className="text-gray-700 dark:text-zinc-300 font-medium text-lg">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Section */}
        <div className="space-y-6 pt-8 border-t border-gray-200 dark:border-zinc-800">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white">
            Ready to attach your taxi?
          </h2>
          <p className="text-lg text-gray-500 dark:text-zinc-400">
            Skip the paperwork. Just call or message us, and our team will get you onboarded instantly.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            {/* Call Button */}
            <a 
              href="tel:+918238917405"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg"
            >
              <Phone size={24} />
              Call To Join
            </a>

            {/* WhatsApp Button */}
            <a 
              href="https://wa.me/918238917405?text=Hi, I want to attach my taxi with your company."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20b858] text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg"
            >
              <MessageCircle size={24} />
              WhatsApp Us
            </a>
          </div>
        </div>

      </div>
    </main>
  );
};

export default AttachTaxi;
