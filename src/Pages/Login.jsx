import React, { useState } from 'react';
import './Login.css'; // Import the CSS file
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
const navigate=useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your login logic here
    if (email === '' && password === '') {
      // Successful login, navigate to dashboard
      setError('please fill this field');
    } else {
      // Invalid credentials, display error message
      setError('Invalid email or password');
    }
    alert('Login successful!');
    navigate('/Profile');
  };

  return (
      <div className="login1">
    <div className='form'>
    <form className="login-form" onSubmit={handleSubmit}>

      <h1>LOGIN</h1>
      <br></br>
        {error && <p >{error}</p>}
        <div className="div1">
        <input
         
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        </div>
        <input
         
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      <br></br>
      <br></br>
    <button type="submit" onChange={handleSubmit} required>Login </button> 
      <br></br>
      <div className="links-container">
      <br></br>
      <a href="#">Forgot password ?</a> or 
      <br/>
      create a account
        <Link to='/signup'><a href="#"> Register</a></Link> 

      </div>
    </form>
    </div>
    </div>
  );
};

export default Login;