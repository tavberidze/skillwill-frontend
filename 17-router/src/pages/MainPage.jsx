import React from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/img.jpg'

const MainPage = () => {
  return (
    <div>
        <Link to={'/about'}>About</Link>
        <h1>Amélie Poulain</h1>
        <img src={img} alt="amelie" />
    </div>
  )
}

export default MainPage