// Layout.jsx
import React from 'react';
import Navbar from './Navbar'; // This will be only the navigation bar
import Footer from './Footer'; // We'll create this from your footer section

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800" style={{ 
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      fontSmoothing: 'antialiased',
      textRendering: 'optimizeLegibility',
    }}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;