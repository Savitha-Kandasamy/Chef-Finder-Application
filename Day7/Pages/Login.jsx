import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setEmail, setPass, setName } from './Action';
import axios from 'axios';
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
    backgroundImage: 'url("https://wallpaper.dog/large/20583872.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  login: {
    width: '400px',
    padding: '60px',
    borderRadius: '10px',
    backgroundColor: 'rgb(45, 44, 44,0.4)',
    marginLeft:'120px',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '29px',
    fontWeight: 'bold',
    color: '#b6afaf',
    textTransform: 'uppercase',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#fff',
    textAlign:'center',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '10px',
  },
  button: {
    width: '50%',
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#2ac634',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    marginLeft:'70px',
  },
  registerLink: {
    display: 'block',
    marginTop: '10px',
    textAlign: 'center',
    textDecoration: 'none',
    color: '#fff',
  },
};


function Login({
  email,
  pass,
  name,
  setEmail,
  setName,
  setPass,
}) {
  const check = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8181/api/v1/auth/authenticate",
        {
          name:name,
          email: email,
          password: pass,
        }
        );
        
        console.log(response.data);
        localStorage.setItem('token', response.data.token);
        console.log(localStorage.getItem('token'));

      window.alert("Successfully Logged In");

      

      navigate("/Intermediate");
    } catch (error) {
      console.log(error);
      window.alert("Invalid Credentials");
    }
  };

  const navigate = useNavigate();
  
  const [role, setRole] = useState('');
  if (role === 'student') {
  navigate('/NavSide'); 
  } else if (role === 'admin') {
  navigate('/Navi'); 
  }
  const [checkpass, setCheckPass] = useState(false);
  
  return (
    <div className="tall">
    <div style={styles.container}>
      <div style={styles.login}>
        <form onSubmit={check}>
          <h2 style={styles.title}>Login</h2>
          <div style={styles.formGroup}>
            <input
              style={styles.input}
              type="text"
              name="name"
              value={name}
              placeholder="Enter your username"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <input
              style={styles.input}
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <input
              style={styles.input}
              type="password"
              name="pass"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button style={styles.button} type="submit">
            Login
          </button>
          {checkpass && alert('Successful login ' + name)}
          {checkpass && navigate('/Intermediate')}
          <Link to="/signup" style={styles.registerLink}>
            Don't have an account? Register
          </Link>
        </form>
      </div>
    </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    email: state.login.email,
    pass: state.login.pass,
    name: state.login.name,
  };
};

const mapDispatchToProps = {
  setEmail,
  setPass,
  setName,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);