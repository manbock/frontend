/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'

const Header = () => {
  const location = useRouter();

  return (
    <header id='header' role="banner">
      <div className="header__inner">
        <div className="header__logo">
          <img alt="header__img" src='images/logo.svg'/>
          <h1>
            <Link className='logo_title' href="/">AI Store</Link>
          </h1>
        </div>

        <nav className='header__nav'>
          <ul>
            <li className={location.pathname === "/" ? 'active' : ''}>
              <Link  href={'/'}>Home</Link>
              <span className="link_bar"></span>
            </li>
            <li className={location.pathname === "/imgSearch" ? 'active' : ''}>
              <Link href={'/imgSearch'}>Search Plus</Link>
              <span className="link_bar"></span>
            </li>
          </ul>
        </nav>
        
      </div>
    </header>
  )
}

export default Header