import React from 'react';
import '../styles/Navbar.css'


const Navbar = ({ toggleTheme, showToggle }) => {
  return (
    <nav className="navbar">
      {showToggle && (
        <button onClick={toggleTheme}>Toggle Theme</button>
      )}
    </nav>
  );
};

export default Navbar;