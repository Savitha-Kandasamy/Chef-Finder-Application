import React from 'react'
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  return (
    <div>
      <div className="sidebar-wrapper">
 
        <div className="sidebar-contents">
        <ul>
        <li>
        <Link to='/Profile'><a href="#">HOME</a></Link> 
        </li>
        <li>
        <Link to='/About'><a href="#">ABOUT</a></Link> 
        </li>
        {/* <li>
        <Link to='/Booking'><a href="#">BOOKING</a></Link> 
      </li> */}
        {/* <li>
        <Link to='/Payment'><a href="#">PAYMENT</a></Link> 
      </li> */}
      <li>
      <Link to='/Rating'><a href="#">BOOKING</a></Link> 
      </li>
          <li className="dropdown">
              <a href="#" className="dropdown-toggle">
                MENU
                <FontAwesomeIcon icon={faAngleDown} className="caret" />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/Menu">
                    <a href="#">South cuisine</a>
                  </Link>
                </li>
                <li>
                  <Link to="/North">
                    <a href="#">North cuisine</a>
                  </Link>
                </li>
                <li>
                  <Link to="/Chinese">
                    <a href="#">Chinese cuisine</a>
                  </Link>
                </li>
              </ul>
            </li>
      </ul>

       
        </div>
      </div>
    </div>
  )
}

export default Sidebar
