import './App.css';
import {BrowserRouter as Router, Route,Routes}from 'react-router-dom';
import Login from './Pages/Login';
import RegistrationForm from './Pages/Rform';
import Home from './Pages/Profile';
import About from './Pages/About';
import Booking from './Pages/Booking';
import Rate from './Pages/Rating';
import Dashboard from './Sample/Dashboard';
import Topbar from './Sample/Topbar';
import Sidebar from './Sample/Sidebar';
import Menu from './Pages/Menu';
import Payment from './Pages/Payment';
import North from './Pages/North';
import Chinese from './Pages/Chinese';
import Italian from './Pages/Italian';
import Bchef from './Pages/Bchef';
function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Signup" element={<RegistrationForm/>}/>
        <Route path="/Profile" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Booking" element={<Booking/>} />
        <Route path="/Rating" element={<Rate/>} />
        <Route path="/Topbar" element={<Topbar/>} />
        <Route path="/Sidebar" element={<Sidebar/>} />
        <Route path="/Menu" element={<Menu/>} />
        <Route path="/Payment" element={<Payment/>} />
        <Route path="/North" element={<North/>} />
        <Route path="/Chinese" element={<Chinese/>} />
        <Route path="/Italian" element={<Italian/>} />
<Route path="/Bchef" element={<Bchef/>} />
      </Routes>
    </Router>
    </div>
  );
}
export default App;