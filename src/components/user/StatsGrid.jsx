import React from 'react';
import StatsCard from './StatsCard';
import { Car, Star, Wallet } from 'lucide-react';

const StatsGrid = ({ stats }) => {
  const cards = [
    { label: 'Total Rides', value: stats.totalRides, icon: Car, colorClass: 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-500' },
    { label: 'Rider Rating', value: stats.rating, icon: Star, colorClass: 'bg-zinc-100 dark:bg-zinc-800 text-gray-900 dark:text-white' },
    { label: 'Swift Credits', value: `₹${stats.credits}`, icon: Wallet, colorClass: 'bg-gray-100 dark:bg-zinc-800 text-gray-500 dark:text-zinc-400' },
  ];

  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-right duration-700 delay-200">
      {cards.map((card) => (
        <StatsCard key={card.label} {...card} />
      ))}
    </div>
  );
};

export default StatsGrid;
