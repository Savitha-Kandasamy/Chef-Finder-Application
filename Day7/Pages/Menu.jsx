import React from 'react'
import Topbar from '../Sample/Topbar'
import Sidebar from '../Sample/Sidebar'
import { Link } from 'react-router-dom';
function Menu() {
    const titleStyle = {
        fontSize: '40px',
        lineHeight: '1.5',
        margin: '20px',
        textAlign: 'justify',
        marginLeft: '500px',
      };
      const Products1 = [
        {
          name: "IDLY",
          image: "data:image/jpeg;base64,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",
         
        },
        {
          name: "DOSA",
          image: "https://c.pxhere.com/photos/61/6d/indian_vegetarian_food_hong_kong-786750.jpg!d",
         
        },
        {
          name: "AAPAM",
          image: "https://static.toiimg.com/photo/38976600.cms",
      
        },
        {
          name: "PONGAL",
          image: "https://images.news18.com/ibnlive/uploads/2022/08/rawa-pongal-1-166180296516x9.jpg",
          
        },
        {
          name: "OPPUTU",
          image: "https://st2.depositphotos.com/49005766/47441/i/600/depositphotos_474415058-stock-photo-puttu-raw-rice-puttu-arisi.jpg",
         
        },
        {
          name: "UPMA",
          image: "https://www.seema.com/wp-content/uploads/2022/08/Upma.jpg",
          
        },
        {
          name: "CHETINAD CHICKEN",
          image: "https://swatisani.net/kitchen/wp-content/uploads/2015/10/IMG_9350.jpg",
          
        },
        {
          name: "JIGARTHANDA",
          image: "https://asmallbite.com/wp-content/uploads/2019/05/Madurai-Special-Jil-Jil-Jigarthanda.jpg",
         
        },
  
      ];
     
     
  return (
    <div>
      <Sidebar/>
      <Topbar/>
      <div className="dashboard-wrapper">
        <br></br><br></br><br></br><br></br>
      <div>
            <h1 style={titleStyle}>SOUTH INDIAN CUISINE</h1>
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

export default Menu
