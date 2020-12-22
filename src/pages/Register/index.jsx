import React from 'react';
import RegisterForm from '../../components/RegisterForm';
import { AiOutlineUserAdd } from 'react-icons/ai';
import './styles.css';

const Register = () => {

  return (
    <section className="Register">
      <div className="Register-form">
        <div className="Register-icon-badge">
          <AiOutlineUserAdd size='40px' />
        </div>
        <h2 className="Register-title">Register</h2>
        <RegisterForm />
      </div>
    </section>
  )
}

export default Register;
