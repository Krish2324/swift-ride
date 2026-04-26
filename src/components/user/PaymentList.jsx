import React from 'react';
import PaymentCard from './PaymentCard';
import { CreditCard, Plus } from 'lucide-react';

const PaymentList = ({ methods, selectedId, onSelect }) => {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-premium border border-gray-100 dark:border-zinc-800">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-2 text-gray-900 dark:text-white leading-none">
          <CreditCard size={20} className="text-yellow-600 dark:text-yellow-500" />
          <h2 className="text-xl font-black tracking-tight">Payment</h2>
        </div>
        <button className="w-10 h-10 rounded-2xl bg-gray-50 dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 flex items-center justify-center hover:bg-yellow-500 hover:text-gray-900 transition-all active:scale-95 shadow-sm">
          <Plus size={20} strokeWidth={3} />
        </button>
      </div>

      <div className="space-y-4">
        {methods.map((method) => (
          <PaymentCard 
            key={method.id} 
            method={method} 
            isActive={selectedId === method.id}
            onSelect={() => onSelect(method.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default PaymentList;
