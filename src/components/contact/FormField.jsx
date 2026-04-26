import React from 'react';

const FormField = ({ label, id, type = 'text', placeholder, value, onChange, options, rows }) => {
  const baseClasses = "w-full bg-gray-50 dark:bg-zinc-800/50 border border-gray-200 dark:border-zinc-700 rounded-2xl px-5 py-4 font-medium text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/10 transition-all";

  return (
    <div className="flex flex-col gap-2.5">
      <label htmlFor={id} className="text-xs font-black uppercase tracking-widest text-gray-400 dark:text-zinc-500 ml-1">
        {label}
      </label>
      
      {type === 'select' ? (
        <div className="relative">
          <select
            id={id}
            name={id}
            value={value}
            onChange={onChange}
            className={`${baseClasses} appearance-none cursor-pointer`}
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                {opt.label}
              </option>
            ))}
          </select>
          <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      ) : type === 'textarea' ? (
        <textarea
          id={id}
          name={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={rows || 5}
          className={`${baseClasses} resize-none`}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={baseClasses}
        />
      )}
    </div>
  );
};

export default FormField;
