import React from 'react';
import Navbar from '../../components/Navbar';
import './styles.css'

export default function Layout({ children }) {
  return (
  <div className="Layout" >  
    <Navbar />
    { children }
  </div>
  )
}