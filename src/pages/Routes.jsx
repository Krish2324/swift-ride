import React from 'react';
import { ArrowRight } from 'lucide-react';
import { APP_NAME } from '../utils/constants';

const Routes = () => {
  const routeCategories = [
    {
      title: "Outstation One Way Cabs",
      routes: [
        "Vapi to Surat", "Silvassa to Mumbai", "Silvassa to Navsari", 
        "Silvassa to Bharuch", "Silvassa to Vadodra", "Silvassa to Ahmedabad",
        "Silvassa to Nashik", "Silvassa to Shirdi", "Silvassa to Pune",
        "Daman to Mumbai", "Daman to Surat", "Daman to Nashik"
      ]
    },
    {
      title: "Outstation Round Trip Cabs",
      routes: [
        "Silvassa to Pune", "Silvassa to Statue of Unity", "Silvassa to Lonavla",
        "Silvassa to Shirdi", "Silvassa to Mumbai", "Silvassa to Vadodara",
        "Vapi to Goa", "Vapi to Navsari", "Vapi to Surat", "Vapi to Somnath"
      ]
    },
    {
      title: "Popular Airport Transfers",
      routes: [
        "Silvassa To Mumbai Airport", "Silvassa to Surat Airport",
        "Vapi to Mumbai Airport", "Vapi to Surat Airport",
        "Daman to Mumbai Airport", "Daman to Surat Airport",
        "Valsad to Mumbai Airport", "Valsad to Surat Airport"
      ]
    },
    {
      title: "Railway Station Transfers",
      routes: [
        "Silvassa to Vapi drop", "Silvassa to Lokmanya Tilak", "Silvassa to Surat",
        "Vapi to Surat", "Silvassa to Dader", "Silvassa to Mumbai CST",
        "Silvassa to Nashik", "Silvassa to Valsad"
      ]
    },
    {
      title: "Local Cab Booking",
      routes: [
        "Silvassa Local", "Daman Local", "Vapi Local", "Umbergaon Local",
        "Mumbai Local", "Surat Local", "Thane Local", "Valsad Local", "Nashik Local"
      ]
    }
  ];

  return (
    <main className="font-sans min-h-screen bg-white dark:bg-zinc-950 pt-32 pb-24 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tighter">
            Popular <span className="text-yellow-500">Routes</span>
          </h1>
          <p className="text-xl text-gray-500 dark:text-zinc-400 font-medium">
            Explore our extensive network of over 100+ routes across India with {APP_NAME}.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {routeCategories.map((category, index) => (
            <div key={index} className="space-y-6">
              <h2 className="text-2xl font-black text-gray-900 dark:text-white border-b-2 border-yellow-500 inline-block pb-2">
                {category.title}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.routes.map((route, rIndex) => (
                  <a 
                    href="#" 
                    key={rIndex}
                    className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 hover:bg-yellow-50 dark:bg-zinc-900 dark:hover:bg-zinc-800 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-full bg-white dark:bg-zinc-800 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      <ArrowRight size={14} className="text-yellow-500" />
                    </div>
                    <span className="font-bold text-gray-700 dark:text-zinc-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                      {route}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Routes;
