import React, { useState } from 'react';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import EarningsCard from '../components/dashboard/EarningsCard';
import WeeklyGoalCard from '../components/dashboard/WeeklyGoalCard';
import TripList from '../components/dashboard/TripList';
import SurgeCard from '../components/dashboard/SurgeCard';

const MOCK_TRIPS = [
  {
    id: 1,
    status: 'Completed',
    price: 350,
    pickup: 'Nikol Gam, Ahmedabad',
    pickupTime: '10:30 AM',
    dropoff: 'Sardar Vallabhbhai Patel Airport',
    dropTime: '11:15 AM'
  },
  {
    id: 2,
    status: 'Completed',
    price: 280,
    pickup: 'Prahlad Nagar, Ahmedabad',
    pickupTime: '12:45 PM',
    dropoff: 'Alpha One Mall, Vastrapur',
    dropTime: '1:20 PM'
  },
  {
    id: 3,
    status: 'Completed',
    price: 450,
    pickup: 'Science City, Ahmedabad',
    pickupTime: '3:00 PM',
    dropoff: 'Gift City, Gandhinagar',
    dropTime: '3:50 PM'
  }
];

const DriverDashboard = () => {
  const [isOnline, setIsOnline] = useState(true);

  return (
    <main className="pt-32 pb-24 max-w-7xl mx-auto px-6 font-sans selection:bg-yellow-100 selection:text-yellow-900 transition-colors duration-500 bg-gray-50 dark:bg-zinc-950 min-h-screen">
      {/* Dashboard Header */}
      <DashboardHeader isOnline={isOnline} onToggle={setIsOnline} />

      {/* Bento Grid Layout - 12 Column System */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
        
        {/* Today's Earnings (Large Cell - 8 Columns) */}
        <div className="md:col-span-8 h-full">
          <EarningsCard 
            earnings="4,850" 
            trips="14" 
            onlineTime="5h 20m" 
          />
        </div>

        {/* Weekly Progress (Medium Cell - 4 Columns) */}
        <div className="md:col-span-4 h-full">
          <WeeklyGoalCard 
            achieved={18400} 
            goal={35000} 
          />
        </div>

        {/* Surge Action Card (Special Cell - 4 Columns) */}
        <div className="md:col-span-4 h-full">
          <SurgeCard 
            bonus="150" 
            area="Nikol" 
          />
        </div>

        {/* Trip History (Full Width Bottom - 12 Columns) */}
        <div className="md:col-span-12 mt-8">
          <TripList trips={MOCK_TRIPS} />
        </div>
      </div>
    </main>
  );
};

export default DriverDashboard;
