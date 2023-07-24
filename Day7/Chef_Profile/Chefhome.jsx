import React from 'react'
import Sidec from './Sidec';
import Topc from './Topc';
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Typography } from "@mui/material";

function Chome() { 
      const flipCardData = [
        { id: 1, imageUrl: 'https://im.rediff.com/getahead/2017/sep/06chefvikaskhanna.jpg' ,  description: 'Famous for his expertise in robust Indian and Asian flavours, Chef Khanna has managed to revolutionise the Indian cuisine on international platforms with his signature dish',},
        { id: 2, imageUrl: 'https://images.squarespace-cdn.com/content/v1/55493f50e4b082cc498fdb53/1563982759292-IJ84W3GAWOS2ZY1FFU24/Chef+Sanjeev+Kapoor+%284+of+7%29.jpg?format=1000w', description:'A great proponent of Rajasthani cuisine, he s celebrated its diverse dishes across his 170-odd books, as well as on his food channel. According to him, the philosophy behind Rajasthani food, which has long held royal associations, can be summarised in a single world: ' ,},
        { id: 3, imageUrl: 'https://www.simplylifeindia.com/uploads/8/1/1/5/8115412/4598131_orig.jpg', description:'Chef Kunal has an in-depth understanding of regional Indian cuisine having learnt it from the best in the industry during his early career. ', },
        // Add more flip card data as needed
      ];
      const partnerLogosContainerStyle = {
        marginTop: '5px',
        marginLeft: '400px',
        display: 'flex',
        marginRight:'400px',
       padding:'70px',
      };
      const partnerLogoStyle = {
        width: '150px',
        height: '80px',
        margin: '15px',
      };
      const styles = {
        container: {
          textAlign: 'center',
          padding: '-50px',
        },
        cardList1: {
          marginTop:'50px',
            display: 'flex',
            marginLeft:'100px',
            justifyContent: 'center',
          marginRight:'100px',
          },
        
            card1: {
              backgroundColor:'grey',
              width: '300px',
              height:'270px',
              marginLeft:'80px',
               border: '2px grey',
               borderRadius: '5px',
            },
            
            image1: {
              marginLeft:'0px',
              width: '300px',
              height: '270px',
              objectFit: 'cover',
            
            },
    
      }
      const Card1= ({  imageUrl1, isActive }) => {
        return (
          <div style={{ ...styles.card1, backgroundColor: isActive ? 'lightblue' : 'white' }}>
            <img src={imageUrl1} alt='image' style={styles.image1} />
          </div>
        );
      };
      const cards1= [
        {
          imageUrl1:'https://res.cloudinary.com/ddv2oseei/image/upload/v1689259525/q_vikk5u.jpg',
           },
       
        {
          imageUrl1:'https://res.cloudinary.com/ddv2oseei/image/upload/v1689259642/l_uwj4ck.jpg',
            },
        {
          imageUrl1:'https://res.cloudinary.com/ddv2oseei/image/upload/v1689259707/c_mqnbut.jpg',
        },
        
       
      ];
      const titleStyle = {
        fontSize: '40px',
        lineHeight: '1.5',
        textAlign: 'center',
        marginRight:'160px',
        fontFamily:'Times',
      };

  return (
    <div>
      <Sidec/>
      <Topc/>
      <div className="dashboard-wrapper" >
      <div className='textStyle'>
      <img src="https://res.cloudinary.com/ddv2oseei/image/upload/v1689319380/propic_iblcll.jpg" alt="img" width="1370vh" height="550vh" />
      <br/>
      <br/>
      <p className="image-text">Top chef of this year</p>
     <br/>
     <br/>  
     <br/>
      {/* Render flip cards */}
      <div className="flip-card-container">
        {flipCardData.map((flipCard) => (
          <div key={flipCard.id} className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={flipCard.imageUrl} alt={flipCard.title} />
              </div>
              <div className="flip-card-back">
                <h3>{flipCard.title}</h3>
                <p>{flipCard.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div> 
      <br>
      </br>
      <br></br>

      <div>
      <h1 style={titleStyle}>Our Partners</h1>
          <div style={partnerLogosContainerStyle}>
          <br/>
          <img src={'https://fareshare.org.uk/wp-content/uploads/2017/03/FS-logo-small-applications-RGB.jpg'} alt="Partner Logo" style={partnerLogoStyle} className="partnerLogo" />
          <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHotmhg8gfwuqCCo5_d_qzgrBuwUHBsjKgfuAaIYseP_cBIdWaNBr-nGO6qnHIRXOa_i0&usqp=CAU'} alt="Partner Logo" style={partnerLogoStyle} className="partnerLogo" />
          <img src={'https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/2560px-Swiggy_logo.svg.png'} alt="Partner Logo" style={partnerLogoStyle} className="partnerLogo" />
          <img src={'https://i.pinimg.com/originals/84/e9/1c/84e91ca33d424450bc97d20522677345.jpg'} alt="Partner Logo" style={partnerLogoStyle} className="partnerLogo" />
          <img src={'https://www.marketing91.com/wp-content/uploads/2017/11/SWOT-analysis-of-Zomato-3.jpg'} alt="Partner Logo" style={partnerLogoStyle} className="partnerLogo" />
          <img src={'https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/images/supply/partner-training/1628575858610-5b0ae4.png'} alt="Partner Logo" style={partnerLogoStyle} className="partnerLogo" />
          <img src={'https://2.bp.blogspot.com/-c_RApHEl2Yo/U6FzqC1GtXI/AAAAAAAAASU/GjN1mJSS5io/s1600/State-Bank-Of-India1.jpg'} alt="Partner Logo" style={partnerLogoStyle} className="partnerLogo" />

          </div>
</div>
<div className="div1">
<div style={styles.cardList1}>
    {cards1.map((card1, index) => (
      <Card1
        key={index}
        imageUrl1={card1.imageUrl1}
      />
    ))}
  </div>
  <br></br><br></br>
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

export default Chome
