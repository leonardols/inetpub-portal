import React from 'react';
import ReactDOM from 'react-dom';

import { IndexLink, Link, NavLink } from 'react-router-dom'; 

class Menu extends React.Component{
  render(){
      return (
        <nav>
          <ul className="header">
            <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/services" activeClassName="active">Services</NavLink></li>
            <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
            <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
            <li><NavLink to="/apps" activeClassName="active">Apps</NavLink></li>
          </ul>
        </nav>

      );
    }
}

export default Menu;