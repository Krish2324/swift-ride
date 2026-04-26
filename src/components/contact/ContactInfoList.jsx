import React from 'react';
import ContactInfoCard from './ContactInfoCard';
import { Phone, Mail, BookOpen } from 'lucide-react';

const ContactInfoList = () => {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-3xl p-10 shadow-premium border border-gray-100 dark:border-zinc-800 space-y-10 animate-in fade-in slide-in-from-left duration-1000">
      <ContactInfoCard 
        title="Phone Support"
        value="+1 (800) 555-0199"
        subtitle="24/7 for Enterprise Clients"
        icon={Phone}
      />
      <ContactInfoCard 
        title="Email Inquiry"
        value="support@swiftride.co"
        subtitle="Typical response within 2h"
        icon={Mail}
      />
      <div className="pt-10 border-t border-gray-50 dark:border-zinc-800/50">
        <ContactInfoCard 
          title="Self Service"
          value="Documentation"
          icon={BookOpen}
          actionText="Visit Help Center"
          actionLink="#"
        />
      </div>
    </div>
  );
};

export default ContactInfoList;
