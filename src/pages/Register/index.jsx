import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUserAction } from '../../redux/actions';

import RegisterForm from '../../components/RegisterForm';
import { AiOutlineUserAdd } from 'react-icons/ai';
import './styles.css';
import { toast } from 'react-toastify';

const Register = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const setUser = token => dispatch(setUserAction(token))

  const handleSubmit = (userData) => {
    axios('/signup', {
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
    <section className="Register">
      <div className="Register-form">
        <div className="Register-icon-badge">
          <AiOutlineUserAdd size='40px' />
        </div>
        <h2 className="Register-title">Register</h2>
        <RegisterForm handleSubmit={handleSubmit} />
      </div>
    </section>
  )
}

export default Register;
