import Navbar from './navbar';
import './navside.css';
import Sidebar from './sidebar';
function Navside() {
  return (
    
    <div className="back">
    <div className="nav2">
  
    <Navbar/>
    <div className="main-content">
    <Sidebar/>
   
    </div> 
  {/* <Router>

      <Routes>
        <Route path="/" element={<LoginForm/>}/>
        <Route path="/Signup" element={<Signup/>}/>
      </Routes>
    </Router> */}
    </div>
    </div>
    
  );
}

export default Navside;