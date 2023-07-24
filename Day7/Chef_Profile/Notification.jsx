import React, { useState } from 'react';
import Topc from './Topc';
import Sidec from './Sidec';
import {FaCalendarAlt,FaUser,FaRegCalendarAlt} from 'react-icons/fa';
import Button from '@mui/material/Button';
const Notification = () => {
  
  const reviewContainerStyle = {
    marginLeft: '300px',
    marginRight: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
    width:'400px',
    height:'70px',
    marginBottom: '1900px'
  };
  const titleStyle = {
    fontSize: '40px',
    lineHeight: '0.3',
    padding:'10px',
    margin: '90px',
    textAlign: 'justify',
    marginLeft: '0px',
  
  };
  const reviewStyle = {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '40px',
    marginBottom: '20px',
    backgroundColor: '#f7f7f7',
    width: '800px',
    height:'350px',
    boxShadow: '2px 4px 5px rgba(0.1, 0.1, 0.1, 0.1)',
   transition: 'box-shadow 0.7s ease',
  };
  
  const orders = [
    {
      id: 1,
      customerName: 'John Doe',
      fromDate: '2023-07-21',
      toDate:'2023-07-23',
      event:'Birthday Party',
    },
    {
      id: 2,
      customerName: 'Jane Smith',
      fromDate: '2023-07-20',
      toDate:'2023-07-21',
      event:'Reunion'
    },
    {
      id: 3,
      customerName: 'Kapoor',
      fromDate: '2023-06-12',
      toDate:'2023-06-13',  
      event:'Night Party'
    },
    {
      id: 4,
      customerName: 'Jane Smith', 
      fromDate: '2023-02-02',
      toDate:'2023-02-01',
      event:'Marriage'
    },
  ];

  const renderOrders = () => {
    return orders.map((order) => (
      <div key={order.id} style={reviewStyle}>
        <h2>Order {order.id}</h2>
        <br></br>
        <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '8px',
                  }}
                >
                  <FaUser style={{ width: '24px', marginRight: '8px' }} />
                  <h4>Customer Name: {order.customerName}</h4>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <FaCalendarAlt style={{ width: '24px', marginRight: '8px' }} />
                  <h5>From Date: {order.fromDate}</h5>
                </div>
                <br></br>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <FaCalendarAlt style={{ width: '24px', marginRight: '8px' }} />
                  <h5>To Date: {order.toDate}</h5>
                </div>
                <br></br>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <FaRegCalendarAlt style={{ width: '24px', marginRight: '8px' }} />
                  <h3>Event: {order.event}</h3>
                </div>
                <br></br>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '8px',width:'100px' }}>
        <Button variant="contained">
          DECLINE
        </Button>
        </div>
      </div>
    ));
  };
 return  (
    <div>
      <Topc/>
      <Sidec/>
      <div className="dashboard-wrapper">
      <div style={titleStyle}>AVAILABLE ORDERS
        </div>
      <div style={reviewContainerStyle}>
            {renderOrders()}
             </div>
      </div>
    </div>
  );
};

export default Notification;
