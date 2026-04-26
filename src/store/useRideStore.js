import { create } from 'zustand';

const useRideStore = create((set) => ({
  pickupLocation: null,
  dropLocation: null,
  selectedRide: null,

  setPickupLocation: (location) => set({ pickupLocation: location }),
  setDropLocation: (location) => set({ dropLocation: location }),
  setSelectedRide: (ride) => set({ selectedRide: ride }),

  resetStore: () => set({ pickupLocation: null, dropLocation: null, selectedRide: null }),
}));

export default useRideStore;
