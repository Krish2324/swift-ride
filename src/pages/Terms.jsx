import React from 'react';
import { APP_NAME } from '../utils/constants';

const Terms = () => {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-zinc-950 pt-32 pb-24 font-sans">
      <div className="max-w-4xl mx-auto px-6 space-y-8">
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-zinc-800 pb-4">
          Terms & Conditions
        </h1>
        
        <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-zinc-800 space-y-6 text-gray-700 dark:text-zinc-300">
          <p className="text-lg">
            Welcome to {APP_NAME}. By accessing this website and booking our services, you agree to be bound by these Terms and Conditions.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">1. Booking & Services</h2>
          <p>
            All bookings are subject to availability. The company reserves the right to cancel or alter any booking if necessary due to unforeseen circumstances such as weather, mechanical failures, or strikes.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">2. Passenger Responsibilities</h2>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Passengers must provide accurate pickup and drop-off information.</li>
            <li>Smoking and consumption of alcohol inside the vehicles is strictly prohibited.</li>
            <li>Any damage caused to the vehicle by the passenger will be charged directly to the passenger.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">3. Payments & Tolls</h2>
          <p>
            The fare provided during booking is an estimate. Additional charges such as toll taxes, parking fees, and state entry taxes may apply depending on the route taken and are the responsibility of the passenger unless explicitly stated otherwise.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">4. Liability</h2>
          <p>
            {APP_NAME} shall not be liable for any delays, missed flights, or losses incurred due to traffic conditions, breakdowns, or other factors beyond our reasonable control.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Terms;
