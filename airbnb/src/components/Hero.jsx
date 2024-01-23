import React from 'react';
import '../Style/style.css';
import photogrid from '../images/photo-grid.png'

export const Hero = () => {
  return (
    <section className='hero'>
        <img src={photogrid} alt="photoGrid" className='hero-photo' />
        <h1 className='hero-header'>Online Experiences</h1>
        <p className='hero-text'>Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
    </section>
  )
}
