import React from 'react'
import { Link } from 'react-router-dom';
function Topbar() {
  return (
    <div>
      <div className="topbar-wrapper">
      <ul className="nav">
         <li>
          <Link to="/Contact"><a>CONTACT</a></Link>
         </li>
         <li>
          <Link to="/Feedback"><a>FEEDBACK</a></Link>
         </li>
         <li>
          <Link to='/login'><a>LOGOUT</a></Link>
         </li>
        </ul> 
        <div className="profile-logo">
          <Link to="/Editpro"><img src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg" alt="Profile Logo" />
          </Link>
        </div>  
          
      </div>
    </div>
  )
}

export default Topbar
