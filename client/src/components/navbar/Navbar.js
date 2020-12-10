import React, { Component } from 'react'
import './navbar.css';
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <div class="navbar">
        navbar! 
        <Link to = "/"><button>Go to homepage</button></Link>
        <Link to = "/events"><button>All Events</button></Link>
        <Link to = "/login"><button>Login</button></Link>
        <Link to = "/signup"><button>Sign Up</button></Link>
        <Link to = "/profile"><button>User Profile</button></Link>
      </div>
    )
  }
}
