import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SingupPage from './SingupPage';
import LoginPage from './LoginPage';

//import {BrowserRouter as Link} from "react-router-dom";
class HomePage extends Component {
  render() {
    
    return (
   <Router>
    <div>
      <ul>
        <li>
          <Link to="/singup">SingupPage</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>      
      </ul>
    </div>
    </Router>
    );
  }
}
export default HomePage;