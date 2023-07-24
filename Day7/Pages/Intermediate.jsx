import React from 'react';
import { Link } from 'react-router-dom';
const Intermediate = () => {
  const buttonStyle1 = {
    marginRight: '50px',
    backgroundColor: 'rgb(45, 44, 44,0.9)',
    color: 'white',
    padding: '13px 20px',
    borderRadius: '5px',
    width:'130px',
    textAlign: 'center',
  };

  const buttonStyle2 = {
    backgroundColor: 'rgb(45, 44, 44,0.9)',
    color: 'white',
    padding: '13px 20px',
    borderRadius: '5px',
    width:'130px',
    textAlign: 'center',
  };
  
  const handleButton1Click = () => {
    // Add your logic for handling Button 1 click here
    console.log('Button 1 clicked!');
  };

  const handleButton2Click = () => {
    // Add your logic for handling Button 2 click here
    console.log('Button 2 clicked!');
  };

  return (
    <div>
        <center>
      <h2 style={{ color: 'black', fontSize: '24px', marginBottom: '250px' }}></h2>
      {/* <div style={cardStyle}> */}
      <img
          src="https://img.freepik.com/premium-vector/event-management-concept-celebration-meeting-organization-planning-pr-company-business-mass-media-social-network-promotion-isolated-vector-illustration_613284-1597.jpg"
          alt="User Avatar"
          style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '10px', marginRight:'80px'}}
        />
        <img
          src="https://img.freepik.com/free-vector/illustration-customer-service-concept_53876-5882.jpg?w=2000" 
          alt="Another Image"
          style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '10px' }}
        />

      <form>
        {/* Add any other form elements here if needed */}
       <Link to="/Profile"> <button type="button" style={buttonStyle1} onClick={handleButton1Click}>USER</button></Link>
        <Link to="/Details"><button type="button" style={buttonStyle2} onClick={handleButton2Click}>CHEF</button></Link>
      </form>
      {/* </div>   */}
      </center>
    </div>
  );
};

export default Intermediate;
