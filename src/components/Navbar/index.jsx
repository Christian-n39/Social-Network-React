import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'
export default function Navbar() {
  return (
    <section className='Navbar' >
      <img className="Navbar-logo" src='https://christiancompean.now.sh/SocialMERNG_logo.png' alt='Logo' height='110' width='215px' />
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
    </section>
  )
}