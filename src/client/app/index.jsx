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

/*
<BrowserRouter>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="services" component={Services} />
      <Route path="about" component={About} />
      <Route path="contact" component={Contact} />
    </Route>
  </BrowserRouter>
*/