import React from 'react';

const UserHeader = ({ name, subtitle }) => {
  return (
    <header className="mb-10 animate-in fade-in slide-in-from-top duration-700">
      <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-2 tracking-tighter leading-none">
        Welcome back, <span className="text-yellow-600 dark:text-yellow-500">{name}</span>
      </h1>
      <p className="text-gray-500 dark:text-zinc-500 text-lg font-medium">
        {subtitle || "Here's your mobility overview for today."}
      </p>
    </header>
  );
};

export default UserHeader;
