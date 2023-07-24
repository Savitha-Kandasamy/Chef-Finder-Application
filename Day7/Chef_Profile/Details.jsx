import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Detail() {
  // State variables for form fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [phoneNumber, setPhoneNumber]  = useState('');
  const [speciality, setSpeciality] = useState('');
  const [experience, setExperience] = useState(''); 

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    // You can access the form values using the state variables
    alert("Details Uploaded!");
    navigate("/Chefhome");
  };

  // Inline CSS
  const containerStyle = {
    maxWidth: '500px',
    margin: '0 auto',
    marginTop:'100px',
    padding: '20px',
    border: '0px solid black',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#57575b'
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    fontSize: '16px',
    backgroundColor:'#b8b8bb'
  };

  const iconStyle = {
    position: 'absolute',
    right: '10px',
    fontSize: '20px'
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: 'black',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    cursor: 'pointer'
  };
  
  const specialityOptions = [
    'Italian Cuisine',
    'French Cuisine',
    'Chinese Cuisine',
    'Indian Cuisine',
    'Japanese Cuisine',
    'Mexican Cuisine',
    'Other',
  ];
  const locationOptions = [
    'Delhi',
    'Maharastra',
    'Chennai',
    'Bangalore',
    'Mumbai',
    'Kerala',
    'Andra Pradesh',
    'Karnataka',
    'Telungana',
    'Other',
  ];
  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit}>
        <h3>Chef Details</h3>
<br></br>
        {/* First Name */}
        <div style={{ marginBottom: '20px' }}>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <input
              type="text"
              placeholder="First Name"
              style={inputStyle}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <ion-icon name="person" className="icon" style={iconStyle}></ion-icon>
          </div>
        </div>

        {/* Last Name */}
        <div style={{ marginBottom: '20px' }}>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <input
              type="text"
              placeholder="Last Name"
              style={inputStyle}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <ion-icon name="person" className="icon" style={iconStyle}></ion-icon>
          </div>
        </div>

        {/* Email */}
        <div style={{ marginBottom: '20px' }}>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <input
              type="email"
              placeholder="Enter your Email Address"
              style={inputStyle}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <ion-icon name="mail" className="icon" style={iconStyle}></ion-icon>
          </div>
        </div>
        {/*phone*/}
        <div style={{ marginBottom: '20px' }}>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <input
              type="text"
              placeholder="Enter your PhoneNumber"
              style={inputStyle}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
            <ion-icon name="mail" className="icon" style={iconStyle}></ion-icon>
          </div>
        </div>
         {/* Location */}
         <div style={{ marginBottom: '20px' }}>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <select
              style={inputStyle}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            >
              <option value="" disabled>
                Select Location
              </option>
              {locationOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ion-icon name="mail" className="icon" style={iconStyle}></ion-icon>
          </div>
        </div>
       {/* Speciality */}
       <div style={{ marginBottom: '20px' }}>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <select
              style={inputStyle}
              value={speciality}
              onChange={(e) => setSpeciality(e.target.value)}
              required
            >
              <option value="" disabled>
                Select Speciality
              </option>
              {specialityOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ion-icon name="mail" className="icon" style={iconStyle}></ion-icon>
          </div>
        </div>
{/*exp*/}
 {/* Location */}
 <div style={{ marginBottom: '20px' }}>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <input
              type="text"
              placeholder="Enter your Experience"
              style={inputStyle}
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              required
            />
            <ion-icon name="mail" className="icon" style={iconStyle}></ion-icon>
          </div>
        </div>
        <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button type="submit" style={buttonStyle}>SUBMIT</button>
        </div>
      </form>
    </div>
  );
}

export default Detail;
