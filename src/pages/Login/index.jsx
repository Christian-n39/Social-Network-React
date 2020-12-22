import React from 'react';

import './styles.css'
import { AiOutlineUser } from 'react-icons/ai';
import LoginForm from '../../components/LoginForm'


export default function Login() {
  return (
    <section className="Login">
      <div className="Login-form">
        <div className="Login-icon-badge">
          <AiOutlineUser size='40px' />
        </div>
        <h2 className="Login-title">Login</h2>
        <LoginForm />
      </div>
    </section>
  )
}