import React from 'react'
import {Link} from 'react-router-dom';

function Sidec() {
  return (
    <div>
      <div className="sidebar-wrapper">
 
        <div className="sidebar-contents">
        <ul>
        <li>
        <Link to='/Chefhome'><a href="#">HOME</a></Link> 
        </li>
      <li>
      <Link to='/Chefpro'><a href="#">PROFILE</a></Link> 
      </li>
        <li>
        <Link to='/Notification'><a href="#">ORDERS</a></Link> 
        </li>
        <li>
        <Link to='/Orders'><a href="#">NOTIFICATIONS</a></Link> 
        </li>
      </ul>

       
        </div>
      </div>
    </div>
  )
}

export default Sidec
