import React from 'react';

const ContactInfoCard = ({ title, value, subtitle, icon: Icon, actionText, actionLink }) => {
  return (
    <div className="flex items-start gap-6 group hover:translate-x-1 transition-transform duration-300">
      <div className="w-14 h-14 rounded-full bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 flex items-center justify-center shrink-0 shadow-inner group-hover:bg-yellow-500 group-hover:text-gray-900 transition-all duration-500">
        <Icon size={24} />
      </div>
      <div className="space-y-1">
        <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 dark:text-zinc-500">
          {title}
        </div>
        <div className="text-lg font-black text-gray-900 dark:text-white leading-tight">
          {value}
        </div>
        {subtitle && (
          <div className="text-xs font-medium text-gray-500 dark:text-zinc-500">
            {subtitle}
          </div>
        )}
        {actionText && (
          <a 
            href={actionLink} 
            className="inline-flex items-center gap-2 mt-2 text-sm font-black text-yellow-600 dark:text-yellow-500 hover:underline"
          >
            {actionText}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

export default ContactInfoCard;
