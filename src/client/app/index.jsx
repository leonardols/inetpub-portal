import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';

import { HashRouter } from 'react-router-dom'; 

import App from './app.jsx';

ReactDOM.render((
  <HashRouter basename="/">	
    <App/>
  </HashRouter>
  ), document.getElementById('app')
);
