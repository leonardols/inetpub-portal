import React from 'react';
import ReactDOM from 'react-dom';

import Menu from './menu.jsx';
import Home from './home.jsx';
import Services from './services.jsx';
import About from './about.jsx';
import Contact from './contact.jsx';
import Footer from './footer.jsx'

import { Switch, Route } from 'react-router-dom'; 

class App extends React.Component {
  render () {
    return (
      <div className="panel">
        <Menu />
		<div className="content">
		  <Switch>
          	<Route exact path='/' component={Home}/>
          	<Route path='/services' component={Services}/>
          	<Route path="/about" component={About} />
          	<Route path="/contact" component={Contact} />
          </Switch>
		</div>
		<Footer />
	  </div>
    );
  }
}

export default App;