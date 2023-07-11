import './App.css';
import {BrowserRouter as Router, Route,Routes}from 'react-router-dom';
import Login from './pages/login';
import RegistrationForm from './pages/rform';
//import Navside from './components/navside';
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
        {/* <Route exact path="/" component={Home} />
        <Route path="/about" component={About} /> */}
        <Route path="/Sidebar" component={Sidebar} />
      
      </Routes>
    </Router>
    </div>
  );
}

export default App;