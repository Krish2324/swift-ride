import React from 'react';
import { Plane, MapPin, Map, UserCheck, Train } from 'lucide-react';
import { APP_NAME } from '../utils/constants';

const Services = () => {
  const services = [
    {
      title: "Outstation Cab Service",
      description: "When it comes to hiring a cab online for a long tour (many days), people seek outstation cabs from their city to their destination in India. Outstation taxi is used very often throughout the year. We arrange a reasonable cab with a well-behaved driver who also acts as a guide.",
      icon: Map,
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    {
      title: "One Way Cabs",
      description: "Availability for a one-way taxi is hard to find for an upcoming trip, but we have a solution by connecting to approx 850 taxi one-way suppliers, who surely provide one-way car rental on 100+ routes in India.",
      icon: MapPin,
      color: "text-green-500",
      bg: "bg-green-500/10"
    },
    {
      title: "Airport Taxi Transfer",
      description: "Looking for an Airport Taxi, we are the right airport taxi counter at almost every airport in India. You can choose us to book your cab from International or Domestic airports.",
      icon: Plane,
      color: "text-yellow-500",
      bg: "bg-yellow-500/10"
    },
    {
      title: "Chauffeur Driven Cab",
      description: "We do not advise hiring self-driven cabs in India because our drivers have more idea about road conditions, how to drive in hilly areas, and what precautions are to be taken care of.",
      icon: UserCheck,
      color: "text-purple-500",
      bg: "bg-purple-500/10"
    },
    {
      title: "Railway Station Transfer",
      description: "Book reliable cabs for pickup and drop-off to and from major railway stations across the region, ensuring you never miss a train.",
      icon: Train,
      color: "text-red-500",
      bg: "bg-red-500/10"
    }
  ];

  return (
    <main className="font-sans min-h-screen bg-white dark:bg-zinc-950 pt-32 pb-24 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tighter">
            Our Premium <span className="text-yellow-500">Services</span>
          </h1>
          <p className="text-xl text-gray-500 dark:text-zinc-400 font-medium">
            {APP_NAME} is specialized in providing online car hire services to meet all your travel needs seamlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-gray-50 dark:bg-zinc-900 rounded-3xl p-8 border border-gray-100 dark:border-zinc-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${service.bg} ${service.color}`}>
                  <Icon size={28} />
                </div>
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-zinc-400 leading-relaxed font-medium">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Services;
