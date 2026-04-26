import React, { useState } from 'react';
import FormField from './FormField';
import { Send, CheckCircle2 } from 'lucide-react';

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    topic: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    console.log('Form Submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white dark:bg-zinc-900 rounded-[32px] p-12 shadow-premium border border-gray-100 dark:border-zinc-800 h-full flex flex-col items-center justify-center text-center space-y-8 animate-in fade-in zoom-in duration-700">
        <div className="w-24 h-24 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center">
          <CheckCircle2 size={48} strokeWidth={2.5} className="animate-bounce" />
        </div>
        <div className="space-y-4">
          <h3 className="text-3xl font-black text-gray-900 dark:text-white tracking-tighter">Message Sent!</h3>
          <p className="text-lg font-medium text-gray-500 dark:text-zinc-500 max-w-sm mx-auto">
            Thanks for reaching out, {formData.firstName}. Our support team will get back to you within 2 hours.
          </p>
        </div>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 text-gray-600 dark:text-zinc-400 font-black text-xs px-10 py-4 rounded-2xl transition-all uppercase tracking-widest"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-[32px] p-12 shadow-premium border border-gray-100 dark:border-zinc-800 h-full animate-in fade-in slide-in-from-right duration-1000">
      <form onSubmit={handleSubmit} className="flex flex-col gap-8 h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FormField 
            label="First Name"
            id="firstName"
            placeholder="Jane"
            value={formData.firstName}
            onChange={handleChange}
          />
          <FormField 
            label="Last Name"
            id="lastName"
            placeholder="Doe"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        
        <FormField 
          label="Work Email"
          id="email"
          type="email"
          placeholder="jane.doe@company.com"
          value={formData.email}
          onChange={handleChange}
        />
        
        <FormField 
          label="What is this regarding?"
          id="topic"
          type="select"
          value={formData.topic}
          onChange={handleChange}
          options={[
            { label: 'Select a topic', value: '', disabled: true },
            { label: 'Enterprise Fleet Pricing', value: 'enterprise' },
            { label: 'Technical Support', value: 'support' },
            { label: 'Driver Onboarding', value: 'driver' },
            { label: 'Lost & Found', value: 'lost-found' },
            { label: 'Other Inquiry', value: 'other' }
          ]}
        />
        
        <FormField 
          label="Message"
          id="message"
          type="textarea"
          placeholder="Provide details about your request..."
          value={formData.message}
          onChange={handleChange}
          rows={6}
        />
        
        <div className="pt-4 mt-auto">
          <button 
            type="submit"
            className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-black text-sm px-10 py-5 rounded-2xl shadow-xl shadow-yellow-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-3 uppercase tracking-widest"
          >
            Send Message
            <Send size={18} strokeWidth={3} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
