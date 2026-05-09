import React from 'react';
import { Briefcase, Train, Heart } from 'lucide-react';

const ServicesSection = () => {
  return (
    <section className="py-24 px-6 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tighter leading-none">Services Offered</h2>
          <p className="text-lg font-medium text-gray-500 dark:text-zinc-500 max-w-2xl mx-auto">
            A wide range of reliable and efficient travel solutions.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {/* Service 1 */}
          <div className="bg-gray-50 dark:bg-zinc-900 p-8 rounded-xl border-l-4 border-yellow-500 shadow-sm flex flex-col md:flex-row gap-6 items-start md:items-center hover:shadow-md transition-shadow">
            <div className="text-yellow-500">
              <Briefcase size={40} />
            </div>
            <div>
              <h4 className="text-xl font-bold text-yellow-600 dark:text-yellow-500 mb-2">Corporate & Group Travel</h4>
              <p className="text-gray-600 dark:text-gray-400">
                MS Tour and Travel's Corporate Program - A Cab for all your Transport needs. MS Tour and Travel has been at the forefront of organizing the car rental industry and has built a strong brand over the last decade.
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="bg-gray-50 dark:bg-zinc-900 p-8 rounded-xl border-l-4 border-yellow-500 shadow-sm flex flex-col md:flex-row gap-6 items-start md:items-center hover:shadow-md transition-shadow">
            <div className="text-yellow-500">
              <Train size={40} />
            </div>
            <div>
              <h4 className="text-xl font-bold text-yellow-600 dark:text-yellow-500 mb-2">Airport, Railway & Hotel Transfers</h4>
              <p className="text-gray-600 dark:text-gray-400">
                MS Tour and Travels truly defines Vocal for Local, providing a hassle free service.The cab was on time and I got a great service. I believe we should promote local cabs which provide great service instead of the other well-known brands.
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="bg-gray-50 dark:bg-zinc-900 p-8 rounded-xl border-l-4 border-yellow-500 shadow-sm flex flex-col md:flex-row gap-6 items-start md:items-center hover:shadow-md transition-shadow">
            <div className="text-yellow-500">
              <Heart size={40} />
            </div>
            <div>
              <h4 className="text-xl font-bold text-yellow-600 dark:text-yellow-500 mb-2">Wedding Car rentals</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Select the car that best suits your requirements. All the cars listed on the website are air-conditioned and are driven by highly trained driver.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
