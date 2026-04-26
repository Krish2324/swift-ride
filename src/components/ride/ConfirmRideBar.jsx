import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ConfirmRideBar = ({ selectedRide }) => {
  const navigate = useNavigate();
  if (!selectedRide) return null;

  return (
    <div className="mt-auto pt-6 border-t border-gray-100 dark:border-zinc-800 sticky bottom-0 bg-white dark:bg-zinc-900 pb-6 z-20">
      <button 
        onClick={() => navigate('/dashboard/user')}
        className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-6 py-4 rounded-xl shadow-lg hover:shadow-yellow-500/20 transition-all active:scale-[0.98] flex justify-between items-center group"
      >
        <span className="text-lg">Confirm {selectedRide.name}</span>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium mr-1">₹{selectedRide.price}</span>
          <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
        </div>
      </button>
      <p className="text-[10px] text-center text-gray-400 dark:text-zinc-500 mt-3 font-medium">
        Taxes and fees included. Pay via UPI or Cash.
      </p>
    </div>
  );
};

export default ConfirmRideBar;
