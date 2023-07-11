import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">Profile</li>
        <li className="navbar-item">Messages</li>
        <li className="navbar-item"></li>
        <li className="navbar-item">Settings</li>
      </ul>
    </nav>
  );
};

export default NavBar;
