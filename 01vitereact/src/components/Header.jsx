import React from 'react';
import '../style/Style.css';

export const Header = () => {
  return (
    <header>
      <nav className='nav'>
      <img src="image/react-logo.png" className='nav-logo' alt="React-logo"/>
        <ul className='nav-item'>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}



