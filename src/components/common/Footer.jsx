import React from 'react';
import { Link } from 'react-router-dom';
import { Share2, Users, MessageSquare, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zinc-800 dark:bg-zinc-900 text-zinc-300 text-sm">
      {/* Upper Links Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Column 1 */}
        <div className="space-y-8">
          <div>
            <h4 className="text-yellow-500 font-bold mb-4">Local Cab Booking</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Silvassa Cab Booking</Link></li>
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Daman Cab Booking</Link></li>
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Vapi Cab Booking</Link></li>
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Umbergaon Cab Booking</Link></li>
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Mumbai Cab Booking</Link></li>
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Surat Cab Booking</Link></li>
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Thane Cab Booking</Link></li>
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Valsad Cab Booking</Link></li>
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Nashik local Cab</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-yellow-500 font-bold mb-4">Taxi Service in Popular Cities</h4>
            {/* The image didn't show links here, we can leave it empty or add some placeholders if needed, but it's best to mirror exactly */}
          </div>
        </div>

        {/* Column 2 */}
        <div className="space-y-8">
          <div>
            <h4 className="text-yellow-500 font-bold mb-4">Outstation One Way Cab</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Vapi to Surat Oneway Cab</Link></li>
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Silvassa to Mumbai One way Cab</Link></li>
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Silvassa to Navsari Oneway Cab</Link></li>
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Silvassa to Surat Oneway cab.</Link></li>
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Silvassa to Bharuch Oneway Cab.</Link></li>
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Silvassa to Vadodara Oneway Cab</Link></li>
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Silvassa to Ahmedabad Oneway Cab</Link></li>
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Silvassa to Nashik Oneway cab</Link></li>
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Silvassa to Shirdi Oneway Cab</Link></li>
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Silvassa to Aurangabad Oneway cab</Link></li>
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Daman to Mumbai Oneway Cab</Link></li>
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Silvassa to Pune Oneway cab</Link></li>
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Daman to Surat Oneway Cab</Link></li>
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Daman to Nashik Oneway Cab</Link></li>
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Vapi to Bharuch Oneway Cab</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-yellow-500 font-bold mb-4">Outstation One Way Cab</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Vapi to Vadodara Oneway Cab</Link></li>
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Vapi to Ahamdabad Oneway Cab</Link></li>
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Vapi to Virar Oneway Cab</Link></li>
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Vapi to Mumbai Oneway Cab</Link></li>
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Vapi to Kalyan Oneway Cab</Link></li>
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Vapi to Panvel Oneway Cab</Link></li>
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Vapi to Lonavla Oneway Cab</Link></li>
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Vapi to Pune Oneway Cab</Link></li>
            </ul>
          </div>
        </div>

        {/* Column 3 */}
        <div className="space-y-8">
          <div>
            <h4 className="text-yellow-500 font-bold mb-4">Outstation Round Trip Cab</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Silvassa to Pune Outstation Cab</Link></li>
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Silvassa to Statue of Unity Outstation Cab</Link></li>
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Silvassa to Lonavla Outstation Cabs</Link></li>
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Silvassa to Shirdi Outstation Cab</Link></li>
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Silvassa to Mumbai Outstation cab</Link></li>
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Silvassa to Aurangabad Outstation Cab</Link></li>
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Silvassa to Vadodara, Outstation Cab</Link></li>
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Vapi to Goa Outstation Cabs</Link></li>
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Vapi to Navsari Outstation Cab</Link></li>
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Vapi to Surat Outstation Cab</Link></li>
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Vapi to Ankhleshwar Outstation Cab</Link></li>
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Vapi to Dahej Outstation Cab</Link></li>
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Vapi to Varodra Outstation Cab</Link></li>
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Vapi to Rajkot Outstation Cab</Link></li>
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Vapi to Somnath Outstation Cab</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-yellow-500 font-bold mb-4">Popular Railway Station Transfer Taxi</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Silvassa to Vapi drop oneway</Link></li>
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Silvassa to Lokmanya Tilak Railway Station Oneway cab</Link></li>
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Silvassa to Surat Railway Station Oneway Cab</Link></li>
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Vapi to Surat Railway Station Oneway Cab</Link></li>
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Vapi to Lokmanya Tilak Railway Station Oneway cab</Link></li>
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Silvassa to Dader Railway Station Oneway cab</Link></li>
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Silvassa to Mumbai CST Railway Station Oneway cab</Link></li>
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Silvassa to Mumbai Central Railway Station Oneway cab</Link></li>
            </ul>
          </div>
        </div>

        {/* Column 4 */}
        <div className="space-y-8">
          <div>
            <h4 className="text-yellow-500 font-bold mb-4">Popular Airport Transfer Taxi</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Silvassa To Mumbai Airport Taxi.</Link></li>
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Silvassa to Surat Airport Taxi.</Link></li>
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Vapi to Mumbai Airport Taxi.</Link></li>
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Vapi to Surat Airport Taxi</Link></li>
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Daman to Mumbai Airport Taxi.</Link></li>
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Daman to Surat Airport Taxi.</Link></li>
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Valsad to Mumbai Airport Taxi.</Link></li>
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Valsad to Surat Airport Taxi</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Lower Footer Section */}
      <div className="bg-zinc-900 dark:bg-black py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div>
            <div className="text-2xl font-bold italic tracking-tighter text-blue-500 mb-4">
              MS<span className="text-yellow-500 text-sm block not-italic uppercase tracking-widest mt-1">Tour & Travels</span>
            </div>
            <p className="text-xs leading-relaxed mb-6">
              M. S. Tours & Travels where quality and services matters. Wether it is a family trip or want to go with friends or is it just to reach in time to a meeting, M. S. Tour & Travels provides you a wide range of cars on rent with a very less cost.
            </p>
            <div className="flex gap-2">
              <a href="#" className="bg-yellow-500 text-white p-2 rounded-full hover:bg-yellow-600 transition-colors"><Share2 size={16} /></a>
              <a href="#" className="bg-yellow-500 text-white p-2 rounded-full hover:bg-yellow-600 transition-colors"><Users size={16} /></a>
              <a href="#" className="bg-yellow-500 text-white p-2 rounded-full hover:bg-yellow-600 transition-colors"><MessageSquare size={16} /></a>
            </div>
          </div>

          {/* Useful Links 1 */}
          <div>
            <h4 className="text-white font-bold mb-4">MS Tour & Travels</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/about" className="hover:text-yellow-500 transition-colors">About MS Tour & Travels</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-yellow-500 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-yellow-500 transition-colors">Terms & Conditions of Use</Link></li>
              <li><Link to="/cancellation-policy" className="hover:text-yellow-500 transition-colors">Cancellation Policy</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-500 transition-colors">Feedback</Link></li>
            </ul>
          </div>

          {/* Useful Links 2 */}
          <div>
            <h4 className="text-white font-bold mb-4">Useful Links</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">Sitemap</Link></li>
              <li><Link to="/routes" className="hover:text-yellow-500 transition-colors">MS Tour & Travels Cab Deals</Link></li>
              <li><Link to="/user-dashboard" className="hover:text-yellow-500 transition-colors">Online Login - Registration</Link></li>
              <li><Link to="/attach-taxi" className="hover:text-yellow-500 transition-colors">Cab Supplier Registration</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-500 transition-colors">Career with us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-4">Have Questions?</h4>
            <div className="space-y-4 text-xs">
              <p>M.S.TOUR & TRAVELS.</p>
              <p className="leading-relaxed">
                HO : Shop No. 412/9, Survey No-88, 10,Opp. Win tree Hotel , Near Reliance Petrol Pump, Silvassa -Naroli Road, Athal,Silvassa - 396230 Dadra & Nagar Haveli
              </p>
              <div className="flex flex-col gap-2 font-bold text-white">
                <a href="tel:+918238277711" className="hover:text-yellow-500 transition-colors">+91 8238277711</a>
                <a href="tel:+919824549787" className="hover:text-yellow-500 transition-colors">+91 9824549787</a>
              </div>
              <div>
                <a href="mailto:inffo@mstravelssilvassa.com" className="text-yellow-500 hover:text-yellow-400 transition-colors">inffo@mstravelssilvassa.com</a>
              </div>
              <p className="text-zinc-500">24/7 Dedicated Customer Support</p>
            </div>
          </div>

        </div>
      </div>
      
      {/* WhatsApp Fixed Button */}
      <a href="https://wa.me/918238277711" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform z-50 flex flex-col items-center">
        <MessageSquare size={24} />
      </a>
      
    </footer>
  );
};

export default Footer;
