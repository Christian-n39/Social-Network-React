import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/logo.jpg'
import './styles.css'
import { GiHamburgerMenu } from 'react-icons/gi'

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(true)
  const logout = () => {
    localStorage.removeItem('token');
    window.location='/'
  }
  const location = useLocation();
  const navbar = document.getElementById('Navbar')
  if(location.pathname.includes('posts') && navbar) {
    navbar.classList.value = 'none'
  } else if(navbar) { navbar.classList.value = 'Navbar' }
  return (
    <>
      <GiHamburgerMenu onClick={() => setShowMenu(!showMenu)} className="Burger-menu" size='50px' color='#ffffff' />
      {
        showMenu &&
        <section className='Navbar' id="Navbar" >
          <img className="Navbar-logo" src={logo} alt='Logo' height='80' width='215px' />
          <nav className="Navbar-nav">
            <Link to='/home' className="Navbar-nav-option background-blue" >
              <p>Home</p>
            </Link>
            <Link to='/profile'  className="Navbar-nav-option background-blue" >
              <p>Profile</p>
            </Link>
            <Link to='/create' className="Navbar-nav-option background-blue" >
              <p>Create a post</p>
            </Link>
          </nav>
          <div className="Logout" onClick={() => logout()} >
            <p>Logout</p>
          </div>
        </section>
      }
    </>
  )
}