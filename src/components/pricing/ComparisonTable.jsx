import React from 'react';
import { Check, Minus } from 'lucide-react';

const ComparisonTable = () => {
  const categories = ['Mini', 'Sedan', 'SUV', 'Luxury'];
  const data = [
    { feature: 'Base Fare', values: ['₹50', '₹80', '₹120', '₹200'] },
    { feature: 'Per KM', values: ['₹11', '₹14', '₹20', '₹35'] },
    { feature: 'Wait time (per min)', values: ['₹2.5', '₹3.5', '₹5', '₹8'] },
    { feature: 'AC / Climate Control', values: [true, true, true, true] },
    { feature: 'Extra Legroom', values: [false, true, true, true] },
    { feature: 'Child Seats (Request)', values: [false, false, true, true] },
    { feature: 'Premium Audio', values: [false, false, false, true] },
    { feature: 'Wi-Fi / Connectivity', values: [false, false, false, true] },
  ];

  return (
    <section className="mt-24 w-full">
      <div className="flex flex-col gap-2 mb-10">
        <h3 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight leading-none">Compare Features</h3>
        <p className="text-sm font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-widest">Detailed specification breakdown</p>
      </div>

      <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-premium border border-gray-100 dark:border-zinc-800 overflow-hidden group">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-gray-50/80 dark:bg-zinc-800/50 backdrop-blur-sm border-b border-gray-100 dark:border-zinc-800">
                <th className="p-8 text-[10px] font-black text-gray-400 dark:text-zinc-500 uppercase tracking-widest">Feature</th>
                {categories.map((cat) => (
                  <th 
                    key={cat} 
                    className={`p-8 text-sm font-black text-gray-900 dark:text-white uppercase tracking-tighter ${cat === 'Sedan' ? 'bg-yellow-500/5' : ''}`}
                  >
                    {cat}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 dark:divide-zinc-800/50">
              {data.map((row) => (
                <tr key={row.feature} className="hover:bg-gray-50/50 dark:hover:bg-zinc-800/30 transition-colors">
                  <td className="p-8 text-sm font-bold text-gray-700 dark:text-zinc-300">{row.feature}</td>
                  {row.values.map((val, idx) => (
                    <td 
                      key={idx} 
                      className={`p-8 text-sm font-black text-gray-900 dark:text-white ${categories[idx] === 'Sedan' ? 'bg-yellow-500/5 whitespace-nowrap' : 'whitespace-nowrap'}`}
                    >
                      {typeof val === 'boolean' ? (
                        val ? (
                          <Check size={18} className="text-green-500" strokeWidth={3} />
                        ) : (
                          <Minus size={18} className="text-gray-300 dark:text-zinc-700" strokeWidth={3} />
                        )
                      ) : (
                        val
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
