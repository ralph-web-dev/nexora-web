import React from 'react';
import Navbar from '../components/sections/Navbar';
import Footer from '../components/sections/Footer';
const MainLayout = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <Navbar />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};
export default MainLayout;
