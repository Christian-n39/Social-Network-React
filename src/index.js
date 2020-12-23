import React from 'react';
import ReactDOM from 'react-dom';
import ReduxProvider from './redux';

import App from './App';
const root = document.getElementById('root');

ReactDOM.render(
  <ReduxProvider>
    <App />
  </ReduxProvider>
, root)