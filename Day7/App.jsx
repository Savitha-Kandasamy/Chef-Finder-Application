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
import Intermediate from './Pages/intermediate';
import Topc from './Chef_Profile/Topc';
import Sidec from './Chef_Profile/Sidec';
import Dboard from './Chef_Profile/Dboard';
import Chome from './Chef_Profile/Chefhome';
import Detail from './Chef_Profile/Details';
import Orders from './Chef_Profile/Orders';
import Chefpro from './Chef_Profile/Chefpro';
import Notification from './Chef_Profile/Notification';
import store from './Pages/Store';
import {Provider} from 'react-redux';
import Contact from './Pages/Contact';
import Editpro from './Pages/Editpro';
import FeedForm from './Pages/Feedback';
function App() {
  return (
    <Provider store={store}>
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
        <Route path="/Intermediate" element={<Intermediate/>} />
        <Route path="/Dboard" element={<Dboard/>} />
        <Route path="/Topc" element={<Topc/>} />
        <Route path="/Sidec" element={<Sidec/>} />
        <Route path="/Chefhome" element={<Chome/>} />
        <Route path="/Details" element={<Detail/>} />
        <Route path="/Orders" element={<Orders/>} />
        <Route path="/Chefpro" element={<Chefpro/>} />
        <Route path="/Notification" element={<Notification/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Editpro" element={<Editpro/>} />
        <Route path="/Feedback" element={<FeedForm/>} />
        <Route path="/feed" element={<addFeedback/>} />
      </Routes>
    </Router>
    </div>
    </Provider>
  );
}
export default App;