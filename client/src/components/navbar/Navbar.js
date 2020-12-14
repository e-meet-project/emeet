import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom'
import { logout } from '../../services/auth';


// import React from 'react'

const handleLogout = props => {
  console.log(props);
  logout().then(() => {
    props.setUser(null);
  });
};


export default function Navbar(props) {
  
  return (
    <div>
      <div className="navbar">

      <Link className="navbar-link" to="/">
        <img 
          src={'https://res.cloudinary.com/irieljm/image/upload/c_scale,w_56/v1607633242/Emeet/Emeet_logo_desx4h.png'} 
          alt="e-meet_logo">
        </img>
      </Link>

      <Link className="navbar-link" to = "/">Go to homepage</Link>

        <div>
          <Link className="navbar-link" to = "/events">All Events</Link>

          {props.user ? (
            <>
              <Link className="navbar-link" to='/' 
                onClick={ () => handleLogout (props) }>
                Logout
              </Link>

              <Link className="navbar-link" to = "/profile">User Profile</Link>
            </>
          ) : ( 
            <>
              <Link className="navbar-link" to = "/login">Login</Link>

              <Link className="navbar-link" to = "/signup">Sign Up</Link>
            </>
          )}

          {/* <Link className="navbar-link" to = "/login">Login</Link>

          <Link className="navbar-link" to = "/signup">Sign Up</Link> */}

          {/* <Link className="navbar-link" to='/' 
              onClick={ () => handleLogout (props) }>
              Logout
            </Link>

          <Link className="navbar-link" to = "/profile">User Profile</Link> */}
          
        </div>
      </div>
    </div>
  )
}