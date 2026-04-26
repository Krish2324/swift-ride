import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    // Initial check from localStorage or system preference
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    
    // Debug log to verify class application
    console.log(`Theme toggled. Dark mode: ${isDark}. Html class: ${root.className}`);
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark((prev) => !prev)}
      className="p-2.5 rounded-xl bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-zinc-100 transition-all hover:scale-110 active:scale-95 shadow-sm border border-gray-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
      aria-label="Toggle Theme"
    >
      {isDark ? (
        <Sun size={20} className="text-yellow-500 transition-transform duration-500 rotate-0" />
      ) : (
        <Moon size={20} className="text-zinc-600 transition-transform duration-500 rotate-12" />
      )}
    </button>
  );
};

export default ThemeToggle;
