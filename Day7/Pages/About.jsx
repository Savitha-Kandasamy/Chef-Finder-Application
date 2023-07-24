import React from 'react'
import Topbar from '../Sample/Topbar'
import Sidebar from '../Sample/Sidebar'
import {Box,Typography} from '@mui/material/';
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
function About() {
  const titleStyle = {
    fontSize: '20px',
    lineHeight: '0.2',
    margin: '20px',
    textAlign: 'center',
    marginRight: '100px',
    marginTop:'190px',
  };
  const cardStyle = {
    display: 'flex',
    width: '1000px',
    height:'500px',
    margin: '0 auto',
    padding: '100px',
    border: '1px solid #ccc',
    borderRadius: '100px',
    backgroundColor: '#fff',
    marginBottom:'200px',
    marginTop:'6  0px',
    marginRight:'200px',
  };

  const cardContentStyle = {
padding: '0px',
    flex: '1',
  };
  
  const cardTitleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
  };
  
  const cardTextStyle = {
    fontSize: '16px',
    lineHeight: '1.5',
  };
  const cardImageContainerStyle = {
    marginRight: '60px',
    marginBottom:'800px',
  };
  
  const cardImageStyle = {
    width: '200px',
    height: '300px',
    borderRadius: '10px',
  };
  return (
    <div>
      <Sidebar/>
      <Topbar/>
      <div className="dashboard-wrapper">
        <div style={titleStyle}>
     <h1>ABOUT</h1>
     </div>
     <div style={cardStyle}>
     <div style={cardImageContainerStyle}>
        <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hlZnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="About" style={cardImageStyle} />
        </div>
      <div style={cardContentStyle}>
        <h3 style={cardTitleStyle}>Our Mission</h3>
        <p style={cardTextStyle}>At Chef Finder, our mission is to bring together passionate chefs and food enthusiasts, creating unforgettable culinary experiences that leave a lasting impression. We believe that everyone deserves the opportunity to enjoy high-quality, restaurant-level meals in the comfort of their homes or venues, and we are committed to making this a reality.</p>
        <br></br>
        <h3 style={cardTitleStyle}>Customer Support</h3>
        <p style={cardTextStyle}>Our dedicated customer support team is available to assist you throughout your journey on Chef Finder. Whether you have questions about the platform, need help with your booking, or require any other assistance, our team is ready to provide timely and helpful support.</p>
      </div>
      </div>
      <Box  
        sx={{ textAlign: "center", bgcolor: "#57575b", color: "color", p: 1,width:"2000px", }}
      >
        <Box
          sx={{
            my: 3,
            "& svg": {
              fontSize: "30px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          {/* icons */}
          <InstagramIcon />
          <TwitterIcon />
          <GitHubIcon />
          <YouTubeIcon />
        </Box>
        <Typography
          variant="h5"
          sx={{
            "@media (max-width:500px)": {
              fontSize: "3rem",
            },
          }}
        >
          All Rights Reserved &copy; Chefify
        </Typography>
      </Box>
    </div>
            </div>
  )
}

export default About
