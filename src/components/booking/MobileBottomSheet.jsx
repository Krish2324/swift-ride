import React from 'react';
import { Search, Home, Briefcase, Plane } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MobileBottomSheet = ({ dropoff, setDropoff }) => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      navigate('/select-ride');
    }
  };
  const quickLinks = [
    { label: 'Home', icon: Home },
    { label: 'Work', icon: Briefcase },
    { label: 'Airport', icon: Plane },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-20 bg-white dark:bg-zinc-900 rounded-t-[32px] shadow-[0_-8px_30px_rgba(0,0,0,0.12)] p-6 animate-in slide-in-from-bottom duration-500 border-t border-gray-100 dark:border-zinc-800">
      {/* Handle Bar */}
      <div className="flex justify-center mb-4">
        <div className="w-12 h-1 bg-gray-200 dark:bg-zinc-800 rounded-full"></div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Where to?</h2>
        
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text" 
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
            onKeyDown={handleSearch}
            placeholder="Search destination" 
            className="w-full bg-gray-100 dark:bg-zinc-800 border-none rounded-2xl pl-12 pr-4 py-4 text-base font-medium text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-500 transition-all h-14"
          />
        </div>

        {/* Quick Links */}
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-hide snap-x">
          {quickLinks.map((link) => {
            const Icon = link.icon;
            return (
              <button 
                key={link.label}
                onClick={() => navigate('/select-ride')}
                className="shrink-0 flex items-center gap-2 px-5 py-3 rounded-full bg-gray-50 dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 text-sm font-semibold text-gray-700 dark:text-zinc-300 hover:bg-gray-100 dark:hover:bg-zinc-700 transition-all snap-start"
              >
                <Icon size={16} className="text-yellow-600 dark:text-yellow-500" />
                {link.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MobileBottomSheet;
