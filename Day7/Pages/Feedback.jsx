import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addFeedback } from './feed';

const FeedForm = () => {
  const [formdata, setFormdata] = useState({
    email: '',
    name: '',
    subject: '',
    message: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setFormdata({ ...formdata, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addFeedback(formdata);
      navigate('/Profile');
      alert("Feedback Submited");
    } catch (error) {
      console.log(error);
    }

    console.log(formdata);
  };

  // Inline CSS for the component
  const formStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor:'rgb(45, 44, 44,0.4)',
  };

  const containerStyle = {
    maxWidth: '400px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 1, 1)',
    marginRight:'900px',
  };

  const headingStyle = {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
  };

  const buttonStyle = {
    display: 'block',
    width: '70%',
    padding: '10px',
    backgroundColor: 'green',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    fontSize: '16px',
    cursor: 'pointer',
    marginLeft:'70px',
    marginRight:'10px',
  };

  return (
    <div style={formStyle}>
      <div style={containerStyle} className="login-form">
        <h2 style={headingStyle}>FEEDBACK</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            id="email"
            onChange={handleChange}
            style={inputStyle}
            required
          />
          <input
            type="text"
            placeholder="Name"
            id="name"
            onChange={handleChange}
            style={inputStyle}
            required
          />
          <input
            type="text"
            placeholder="Subject"
            id="subject"
            onChange={handleChange}
            style={inputStyle}
            required
          />
          <textarea
            placeholder="Message"
            id="message"
            onChange={handleChange}
            style={{ ...inputStyle, height: '100px' }}
            required
          />
          <button type="submit" style={buttonStyle}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FeedForm;


