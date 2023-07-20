import React from 'react'
import Topbar from '../Sample/Topbar'
import Sidebar from '../Sample/Sidebar'
import { Link } from 'react-router-dom';
function North() {
    const titleStyle = {
        fontSize: '40px',
        lineHeight: '1.5',
        margin: '20px',
        textAlign: 'justify',
        marginLeft: '500px',
      };
      const Products1 = [
        {
          name: "ALOO PARATA",
          image: "https://cdn.cdnparenting.com/articles/2018/12/12122643/1211153146-H-1024x700.webp",
        
        },
        {
          name: "CHENNA",
          image: "https://c.ndtvimg.com/2020-12/qa7va13g_chole_625x300_30_December_20.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675",
          
        },
        {
          name: "CHOLA POORI",
          image: "https://assets.traveltriangle.com/blog/wp-content/uploads/2015/08/The-best-street-food-in-Delhi-%E2%80%94-Chole-Bhature.jpg",
          
        },
        {
          name: "PANEER BUTTER MASALA",
          image: "https://img.buzzfeed.com/tasty-app-user-assets-prod-us-east-1/recipes/b2485ea520bf4e63bfec3a4195cf96be.jpeg?resize=1200:*&output-format=jpg&output-quality=auto",
          
        },
        {
          name: "VEG THAALI",
          image: "https://authenticindianfood.com/images/blog/thumbnails/202009/img_kor6mPFmGBU_0909094328.jpg",
         
        },
        {
          name: "KHEER",
          image: "https://www.lacademie.com/wp-content/uploads/2022/05/rabri-indian.jpg",
        },
        {
          name: "DAHI POORI",
          image: "https://img.freepik.com/premium-photo/dahi-puri-is-snack-popular-state-maharashtra-india-this-dish-comes-chat-category-served-round-plate-colourful-wooden-background-selective-focus_466689-69118.jpg?w=2000",
          
        },
        {
          name: "DAL MAKHANI",
          image: "https://images.aws.nestle.recipes/original/4c9aa68c71815ec2a542513268ea25cf_Dal_Makhani_-_Plating.jpg",
         
        },
  
      ];
  return (
    <div>
      <Sidebar/>
      <Topbar/>
      <div className="dashboard-wrapper">
        <br></br><br></br><br></br><br></br>
      <div>
            <h1 style={titleStyle}>NORTH INDIAN CUISINE</h1>
            <div className='product-container'>
            {Products1.map((item, index) => (
            <div className="product-item" key={index}>
              <img src={item.image} alt={item.name} height={50} width={50}/>
              <h3 className="heading">{item.name}</h3>
              <div>    
                <Link to='/Booking'> <button className="b">Select Menu</button></Link>
              </div>
            </div>
            ))}
          </div>
          <br/>
         
</div>
      </div>
    </div>
  )
}

export default North
