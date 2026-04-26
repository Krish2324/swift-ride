import React from 'react';
import VehicleCard from './VehicleCard';
import { Car, CarFront, Gauge, Star } from 'lucide-react';

const PricingGrid = () => {
  const fleetData = [
    {
      type: 'Mini',
      tagline: 'Everyday Value',
      icon: Car,
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop',
      basePrice: 120,
      capacity: { people: 3, luggage: 2 },
      isPopular: false
    },
    {
      type: 'Sedan',
      tagline: 'Comfort Commute',
      icon: CarFront,
      image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=800&auto=format&fit=crop',
      basePrice: 180,
      capacity: { people: 4, luggage: 3 },
      isPopular: true
    },
    {
      type: 'SUV',
      tagline: 'Space & Power',
      icon: Gauge,
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop',
      basePrice: 280,
      capacity: { people: 6, luggage: 5 },
      isPopular: false
    },
    {
      type: 'Luxury',
      tagline: 'Premium Experience',
      icon: Star,
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop',
      basePrice: 450,
      capacity: { people: 4, luggage: 4 },
      isPopular: false
    }
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
      {fleetData.map((vehicle) => (
        <VehicleCard key={vehicle.type} vehicle={vehicle} />
      ))}
    </section>
  );
};

export default PricingGrid;
