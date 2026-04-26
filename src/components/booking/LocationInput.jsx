import React from 'react';

const LocationInput = ({ label, placeholder, value, onChange }) => {
  return (
    <div className="location-input">
      <label>{label}</label>
      <input 
        type="text" 
        placeholder={placeholder} 
        value={value} 
        onChange={onChange} 
      />
    </div>
  );
};

export default LocationInput;
