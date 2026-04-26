import React, { useState } from 'react';
import UserHeader from '../components/user/UserHeader';
import UpcomingRideCard from '../components/user/UpcomingRideCard';
import StatsGrid from '../components/user/StatsGrid';
import RideHistoryList from '../components/user/RideHistoryList';
import PaymentList from '../components/user/PaymentList';
import SettingsPanel from '../components/user/SettingsPanel';

const MOCK_DATA = {
  user: {
    name: "Krish",
    stats: {
      totalRides: 142,
      rating: 4.9,
      credits: 450.00
    }
  },
  upcomingRide: {
    id: 1,
    time: "10:45 AM",
    date: "Today",
    timeRemaining: "15 mins",
    pickup: "Nikol Gam, Ahmedabad",
    dropoff: "Sardar Vallabhbhai Patel Airport"
  },
  history: [
    { route: "Downtown to Nikol", date: "Oct 24", type: "Premium SUV", price: 350, status: "Completed" },
    { route: "Office to Vastrapur", date: "Oct 23", type: "Swift Standard", price: 220, status: "Completed" },
    { route: "Airport Transfer", date: "Oct 20", type: "Swift Black", price: 750, status: "Completed" }
  ],
  paymentMethods: [
    { id: 1, brand: "VISA", last4: "4242", expiry: "12/25" },
    { id: 2, brand: "MC", last4: "8891", expiry: "08/24" }
  ]
};

const UserDashboard = () => {
  const [selectedPayment, setSelectedPayment] = useState(MOCK_DATA.paymentMethods[0].id);

  return (
    <main className="pt-32 pb-24 max-w-7xl mx-auto px-6 font-sans selection:bg-yellow-100 selection:text-yellow-900 transition-colors duration-500 bg-gray-50 dark:bg-zinc-950 min-h-screen">
      {/* Header Section */}
      <UserHeader name={MOCK_DATA.user.name} />

      {/* Bento Grid Layout - 12 Column System */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
        
        {/* Upcoming Ride (Wide Bento - 8 Columns) */}
        <div className="md:col-span-8 h-full animate-in fade-in slide-in-from-left duration-700">
          <UpcomingRideCard ride={MOCK_DATA.upcomingRide} />
        </div>

        {/* Stats Grid (Quick Cells - 4 Columns) */}
        <div className="md:col-span-4 h-full">
          <StatsGrid stats={MOCK_DATA.user.stats} />
        </div>

        {/* Ride History (Wide Bento - 8 Columns) */}
        <div className="md:col-span-8 h-full animate-in fade-in slide-in-from-bottom duration-700 delay-300">
          <RideHistoryList history={MOCK_DATA.history} />
        </div>

        {/* Side Panel Stack (Payments & Settings - 4 Columns) */}
        <div className="md:col-span-4 flex flex-col gap-8 animate-in fade-in slide-in-from-right duration-700 delay-300">
          <PaymentList 
            methods={MOCK_DATA.paymentMethods} 
            selectedId={selectedPayment}
            onSelect={setSelectedPayment}
          />
          <SettingsPanel />
        </div>
      </div>
    </main>
  );
};

export default UserDashboard;
