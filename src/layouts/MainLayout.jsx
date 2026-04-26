import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const MainLayout = () => {
  const location = useLocation();
  const isMapPage = ['/book-ride', '/select-ride'].includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-zinc-950 text-gray-900 dark:text-white transition-colors duration-500">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      {!isMapPage && <Footer />}
    </div>
  );
};

export default MainLayout;
