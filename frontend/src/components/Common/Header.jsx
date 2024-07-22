import React from 'react'
import mainImage from '../../assets/img/mainimage.png';
import logo from '../../assets/img/logo.png'

const Header = () => {
  return (
    <header>
      <div className="main-image">
        <img src={mainImage} alt="mainimage" />
      </div>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="tagline">
        <p>To eat is a necessity,</p>
        <h1>but to eat</h1>
        <p>intelligently is an art</p>
      </div>
    </header>
  )
}

export default Header