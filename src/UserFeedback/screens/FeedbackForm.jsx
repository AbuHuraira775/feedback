import React, { useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import { useDispatch, useSelector } from 'react-redux'
import logo from '../../images/headphone4.png'
import { useNavigate } from 'react-router-dom'
function FeedbackForm() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const dispatch = useDispatch()
  const state = useSelector(state => state)

  const addFeedback = () => {
    alert('Your feedback is added successfully')
    const date = new Date().toLocaleDateString()
    dispatch({ type: "add-feedback", data: { name, description, date } })
    console.log("state : ", state)
    navigate('/')
  }
  return (
    <div className='addFeedbackForm'>
      <div className="addFeedbackOne">
        <div className="addFeedbackHeading">
          <h2 className="h2">Get In Touch With Us!</h2>
          <p className="p">Encourage Our Developers by providing them your feedbacks</p>
        </div>
      </div>

      <div className="addfeedbackTwo">
        <div className="addFeedbackLeft">
          <img src={logo} />
        </div>

        <div className="addfeedbackRight">
          <div className="addFeedbackField">
            <label>Write Your Name : </label>
            <Input type='text' place="Your Name" value={name} getData={(name) => setName(name)} />
          </div>

          <div className="addFeedbackField feedbackField">
            <label>Write Your Feedback Here : </label>
            <Input type='text' place="Type Your Feedback" value={description} getData={(description) => setDescription(description)}  className='feedbackField'/>
          </div>

          <div className="addFeedbackField">
            <Button btnFunc={addFeedback} btnText="Add Your Feedback" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default FeedbackForm