import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Bchef() {
  // State variables for form fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [chefName, setChefName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [events, setEvents] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('credit'); // Default payment method is credit card
  const [cardNumber, setCardNumber] = useState('');
  const [cardCVV, setCardCVV] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Handle form submission here
    // You can access the form values using the state variables
    alert("Booking Success!");
    navigate("/Booking")
  };

  // Inline CSS
  const containerStyle = {
    maxWidth: '700px',
    margin: '0 auto',
    marginTop:'30px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff'
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    fontSize: '16px'
  };

  const iconStyle = {
    position: 'absolute',
    right: '10px',
    fontSize: '20px'
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#39f077',
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
  const eventOptions = [
    'Marriage',
    'Birthday Party',
    'Organiztion Meeting',
    'Hotels',
    'Other',
  ];
  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit}>
        <h3>Book Now</h3>
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

        {/* Chef Name */}
        <div style={{ marginBottom: '20px' }}>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <input
              type="text"
              placeholder="Enter the chef name"
              style={inputStyle}
              value={chefName}
              onChange={(e) => setChefName(e.target.value)}
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
                Select Cuisine
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
        {/*events*/}
        <div style={{ marginBottom: '20px' }}>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <select
              style={inputStyle}
              value={events}
              onChange={(e) => setEvents(e.target.value)}
              required
            >
              <option value="" disabled>
                Select Events
              </option>
              {eventOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ion-icon name="mail" className="icon" style={iconStyle}></ion-icon>
          </div>
        </div>
        {/* From and To Dates */}
        <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ flex: '1', marginRight: '10px' }}>
            <h3>From</h3>
            <br></br>
            <input
              type="date"
              style={inputStyle}
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
            />
          </div>
          <div style={{ flex: '1', marginLeft: '10px' }}>
            <h3>To</h3>
            <br></br>
            <input
              type="date"
              style={inputStyle}
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
            />
          </div>
        </div>

        {/* Payment Method */}
        <div style={{ marginBottom: '20px' }}>
          <div>
            <h3>Payment Method</h3>
            <br></br>
            <input
              type="radio"
              name="pay"
              id="credit"
              className="radio"
              value="credit"
              checked={paymentMethod === 'credit'}
              onChange={() => setPaymentMethod('credit')}
            />
            <label htmlFor="credit">
              <span>
                <ion-icon name="card" className="radio-icon" style={{ marginRight: '5px' }}></ion-icon>
                Credit Card
              </span>
            </label>
            <input
              type="radio"
              name="pay"
              id="enaira"
              className="radio"
              value="enaira"
              checked={paymentMethod === 'enaira'}
              onChange={() => setPaymentMethod('enaira')}
            />
            <label htmlFor="enaira">
              <span>
                <ion-icon name="cash" className="radio-icon" style={{ marginRight: '5px' }}></ion-icon>
                Cash
              </span>
            </label>
          </div>
        </div>

        {/* Card Number (shown only if credit card payment selected) */}
        {paymentMethod === 'credit' && (
          <div style={{ marginBottom: '20px' }}>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <input
                type="tel"
                placeholder="Card Number"
                style={inputStyle}
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
              <ion-icon name="cash-outline" className="icon" style={iconStyle}></ion-icon>
            </div>
          </div>
        )}

        {/* Card CVV (shown only if credit card payment selected) */}
        {paymentMethod === 'credit' && (
          <div style={{ marginBottom: '20px' }}>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <input
                type="number"
                placeholder="Card CVV"
                style={inputStyle}
                value={cardCVV}
                onChange={(e) => setCardCVV(e.target.value)}
              />
              <ion-icon name="card-outline" className="icon" style={iconStyle}></ion-icon>
            </div>
          </div>
        )}

        <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button type="submit" style={buttonStyle}>BOOK CHEF</button>
        </div>
      </form>
    </div>
  );
}

export default Bchef;
