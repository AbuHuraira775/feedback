import React from 'react'
import img1 from '../images/headphone1.png'
import img2 from '../images/headphone2.png'
import img3 from '../images/headphone3.png'
import img4 from '../images/headphone4.png'
import img5 from '../images/headphone5.png'
import './popular.css'
import '../index.css'
import BtnCom from './BtnCom'

function Popular() {
  return (
    <div className='popular section grid'>
        <div className="heading">
          <h2 className='h2 mb4'>Popular Headphones For You!</h2>
        </div>            

        <div className="allPopularHeadphones">
          <Headphones  h2="Wireless" p='This is the popular headphone ever.' img={img1}/>
          <Headphones  h2="Wireless" p='This is the popular headphone ever.' img={img2}/>
          <Headphones  h2="Wireless" p='This is the popular headphone ever.' img={img3}/>
          <Headphones  h2="Wireless" p='This is the popular headphone ever.' img={img4}/>
          <Headphones  h2="Wireless" p='This is the popular headphone ever.' img={img5}/>
        </div>
    </div>
  )
}

const Headphones=({h2,p,img})=>{
  return(
    <div className="section headphonesComponents">
      <div className="popularBackgroundImage">
        <img src={img} alt="" width='100px' height='300px' />
      </div>
      <div className="popularContent">
        <div className="popupatHeading">
          <h2>{h2}</h2>
        </div>
        <div className="popularDescription">
          <p>{p}</p>
        </div>
        <div className="popularreview flex mb2">
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        </div>
        <div className="popularCart">
          <BtnCom btnText="Add to Cart" />
        </div>
      </div>
    </div>
  )
}
export default Popular