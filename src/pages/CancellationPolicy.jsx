import React from 'react';
import { APP_NAME } from '../utils/constants';

const CancellationPolicy = () => {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-zinc-950 pt-32 pb-24 font-sans">
      <div className="max-w-4xl mx-auto px-6 space-y-8">
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-zinc-800 pb-4">
          Cancellation Policy
        </h1>
        
        <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-zinc-800 space-y-6 text-gray-700 dark:text-zinc-300">
          <p className="text-lg font-bold text-gray-900 dark:text-white">
            We understand that plans can change. Our cancellation policy is designed to be fair to both our customers and our drivers.
          </p>

          <div className="bg-yellow-50 dark:bg-yellow-500/10 border-l-4 border-yellow-500 p-6 rounded-r-xl mt-6">
            <h3 className="font-bold text-lg text-yellow-800 dark:text-yellow-500 mb-2">Free Cancellation</h3>
            <p className="text-yellow-700 dark:text-yellow-600">
              You can cancel your booking completely free of charge up to 24 hours before your scheduled pickup time.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Late Cancellations</h2>
          <ul className="list-disc pl-6 space-y-4 mt-2">
            <li>
              <strong>Between 12 to 24 hours before pickup:</strong> A cancellation fee of 20% of the booking amount will be charged.
            </li>
            <li>
              <strong>Less than 12 hours before pickup:</strong> A cancellation fee of 50% of the booking amount will be charged.
            </li>
            <li>
              <strong>No Show:</strong> If you do not show up at the designated pickup location, 100% of the booking amount will be charged as a no-show fee.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Refund Process</h2>
          <p>
            Any eligible refunds will be processed back to your original method of payment within 5-7 business days after the cancellation request is confirmed by our team.
          </p>

          <div className="mt-12 pt-6 border-t border-gray-100 dark:border-zinc-800">
            <p className="text-sm">
              If you have any questions about a cancellation, please contact us immediately via our Support page or call our 24/7 helpline.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CancellationPolicy;
