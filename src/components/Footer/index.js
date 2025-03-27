// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-black border-t border-white/20 text-white py-6 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Sourabh Gautam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;