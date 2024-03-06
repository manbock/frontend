/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Header = () => {
  return (
    <header id='header' role="banner">
      <div className="header__inner">
        <div className="header__logo">
          <img alt="header__img" src='images/logo.svg'/>
          <h1>
            <a href="#">AI Store</a>
          </h1>
        </div>

        <nav className='header__nav'>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Search Plus</a></li>
          </ul>
        </nav>
        
      </div>
    </header>
  )
}

export default Header