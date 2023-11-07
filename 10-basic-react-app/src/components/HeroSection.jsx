import React from 'react'
import './HeroSection.css'

const HeroSection = () => {
  return (
    <div className='hero-container'>
        <div className="hero-container-content">
            <h1 className='hero-container-heading'> How can we help? </h1>
            <input className='hero-container-input' type="text" placeholder='Search'/>
        </div>
    </div>
  )
}

export default HeroSection