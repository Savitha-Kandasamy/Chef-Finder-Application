import './App.css';
import {BrowserRouter as Router, Route,Routes}from 'react-router-dom';
import Login from './pages/login';
import RegistrationForm from './pages/rform';
import Sidebar from './components/sidebar';
import Home from './pages/home';
import About from './pages/about';
import Dashboard from './pages/dashboard';
function App() {
  return (
    <div className="App">
    <Router>

      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Signup" element={<RegistrationForm/>}/>
        <Route path="/Sidebar" element={<Sidebar/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      
      </Routes>
    </Router>
    </div>
  );
}

export default App;