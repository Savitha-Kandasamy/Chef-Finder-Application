import React from 'react';
import Topc from './Topc';
import Sidec from './Sidec';
import {FaAward,FaUser} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
const Orders =() => {
  const reviewContainerStyle = {
    marginLeft: '300px',
    marginRight: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom:'50px', 
    marginTop:'200px',
    

  };
  const reviewStyle = {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '40px',
    marginBottom: '20px',
    backgroundColor: '#f7f7f7',
    width: '500px',
    height:'300px',
    alignItems:'center',
    justifyContent:'center',
    boxShadow: '2px 4px 5px rgba(0.1, 0.1, 0.1, 0.1)',
   transition: 'box-shadow 0.7s ease',
   display:'flex',
   flexDirection: 'column',
  };
  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '90%',
    padding:'10px',
    marginTop: '20px',
  };
  const spaceBetweenButtons = {
    marginRight: '30px', 
  };
  return (
    <div>
     <Topc/>
     <Sidec/>
     <div className="dashboard-wrapper">
     <div style={reviewContainerStyle}>
     <div style={reviewStyle}>
             <h1>Received a new Booking</h1>
             <br></br>
            <h2>Customer Name: Shahit</h2>
            <br></br>
            <h4>FromeDate:23-09-2023</h4>
            <h4>ToDate:27-09-2023</h4>
            <h3>Event:Marriage</h3>
            <div style={buttonContainerStyle}>
              <Button variant="contained"  style={spaceBetweenButtons}>
                Accept
              </Button>
              <Button variant="contained">
                Reject
              </Button>
            </div>
             </div>
             </div>
             </div>
      </div>
  );
};

export default Orders;
