import React from 'react';
import './Loader.css'; // Import the CSS for styling

const Loader = () => {
  return (
    <div className="loader-container md:h-100vh">
      <div className="spinner"></div>
      <img src="/logo.svg" alt="Logo" className="logo" />
    </div>
  );
};

export default Loader;
