import React from 'react';
import Divider from '@material-ui/core/Divider';
import image2 from '../../images/image2.jpg'
import image3 from '../../images/image3.jpg'
import image4 from '../../images/image4.jpg'


const Gallery = () => {
    return (
      <div className='gallery-container'>
          <h1>BOJO'S SEAFOOD KITCHEN</h1>
          <div className='gallery-container-item'>
              <img src={image2} alt='seafood'/>
              <p><h2>Welcome to Bojo's</h2><br></br><Divider variant="middle" />At Bojos we focus on bringing quality in every way possible to our community. Our entire staff is always focused on creating a family atmosphere while providing great service.</p>
          </div>
          <div className='gallery-container-item'>
            <img src={image3} alt='seafood'/>
            <p><h2>Services</h2><br></br>Outside of providing a great restaraunt experience, we also provide catering services. We also host parties and other events.</p>
          </div>
          <div className='gallery-container-item'>
            <img src={image4} alt='seafood'/>
            <p><h2>Food Quality</h2><br></br>Our food is cooked fresh to order and we use the best ingredients available to us. </p>
          </div>

      </div>
    );
  };
  
  export default Gallery;