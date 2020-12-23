import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUserAction } from '../../redux/actions';

import './styles.css'
import { toast } from 'react-toastify';
import { AiOutlineUser } from 'react-icons/ai';
import LoginForm from '../../components/LoginForm'


export default function Login() {
  const history = useHistory()
  const dispatch = useDispatch()
  const setUser = token => dispatch(setUserAction(token))
  const handleSubmit = (userData) => {
    axios('/signin', {
      method: 'POST',
      data: userData
    })
      .then(response => {
        const token = response.data.token
        setUser(token)
        history.push('/home')
      })
      .catch(err => toast.info(err.response.data.message))
  }
  const loggedUser = useSelector(state => state.user);
  if(loggedUser) history.push('/home');
  return (
    <section className="Login">
      <div className="Login-form">
        <div className="Login-icon-badge">
          <AiOutlineUser size='40px' />
        </div>
        <h2 className="Login-title">Login</h2>
        <LoginForm handleSubmit={handleSubmit} />
      </div>
    </section>
  )
}