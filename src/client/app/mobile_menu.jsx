import React from 'react';
import ReactDOM from 'react-dom';

import { IndexLink, Link, NavLink } from 'react-router-dom'; 

class MobileMenu extends React.Component{
  render(){
      return (
        <nav>
          <ul className="mobile_header">
            <li><NavLink exact to="/" activeClassName="mobile_active">Home<i className="fa fa-chevron-circle-down"></i></NavLink></li>
            <li><NavLink to="/services" activeClassName="mobile_active">Services<i className="fa fa-chevron-circle-down"></i></NavLink></li>
            <li><NavLink to="/about" activeClassName="mobile_active">About<i className="fa fa-chevron-circle-down"></i></NavLink></li>
            <li><NavLink to="/contact" activeClassName="mobile_active">Contact<i className="fa fa-chevron-circle-down"></i></NavLink></li>
            <li><NavLink to="/apps" activeClassName="mobile_active">Apps<i className="fa fa-chevron-circle-down"></i></NavLink></li>
          </ul>
        </nav>
      );
    }
}

export default MobileMenu;