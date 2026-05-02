import React, { useState } from 'react';
import { Search, MapPin, ChevronRight } from 'lucide-react';
import { APP_NAME } from '../utils/constants';

const Routes = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

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

  const filteredRoutes = routeCategories[activeTab].routes.filter(route => 
    route.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="font-sans min-h-screen bg-gray-50 dark:bg-zinc-950 pt-32 pb-24 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 space-y-8">
        
        {/* Header Section */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-zinc-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Route Directory
            </h1>
            <p className="text-gray-500 dark:text-zinc-400">
              Find reliable cab services across 100+ popular routes with {APP_NAME}.
            </p>
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder={`Search ${routeCategories[activeTab].title}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all text-gray-900 dark:text-white"
            />
          </div>
        </div>

        {/* Main Content: Sidebar + List */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar / Tabs */}
          <div className="w-full lg:w-1/3 xl:w-1/4">
            <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800 overflow-hidden sticky top-32">
              <div className="p-4 bg-gray-50/50 dark:bg-zinc-950/50 border-b border-gray-100 dark:border-zinc-800">
                <h3 className="font-bold text-gray-900 dark:text-white uppercase tracking-wider text-sm">Categories</h3>
              </div>
              <div className="flex flex-col">
                {routeCategories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveTab(index);
                      setSearchQuery('');
                    }}
                    className={`flex items-center justify-between px-6 py-4 text-left border-l-4 transition-all ${
                      activeTab === index 
                        ? 'border-yellow-500 bg-yellow-50/50 dark:bg-yellow-500/10 text-yellow-700 dark:text-yellow-500 font-bold' 
                        : 'border-transparent text-gray-600 dark:text-zinc-400 hover:bg-gray-50 dark:hover:bg-zinc-800/50 hover:text-gray-900 dark:hover:text-white font-medium'
                    }`}
                  >
                    {category.title}
                    <ChevronRight size={16} className={`transition-transform ${activeTab === index ? 'opacity-100 translate-x-1' : 'opacity-0 -translate-x-2'}`} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Routes List */}
          <div className="w-full lg:w-2/3 xl:w-3/4">
            <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800 p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3 pb-6 border-b border-gray-100 dark:border-zinc-800">
                <MapPin className="text-yellow-500" />
                {routeCategories[activeTab].title}
              </h2>
              
              {filteredRoutes.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredRoutes.map((route, index) => (
                    <a 
                      href="#" 
                      key={index}
                      className="group flex items-center justify-between p-4 rounded-xl border border-gray-100 dark:border-zinc-800 hover:border-yellow-500 dark:hover:border-yellow-500 hover:shadow-md transition-all bg-gray-50 dark:bg-zinc-950/50"
                    >
                      <span className="font-semibold text-gray-700 dark:text-zinc-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                        {route}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white dark:bg-zinc-900 flex items-center justify-center shadow-sm group-hover:bg-yellow-500 transition-colors">
                        <ChevronRight size={16} className="text-gray-400 group-hover:text-white transition-colors" />
                      </div>
                    </a>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="text-gray-400" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">No routes found</h3>
                  <p className="text-gray-500 dark:text-zinc-400">
                    We couldn't find any routes matching "{searchQuery}".
                  </p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default Routes;
