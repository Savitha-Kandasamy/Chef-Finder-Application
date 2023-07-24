import React from 'react'
import Topbar from '../Sample/Topbar'
import Sidebar from '../Sample/Sidebar'
import { Link } from 'react-router-dom';
function Chinese() {
    const titleStyle = {
        fontSize: '40px',
        lineHeight: '1.5',
        margin: '20px',
        textAlign: 'justify',
        marginLeft: '550px',
      };
      const Products1 = [
        {
          name: "NOODLES",
          image: "https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/2020-02/Chilli-Garlic-Noodles-Veg.jpg",
        
        },
        {
          name: "MOOMOS",
          image: "https://publish.purewow.net/wp-content/uploads/sites/2/2021/12/traditional-chinese-food-fb.jpg",
          
        },
        {
          name: "MANJURIAN",
          image: "https://cdn.doordash.com/media/photosV2/69b30456-c052-4503-b0bb-db90290c9e8d-retina-large.jpeg",
          
        },
        {
          name: "FRIED RICE",
          image: "https://minuterice.com/wp-content/uploads/2019/03/CLASSIC-FRIED-RICE.jpg",
          
        },
        {
          name: "TOFU BOWL",
          image: "https://i.ytimg.com/vi/XORa7QtjRi8/maxresdefault.jpg",
         
        },
        {
          name: "HAKKA NOODLES",
          image: "https://c.ndtvimg.com/2020-01/tlauod6_chilli-chicken_625x300_21_January_20.jpg",
        },
        {
          name: "HOT BOWL",
          image: "https://archive.shine.cn/newsimage/2017/08/04/020170804183425.jpg",
          
        },
        {
          name: "TANGYUAN",
          image: "https://farm8.staticflickr.com/7426/16447747331_bb1df4bf8e_h.jpg",
         
        },
  
      ];
  return (
    <div>
      <Sidebar/>
      <Topbar/>
      <div className="dashboard-wrapper">
        <br></br><br></br><br></br><br></br>
      <div>
            <h1 style={titleStyle}>CHINESE CUISINE</h1>
            <div className='product-container'>
            {Products1.map((item, index) => (
            <div className="product-item" key={index}>
              <img src={item.image} alt={item.name} height={50} width={50}/>
              <h3 className="heading">{item.name}</h3>
              
            </div>
            ))}
          </div>
          <br/>
         
</div>
      </div>
    </div>
  )
}

export default Chinese
