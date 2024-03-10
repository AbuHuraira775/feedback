import React from 'react'
import BtnCom from '../components/BtnCom'
import { useNavigate } from 'react-router-dom'
import Check from '../components/Check'

function Logout() {
    const navigate= useNavigate()
    

  
const logoutUser=()=>{
    localStorage.removeItem('user')
}
  return (
    <div>
        
        <h2>this is logout page</h2>
        <BtnCom btnFunction={logoutUser} btnText='Logout'/>
 <Check />

    </div>
  )
}

export default Logout