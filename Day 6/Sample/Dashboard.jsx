import React from 'react'
import Topbar from './Topbar'
import Sidebar from './Sidebar'
import './Sample.css'
//import {FaFacebook, FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa';

function Dashboard() {
  // const footerStyle = {
  //       backgroundColor: 'black',
  //       color: 'white',
  //       padding: '9px',
  //       display: 'flex',
  //       justifyContent: 'space-between',
  //       alignItems: 'center',
  //       position: 'absolute',
  //       bottom: 0,
  //       left: 0,
  //       right: 0,
  //       zIndex: 9999,
  //       marginLeft:'240px',
  //       marginTop:'10px',
  //     };
  //     const socialIconStyle = {
  //           fontSize: '24px',
  //           marginRight: '10px',
  //           color: '#50afbf',
  //         };
  return (
    <div>
      <Topbar/>
      <Sidebar/>  
      <div className="dashboard-wrapper" style={{ height: 'calc(100vh - 500vh)' }}>

      {/* <footer style={footerStyle}>
      
     <div>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
           <FaFacebook style={socialIconStyle} />
         </a>
         <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
           <FaTwitter style={socialIconStyle} />
         </a>
         <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
           <FaInstagram style={socialIconStyle} />
     </a>
         <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
           <FaLinkedin style={socialIconStyle} />
         </a>
       </div>
     </footer> */}
      </div>
    </div>
  )
}

export default Dashboard