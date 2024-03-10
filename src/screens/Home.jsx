import React from 'react'
import { useSelector } from 'react-redux'
import BtnCom from '../components/BtnCom'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Check from '../components/Check'
import Popular from '../components/Popula'

function Home() {

  const navigate = useNavigate()
  const state = useSelector(state=> state)
  console.log('state at home : ',state)

  const productPageNavigation=()=>{
    navigate('/products')
  }
  return (
    <div className='container'>
      <Hero />
      <Popular />
     {/* <Check /> */}
    </div>
  )
}

export default Home