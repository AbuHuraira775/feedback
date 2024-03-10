import React from 'react'
import { Link, BrowserRouter as Router, Routes } from 'react-router-dom'

function MobileNav() {
    return (
        // <div className="mbileMenuNavbar">
            <Router>
                {/* <Routes> */}
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/add-feedback'>Add Feedback</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                {/* </Routes> */}
            </Router>
        // </div>
    )
}

export default MobileNav