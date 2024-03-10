import React from 'react'
import { Link, BrowserRouter as Router, Routes } from 'react-router-dom'

function DesktopNav() {
    const user = localStorage.getItem('user')
    return (
        <div className="navbar-desktop-links flex">
            <Router>
                {/* <Routes> */}
                    <ul className='flex'>
                        <li><Link path='/'> Home</Link></li>
                        <li><Link path='/add-feedback'> Add Feedbacks</Link></li>
                        <li>{user ? <Link path='/login'> Login</Link> : <Link to='/logout'> Logout</Link>}</li>
                    </ul>
                {/* </Routes> */}
            </Router>

        </div>
    )
}

export default DesktopNav