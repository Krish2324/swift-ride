import React from 'react';
import RideCard from './RideCard';

const RideList = ({ rides, selectedRideId, onSelect }) => {
  return (
    <div className="flex flex-col gap-4">
      {rides.map((ride) => (
        <RideCard 
          key={ride.id} 
          ride={ride} 
          isSelected={selectedRideId === ride.id} 
          onSelect={onSelect}
        />
      ))}
    </div>
  );
};

export default RideList;
