import React from 'react'
import airbnb_logo from '../images/airbnb-logo.png';
import '../Style/style.css';


export const Navbar = () => {
  return (
    <nav> 
        <img src={airbnb_logo} alt="airbnb-Logo" className='nav-logo'/>
    </nav>
  )
}
