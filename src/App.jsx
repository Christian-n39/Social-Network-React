import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';
import Layout from './containers/Layout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import CreatePost from './pages/CreatePost';


export default function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/register' component={Register} />
          <Layout>
            <Route exact path='/home' component={Home} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/create' component={CreatePost} />
          </Layout>
        </Switch>
    </BrowserRouter>
  )
}