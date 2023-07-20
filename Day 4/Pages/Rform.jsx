import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './Rform.css';

const RegistrationForm= () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
const navigate=useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (name === '' && email === '' && password === '' && confirmPassword === '') {
      setError('Please fill in all fields.');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match.');
    } else {
      alert('Registration successful!');
      navigate('/Login');

    }
  };
  

  return (
    <div className="body1">
    <div name="class1">
    
      <br/>
      <br></br>
      <form className="form1"onSubmit={handleSubmit}>
      <center><h1>REGISTRATION</h1></center>
        <label className="name1">
        </label>  
        <div className="fld1">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          </div>
        <label className="name2">
        </label>
        <div className="fld2">
          <input
            type="email"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          </div>
        <label className="name3">
        </label>
        <div className="fld3">
          <input
            type="password"
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          </div>
          <label className="name3">
          </label>
          <div className="fld3">
            <input type="password"  placeholder='password' value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)} required/>
          </div>
          {error && <p className="error-message">{error}</p>}

        <br/>
<button type="submit" >Register</button>
      </form>
      </div>
    </div>
  );
  }
export default RegistrationForm;