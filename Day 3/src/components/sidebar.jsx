import React from 'react'; // Create a separate CSS file for your styles
import './sidebar.css';
import { Link } from 'react-router-dom';
function Sidebar() {
    

  return (
    <div>
    <html>
      
       
      <div className="header">
        <h1>Chef Finder</h1>

        <ul className="nav">
          <li>
          <Link to='/home'><a href="#">HOME</a></Link> 
          </li>
          <li>
          <Link to='/about'><a href="#">ABOUT</a></Link> 
          </li>
          <li>
          <Link to='/login'><a>LOGOUT</a></Link> 
          </li>
          <li>
          <Link to='/signup'><a>SIGNUP</a></Link> 
          </li>
          
        </ul>
      </div>

      <div className="headerbg"></div>
      <div className="line-1"></div>
    </html>
    </div>
  )
}
  export default Sidebar;