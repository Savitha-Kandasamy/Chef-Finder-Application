import React, { useState } from 'react';


const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const containerStyle = {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 1, 10)',
    backgroundColor: 'white',
    marginTop:'200px',
  };

  const headingStyle = {
    marginBottom: '20px',
    textAlign: 'center',
  };

  const labelStyle = {
    fontWeight: 'bold',
    textAlign: 'center',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };

  const textareaStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    resize: 'vertical',
  };
  const submitButtonStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', { name, email, message });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" style={labelStyle}>Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="email" style={labelStyle}>Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="message" style={labelStyle}>Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            style={textareaStyle}
          />
        </div>
        
        <button type="submit" style={submitButtonStyle}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
