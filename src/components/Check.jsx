import React from 'react'
import BtnCom from './BtnCom'
import { useNavigate } from 'react-router-dom'

function Check() {
    
    const navigate = useNavigate()
  
const goHome=()=>{
    navigate('/')
  }
    const goProduct=()=>{
      navigate('/products')
    }
    const goAddProduct=()=>{
      navigate('/products/:user/add-product')
    }
    const goLogin=()=>{
      navigate('/login')
    }
    const goLogout=()=>{
      navigate('/logout')
    }
  
  
  return (
    <div>
        
        <BtnCom btnFunction={goHome} btnText='Go to Home'/>
    <BtnCom btnFunction={goProduct} btnText='Go to Products'/>
    <BtnCom btnFunction={goAddProduct} btnText='Go to Add Products'/>
    <BtnCom btnFunction={goLogin} btnText='Go to Login'/>
    <BtnCom btnFunction={goLogout} btnText='Go to Log Out'/>
    </div>
  )
}

export default Check