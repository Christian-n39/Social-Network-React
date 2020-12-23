import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { AiOutlineMail, AiFillLock } from 'react-icons/ai';
import { BsFillLockFill } from 'react-icons/bs';
import './styles.css';

export default function RegisterForm({ handleSubmit }) {
  const [user, setUser] = useState({ name: '', password: '', confirmPassword: '', email: '' })
  const handleChange = (key, value) => {
    setUser({ ...user, [key]: value })
  }
  const submit = (e) => {
    e.preventDefault();
    handleSubmit(user)
  }
  return (
    <form onSubmit={e => submit(e)} className="RegisterForm">
      <div className="inputWrapper">
        <FaUserAlt size='30px' color={user.name !== '' ? 'black' : '#8080807d'} />
        <input 
          placeholder='Name'
          type='name' 
          onChange={e => handleChange('name', e.target.value)} 
          />
      </div>
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