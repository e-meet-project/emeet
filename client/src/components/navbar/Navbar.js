import React, { Component } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <Link className="navbar-link" to="/">
        <img src={'https://res.cloudinary.com/irieljm/image/upload/c_scale,w_56/v1607633242/Emeet/Emeet_logo_desx4h.png'} 
        alt="emmet_logo"></img>
        </Link>
        <Link className="navbar-link" to = "/">Go to homepage</Link>

        <div>
          <Link className="navbar-link" to = "/events">All Events</Link>
          <Link className="navbar-link" to = "/login">Login</Link>
          <Link className="navbar-link" to = "/signup">Sign Up</Link>
          <Link className="navbar-link" to = "/profile">User Profile</Link>
        </div>
      </div>
    )
  }
}
