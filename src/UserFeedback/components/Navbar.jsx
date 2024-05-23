import React from 'react'
import { Link, BrowserRouter as Router, Routes } from 'react-router-dom';

function Navbar() {
  const user = localStorage.getItem('user')

  return (
    <div className='container navbar flex '>

        <div className="logo">
          <h3>This is Logo</h3>
        </div>
        <div className="navbar-desktop-links flex">

                <ul className='flex'>
                    <li><Link to='/'> Home</Link></li>
                    <li><Link to='/add-feedback'> Add Feedbacks</Link></li>
                    <li>{user ? <Link to='/login'> Login</Link> : <Link to='/logout'> Logout</Link>}</li>
                </ul>
            </div>

    </div>
  )
}

export default Navbar