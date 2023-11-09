import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-4" style={{ position: 'fixed', bottom: 0, width: '100%' }}>
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Courshala. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
