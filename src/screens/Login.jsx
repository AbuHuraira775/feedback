import React, { useState } from 'react'
import BtnCom from '../components/BtnCom'
import { useNavigate } from 'react-router-dom'
import Check from '../components/Check';
import InpCom from '../components/InpCom'
import { Link } from 'react-router-dom';
import loginImage from '../images/login.png'
function Login() {
  const navigate = useNavigate()
    const [user,setUser] = useState('')
    const [pass,setPass] = useState('')
    const addUser = ()=>{
      localStorage.clear()
      localStorage.setItem('user',user)
      alert(localStorage.getItem('user'))
        console.log('user : ',user)
        setUser('')
        setPass('')
    }


  return (
    <div className='login mb2'>
      <div className="loginLeft">
          <img src={loginImage} alt="" />
      </div>

      <div className="section loginRight">
        <div className="loginBox">
          <div className="loginHeading">
            <h2  className='h2'>Welcome Back</h2>
          </div>
          <div className="loginWithGoogle flex w100 center mb2">
          <i class="fa-brands fa-google-plus-g" style={{color: '#B197FC'}}></i>
            <p>Continue with Google</p>
          </div>

          <div className=" loginForm grid w100 ">
          <div className="inputField  mb2">
            <i class="fa-regular fa-user"></i>
            <InpCom getData={(user)=>setUser(user)} val={user} place='Username' type='text'/>
            </div>

            <div className="inputField mb2">
            <i class="fa-regular fa-user"></i>
            <InpCom getData={(pass)=>setPass(pass)} val={pass} place='Password' type='password'/>
            </div>

            <div className="loginRemember mb2">
              <div className="remeberCheckBox flex">

              <input type="checkbox"  />
              <p>Remember Me</p>
              </div>

              <div className="rememberForgot">
                <Link to='/'>Forgot Password</Link>
              </div>
            </div>

            <div className="loginBtn">
              <button onClick={addUser} className='w100'>Login</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Login