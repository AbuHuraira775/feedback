import React from 'react'
import BtnCom from './BtnCom'
import heroImage1 from '../images/heroImage1.png'
function Hero() {
  return (
    <div className='section hero flex'>
        <div className="heroContent ">
            <div className="heroHeading">
                <h1 className='h1'>Grab Upro 50% Off On Selected Headphones</h1>
            </div>
            <diiv className="heroContentBtn">
                <BtnCom btnText='Buy Now'/>
            </diiv>
        </div>

        <div className="heroImage">
            <img src={heroImage1} alt="" />
        </div>
    </div>
  )
}

export default Hero