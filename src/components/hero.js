import React from 'react'
import image1 from '../images/image1.jpg'


const Hero = (props) => {
    return (
        <div class="top-display">
            <div class="top-text bye" id="content-1">
                <h1 class="primary-head">{props.section}</h1>
		    </div>
            <h1><img src={image1} alt="" class="ABimage" /></h1>
        </div>
    )
}

export default Hero