import React from 'react'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'
function Logout() {
  const navigate = useNavigate()
  const logout = ()=>{
    localStorage.clear()
    alert('your are successfully logout')
    navigate('/login')
  }
  return (
    <div className='logout'>
        <Button btnFunc={logout} btnText="Logout"/>
            </div>
  )
}

export default Logout