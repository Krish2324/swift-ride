import React, { useState } from 'react';
import RideSidebar from '../components/ride/RideSidebar';
import RideMapView from '../components/map/RideMapView';

const SELECTABLE_RIDES = [
  { 
    id: 'mini', 
    name: 'Mini', 
    price: 180, 
    eta: 3, 
    capacity: '1-4', 
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNxaqYtbkYY7DJcRuyWEgKXs77XmZ-3lzIw_bBS1WCIORL_LAiASWTsqRfaXYlunFTCffxvzdzZMn4OXYKKXweqGtNKhHmSqNJ6vaYkK-nX6KKWLT96Hzso84xlyunpY3KinMLofbhdAi8NEcXxWQ-EcBFOL1BzUZ4S0GyUeCcu9QjUIa58oG_mDjvziMd1LsyldD0zJmZ5Lt2yoLl7IPk8yH-Zdhn30RJEVqoBwnodlG2ywpOv7uAke4vnT44zL33WDgcyOS1FVc'
  },
  { 
    id: 'sedan', 
    name: 'Sedan', 
    price: 250, 
    eta: 5, 
    capacity: '1-4', 
    isPremium: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALmaG9WGg_yTtQLxRUB5zJ-7HneW3NbKPu7YwXM6_xzarqxWKWgfh2dOE5tU3nByC6zexOCBdg8zWvkGvdHPvT3lCw_YtaKnPyLsUq2ebkSNHGhHTp63V2PtQ1Zm3uyqlebx3mn25OdINvh_TJAY9U2gg7tYQSbuaJHYfu6-w67sgqIoD_E4ZLxHRTqzL-XwT9URanBnUulQIeZVFshMTaJXr5PASAro74pNRej9nbM3-h5jeLXpnV7hx4VxIZJ_epiFfSncsHu9w'
  },
  { 
    id: 'suv', 
    name: 'SUV', 
    price: 420, 
    eta: 8, 
    capacity: '1-6', 
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-uPfsAlPhwodiSmj3_Gr5MHMQX-RkAKk-y4RFsnIZL9to_7_w3kuqqcMKBcRWbpXaQMJY4xhAEUT7eRITYVgTowBz9anKJokokIpIUGndvIr9v88vC9rltgy-Y6UkW7R6HxXPKMvDkcjYm9La2tamyFli-sWMG49EsFkDEnnCv3epTH_cd9tVdtuRIeaIf6TPtE4cO_ooE1fC79Q2nxRgVWEp8REzMkTA-WxwCmCzyv1E2oy95XHSXXrdJ32M1Uiuxgv6Usrvwlw'
  },
  { 
    id: 'luxury', 
    name: 'Luxury', 
    price: 750, 
    eta: 12, 
    capacity: '1-4', 
    isPremium: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6kBl8-mOK5kzSClL2Ektd98WRr-C4CUiEMKIOnfBHO7DjJwk7_AzXLKH7vQuC9jeQWybtXs3mSK3RZ6sanZjIMFI2ZW0J3AJTFECuzSk3ot2s4UiJmLeg-Mg9FAI_xqyfKYfTXmyf_r6h8RusEhJ1m5IFT2ACmEtk7z4yQDoKhISb8tSwnrzGwffW5ZJXTKgPIgJw3DAr1cfMXHn7G9C8D7vJMtaNamvwDChRUgrjUISsXRCKeGhjIK3q_mQD22qhINZGP2yBC9g'
  }
];

const SelectRide = () => {
  const [selectedRide, setSelectedRide] = useState(SELECTABLE_RIDES[1]); // Default to Sedan
  const pickupAddress = "Nikol Gam, Ahmedabad, Gujarat";

  return (
    <div className="pt-20 flex flex-col md:flex-row max-w-screen h-screen overflow-hidden bg-gray-50 dark:bg-zinc-950 transition-colors">
      {/* Selection Sidebar */}
      <RideSidebar 
        rides={SELECTABLE_RIDES} 
        selectedRide={selectedRide} 
        onSelect={setSelectedRide} 
      />

      {/* Map View Section */}
      <RideMapView 
        pickup={pickupAddress} 
        eta={selectedRide?.eta || 5} 
      />
    </div>
  );
};

export default SelectRide;
