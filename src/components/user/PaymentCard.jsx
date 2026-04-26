import React from 'react';
import { CreditCard, CheckCircle2 } from 'lucide-react';

const PaymentCard = ({ method, isActive, onSelect }) => {
  return (
    <div 
      onClick={() => onSelect(method)}
      className={`relative p-4 border rounded-2xl cursor-pointer transition-all flex items-center justify-between group ${
        isActive 
          ? 'bg-yellow-50 dark:bg-yellow-500/5 border-yellow-500 shadow-md scale-[1.02]' 
          : 'bg-white dark:bg-zinc-900 border-gray-100 dark:border-zinc-800 hover:border-gray-200 dark:hover:border-zinc-700'
      }`}
    >
      <div className="flex items-center gap-4">
        <div className={`w-12 h-8 rounded-md flex items-center justify-center ${
          method.brand === 'VISA' ? 'bg-zinc-900 border border-zinc-700' : 'bg-gray-100 dark:bg-zinc-800'
        }`}>
          <span className={`text-[8px] font-black tracking-widest ${
            method.brand === 'VISA' ? 'text-white' : 'text-gray-400'
          }`}>{method.brand}</span>
        </div>
        <div>
          <div className="text-sm font-bold text-gray-900 dark:text-white">•••• {method.last4}</div>
          <div className="text-[10px] font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-tighter leading-none mt-1">
            Expires {method.expiry}
          </div>
        </div>
      </div>
      
      {isActive && (
        <CheckCircle2 size={16} className="text-yellow-600 dark:text-yellow-500 fill-yellow-500/10" strokeWidth={3} />
      )}
    </div>
  );
};

export default PaymentCard;
