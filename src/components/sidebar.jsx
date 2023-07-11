import React from 'react';
import './SideBar.css';

const Sidebar = () => {
  return (
   
      <aside>
      
      <ul className="sidebar-menu">
        <li className="sidebar-item">About</li>
        <li className="sidebar-item">Home</li>
        <li className="sidebar-item">Menu</li>
        <li className="sidebar-item">Payment</li>
        <div className="side1">
        <center><button>Back</button></center>
        </div>
        </ul>
    </aside>
  );
};

export default Sidebar;
