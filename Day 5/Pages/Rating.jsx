import React from 'react'
import Sidebar from '../Sample/Sidebar'
import Topbar from '../Sample/Topbar'
import {FaAward,FaUser} from 'react-icons/fa';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import {Box,Typography} from '@mui/material/';
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
function Rate() {
 

  const reviewContainerStyle = {
    marginLeft: '300px',
    marginRight: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom:'100px', 
  };
  const titleStyle = {
    fontSize: '40px',
    lineHeight: '0.3',
    margin: '100px',
    textAlign: 'justify',
    marginLeft: '0px',
  
  };
  const reviewStyle = {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '40px',
    marginBottom: '20px',
    backgroundColor: '#f7f7f7',
    width: '800px',
    height:'350px',
    boxShadow: '2px 4px 5px rgba(0.1, 0.1, 0.1, 0.1)',
   transition: 'box-shadow 0.7s ease',
  };

  return (
    <div>
      <Sidebar/>
      <Topbar/>
      <div className="dashboard-wrapper">
        <div style={titleStyle}>
        <h3>Chef Here</h3>
        </div>
      <div style={reviewContainerStyle}>
            <div style={reviewStyle}>
             <h1>Pramod Kumar</h1>
             <p>Delhi (Male,19 years)</p> 
             <br></br>
             <FaAward className="fresher-icon"/>
             <h4>5 years of Experience</h4>
             <br></br>
             <FaUser className="user"/>
             <h3>He is well Known for South Indian Cuisine</h3>
             <br></br>
      <Rating name="half-rating"  defaultValue={4.5} precision={0.5} readOnly/>
      <br></br><br></br>
      <Link to="/Bchef"><Button variant="contained">BOOK CHEF</Button></Link>
             </div>
            <div style={reviewStyle}>
             <h1>Sivanath</h1>
             <p>Maharastra (Male,23 years)</p> 
             <br></br>
             <FaAward className="fresher-icon"/>
             <h4>10 years of Experience</h4>
             <br></br>
             <FaUser className="user"/>
             <h3>He is well Known for all cuisine</h3>
             <br></br>
      <Rating name="half-rating"  defaultValue={3.5} precision={0.5} readOnly/>
      <br></br><br></br>
      <Link to="/Bchef"><Button variant="contained">BOOK CHEF</Button></Link>
             </div>
            <div style={reviewStyle}>
             <h1>Kunal</h1>
             <p>Delhi (Male,19 years)</p> 
             <br></br>
             <FaAward className="fresher-icon"/>
             <h4>5 years of Experience</h4>
             <br></br>
             <FaUser className="user"/>
             <h3>He is well Known for South Indian Cuisine</h3>
             <br></br>
      <Rating name="half-rating"  defaultValue={4.5} precision={0.5} readOnly/>
      <br></br><br></br>
      <Link to="/Bchef"><Button variant="contained">BOOK CHEF</Button></Link>
             </div>
            <div style={reviewStyle}>
             <h1>Malik kanna</h1>
             <p>Delhi (Male,19 years)</p> 
             <br></br>
             <FaAward className="fresher-icon"/>
             <h4>5 years of Experience</h4>
             <br></br>
             <FaUser className="user"/>
             <h3>He is well Known for South Indian Cuisine</h3>
             <br></br>
      <Rating name="half-rating"  defaultValue={4.5} precision={0.5} readOnly/>
      <br></br><br></br>
      <Link to="/Bchef"><Button variant="contained">BOOK CHEF</Button></Link>
             </div>
            <div style={reviewStyle}>
             <h1>Kabir Mah</h1>
             <p>Delhi (Male,19 years)</p> 
             <br></br>
             <FaAward className="fresher-icon"/>
             <h4>5 years of Experience</h4>
             <br></br>
             <FaUser className="user"/>
             <h3>He is well Known for South Indian Cuisine</h3>
             <br></br> 
      <Rating name="half-rating"  defaultValue={4.5} precision={0.5} readOnly/>
      <br></br><br></br>
      <Link to="/Bchef"><Button variant="contained">BOOK CHEF</Button></Link>
             </div>
      </div>
      <Box  
        sx={{ textAlign: "center", bgcolor: "#57575b", color: "color", p: 4,width:"1000px", }}
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
  );
};

export default Rate
