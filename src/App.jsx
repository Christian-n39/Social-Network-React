import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserAction } from './redux/actions';

import './index.css';
import Layout from './containers/Layout';
import ProtectedRoute from './ProtectedRoute';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import CreatePost from './pages/CreatePost';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const dispatch = useDispatch();
  const setUser = payload => dispatch(setUserAction(payload));
  const token = localStorage.getItem('token');
  if(token) {setUser(token)};
  return (
    <>
    <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/register' component={Register} />
          <ProtectedRoute>
            <Layout>
              <Route exact path='/home' component={Home} />
              <Route exact path='/profile' component={Profile} />
              <Route exact path='/create' component={CreatePost} />
            </Layout>
          </ProtectedRoute>
        </Switch>
    </BrowserRouter>
    <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
   </> 
  )
}