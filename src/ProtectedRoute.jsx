import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ProtectedRoute({ children }) {
  const history = useHistory();
  const user = useSelector(state => state.user);
  if(!user) history.push('/');
  return children;
}