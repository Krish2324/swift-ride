import React from 'react';
import { APP_NAME } from '../utils/constants';

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-zinc-950 pt-32 pb-24 font-sans">
      <div className="max-w-4xl mx-auto px-6 space-y-8">
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-zinc-800 pb-4">
          Privacy Policy
        </h1>
        
        <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-zinc-800 space-y-6 text-gray-700 dark:text-zinc-300">
          <p className="text-lg">
            At {APP_NAME}, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">1. Information We Collect</h2>
          <p>
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
            <li><strong>Transaction Data:</strong> includes details about payments to and from you and other details of products and services you have purchased from us.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">2. How We Use Your Data</h2>
          <p>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., booking a cab).</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal or regulatory obligation.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">3. Data Security</h2>
          <p>
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed.
          </p>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
