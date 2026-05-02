import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import BookRide from '../pages/BookRide';
import SelectRide from '../pages/SelectRide';
import UserDashboard from '../pages/UserDashboard';
import DriverDashboard from '../pages/DriverDashboard';
import Pricing from '../pages/Pricing';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Services from '../pages/Services';
import RoutesPage from '../pages/Routes';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="book-ride" element={<BookRide />} />
        <Route path="select-ride" element={<SelectRide />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="services" element={<Services />} />
        <Route path="routes" element={<RoutesPage />} />
        <Route path="dashboard">
          <Route path="user" element={<UserDashboard />} />
          <Route path="driver" element={<DriverDashboard />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
