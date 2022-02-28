import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'


const Nav = () => {
    return (
        <div id="navContainer">
         <nav id="navBar">
             <Link to="/about" className="navLinks">About</Link>
             <Link to="/services" className="navLinks">Services</Link>
             <Link to="/news" className="navLinks">News</Link>
             <Link to="/contact" className="navLinks">Contact</Link>
         </nav>
        </div>
    )
}

export default Nav
