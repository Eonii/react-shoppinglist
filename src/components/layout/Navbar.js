import React from 'react'
import { Link } from 'react-router-dom'
import Links from './Links'

const Navbar = () => {
    return(
        <nav className="nav-wrapper">
            <div className="container">
                <Link to='/' className="brand-logo left">tonjen</Link>
            </div>
        </nav>
    )
}

export default Navbar