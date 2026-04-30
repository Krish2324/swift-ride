import React from 'react';
import { Smartphone, Apple, Share2, Users, Info, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { APP_NAME } from '../../utils/constants';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 dark:bg-black text-white py-16 border-t border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Column 1: Brand */}
        <div className="space-y-6">
          <div className="text-2xl font-bold italic tracking-tighter">{APP_NAME}</div>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
            The Best Taxi Service in India. Specialised in providing online car hire services such as Airport Taxi Transfer, Multidays Outstation Cabs, and Cab Service for Local Sightseeing.
          </p>
          <div className="flex items-center gap-4 text-zinc-400">
            {/* Using generic social placeholders as brand icons were removed in this version of Lucide */}
            <a href="#" className="hover:text-yellow-500 transition-all border border-zinc-700 p-2 rounded-lg hover:border-yellow-500/50"><Share2 size={18} /></a>
            <a href="#" className="hover:text-yellow-500 transition-all border border-zinc-700 p-2 rounded-lg hover:border-yellow-500/50"><Users size={18} /></a>
            <a href="#" className="hover:text-yellow-500 transition-all border border-zinc-700 p-2 rounded-lg hover:border-yellow-500/50"><MessageSquare size={18} /></a>
          </div>
        </div>

        {/* Column 2: Company */}
        <div className="space-y-6">
          <h4 className="text-sm font-bold uppercase tracking-widest text-yellow-500">Company</h4>
          <nav className="flex flex-col gap-3 text-zinc-400 text-sm">
            <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
            <a href="#" className="hover:text-white transition-colors">Careers</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </nav>
        </div>

        {/* Column 3: Support */}
        <div className="space-y-6">
          <h4 className="text-sm font-bold uppercase tracking-widest text-yellow-500">Support</h4>
          <nav className="flex flex-col gap-3 text-zinc-400 text-sm">
            <a href="#" className="hover:text-white transition-colors">Help Center</a>
            <a href="#" className="hover:text-white transition-colors">Safety Center</a>
            <a href="#" className="hover:text-white transition-colors">Community Guidelines</a>
            <a href="#" className="hover:text-white transition-colors">Contact Us</a>
          </nav>
        </div>

        {/* Column 4: Download */}
        <div className="space-y-6">
          <h4 className="text-sm font-bold uppercase tracking-widest text-yellow-500">Download App</h4>
          <div className="flex flex-col gap-4">
            <a href="#" className="flex items-center gap-3 bg-zinc-800 hover:bg-zinc-700 px-5 py-3 rounded-xl transition-all group">
              <Apple className="text-white group-hover:text-yellow-500 transition-colors" size={24} />
              <div>
                <div className="text-[10px] uppercase font-bold text-zinc-500">Download on the</div>
                <div className="text-sm font-semibold">App Store</div>
              </div>
            </a>
            <a href="#" className="flex items-center gap-3 bg-zinc-800 hover:bg-zinc-700 px-5 py-3 rounded-xl transition-all group">
              <Smartphone className="text-white group-hover:text-yellow-500 transition-colors" size={24} />
              <div>
                <div className="text-[10px] uppercase font-bold text-zinc-500">Get it on</div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-zinc-500 text-xs text-center md:text-left">
          © {new Date().getFullYear()} M S Tour & Travels. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
