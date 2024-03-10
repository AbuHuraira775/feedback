import React, { useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import logo from '../../images/headphone4.png'
import { useNavigate } from 'react-router-dom'
function Login() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const storeDate = () => {
    localStorage.setItem('user', name)
    alert(name)
    setName('')
    navigate('/add-feedback')
  }
  return (
    <div className='loginForm'>

      <div className="loginLeft">
        <div className="logingHeading">
          <h2 className="h2">Welcome back</h2>
          <p className="p">Loging in again it takes few seconds</p>
        </div>

        <div className="loginSection">
          <div className="loginField">
            <label>Name</label>
            <Input type='text' place="username" val={name} getData={(name) => setName(name)} />
          </div>

          <div className="loginField">
            <label>Password</label>
            <Input type='password' place="username" val={password} getData={(password) => setPassword(password)} />

          </div>

          <div className="loginField">
            <Button btnText="Login" btnFunc={storeDate} />

          </div>
        </div>
      </div>

      <div className="loginRight">
        <img src={logo} />
      </div>

    </div>
  )
}

export default Login