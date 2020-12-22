import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { AiOutlineMail, AiFillLock } from 'react-icons/ai';
import { BsFillLockFill } from 'react-icons/bs';
import './styles.css';

export default function RegisterForm() {
  const [user, setUser] = useState({ password: '', confirmPassword: '', email: '' })
  const handleChange = (key, value) => {
    setUser({ ...user, [key]: value })
  }
  return (
    <form className="RegisterForm">
      <div className="inputWrapper">
        <AiOutlineMail size='30px' color={user.email !== '' ? 'black' : '#8080807d'} />
        <input 
          placeholder='Email' 
          type='email' 
          onChange={e => handleChange('email', e.target.value)} 
          />
      </div>

      <div className="inputWrapper">
        <BsFillLockFill size='30px' color={user.password !== '' ? 'black' : '#8080807d'} />
        <input 
          placeholder='Password' 
          type='password' 
          onChange={e => handleChange('password', e.target.value)} 
          />
      </div>

      <div className="inputWrapper">
        <AiFillLock size='30px' color={user.confirmPassword !== '' ? 'black' : '#8080807d'} />
        <input 
          placeholder='Confirm password' 
          type='password' 
          onChange={e => handleChange('confirmPassword', e.target.value)} 
          />
      </div>

      <button type='submit'>Sign Up</button>
      <p style={{color: 'white'}} >Do you have an account?</p> 
      <br />
      <Link to='/' className='Link-toLogin' >Sign In</Link>
  </form>
  )
}