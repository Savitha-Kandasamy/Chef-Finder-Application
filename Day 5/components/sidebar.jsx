import React from 'react'; // Create a separate CSS file for your styles
import './sidebar.css';
import { Link } from 'react-router-dom';
function Sidebar() {
    

  return (
    <div>

      
       
      <div className="header">
        <h1>Chef Finder</h1>

        <ul className="nav">
          <li>
          <Link to='/login'><a>LOGOUT</a></Link> 
          </li>
          {/* <li>
          <Link to='/signup'><a>SIGNUP</a></Link> 
          </li>
           */}
        </ul>
      </div>
      <div className="sidebar">
      <ul className="sidebar-links">
        <li>
        <Link to='/home'><a href="#">PROFILE</a></Link> 
        </li>
        <li>
        <Link to='/about'><a href="#">ABOUT</a></Link> 
        </li>
        <li>
        <Link to='/menu'><a href="#">BOOKING</a></Link> 
        </li>
        <li>
        <Link to='/chef'><a href="#">RATINGS</a></Link> 
        </li>
      </ul>
    </div>
    <div className="dashboard-bg">
    <div className="dashboard-wrapper">

        <h1> Hello World</h1>
      </div>
      </div>
      <div className="headerbg"></div>
      <div className="line-1"></div>
    </div>
  )
}
  export default Sidebar;