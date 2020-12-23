import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.css'
import { FaUserAlt } from 'react-icons/fa';
import { BsFillLockFill } from 'react-icons/bs';

export default function LoginForm({ handleSubmit }) {
  const [user, setUser] = useState({ email: '', password: ''})

  const handleChange = (key, value) => {
    setUser({ ...user, [key]: value })
  }
  const submit = (e) => {
    e.preventDefault();
    handleSubmit(user)
  }
  return (
    <form onSubmit={e => submit(e)} className="LoginForm">
      <div className="inputWrapper">
        <FaUserAlt size='30px' color={ user.email !== ''? 'black' : '#8080807d' } />
        <input 
          placeholder='Email' 
          type='email' 
          name='email'
          onChange={e => handleChange('email', e.target.value)} 
          />
      </div>

      <div className="inputWrapper">
        <BsFillLockFill size='30px' color={user.password !== '' ? 'black' : '#8080807d'} />
        <input 
          placeholder='Password' 
          type='password'
          name='password'
          onChange={e => handleChange('password', e.target.value)} 
          />
      </div>

      <button type='submit'>Sign In</button>
      <p style={{color: 'white'}} >Don´t you have an account?</p> 
      <br />
      <Link className='Link-toRegister' to='/register'>Sign Up</Link>
    </form>
  )
}