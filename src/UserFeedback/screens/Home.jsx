import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import logo from '../../images/headphone4.png'
import Button from '../components/Button';
function Home() {

  const state = useSelector(state => state)
  const navigate = useNavigate()
  const logout = () => {
    localStorage.clear()
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  return (


    <div className='feedbackHome'>

      <div className="feedbackHero">
        <div className="heroOne">
          <div className="heroText">
            <div className="heroHeading heading">
              <h1 className='h1'>Bset Services Provided by the Cosmos is Here!</h1>
            </div>
            <div className="heroButton">
              <Button btnText="Check Feedback" />
            </div>
          </div>
        </div>

        <div className="heroTwo">
          <img src={logo} />
        </div>
      </div>
      <div className="sliderParent">


        <div className="feedbackOne">
          <div className="feedbackHeading">
            <h2 className="h2">{`Our Testinomials (${state.length})`}</h2>
          </div>
        </div>
        <Slider {...settings} className='slider feedbackTwo'>

          {/* <div className="allFeedbacks"> */}
          {
            state.map((feedback, ind) => {
              return (
                <div className="singleFeedback" key={ind}>

                  {/* <div className="feedbackLeftQoute"></div>
                  <div className="feedbackRightQoute"></div> */}
                  <div className="singleFeedbackOne">
                    <div className="feedbackDescription">
                      <p className="p">{feedback.description}</p>
                    </div>
                  </div>
                  <div className="singleFeedbackTwo">
                    <div className="feedbackImage">
                      <img src={logo} className='imageOfFeedback' />
                    </div>

                    <div className="feedbackNameWithDate">
                      <div className="feedbackName">
                        <h2 className="h2">{feedback.name}</h2>
                      </div>
                      <div className="feedbackDate">
                        <p className="p">{feedback.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
          {/* </div> */}

        </Slider>
      </div>
    </div>
  )
}

export default Home