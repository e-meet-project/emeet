import React, { Component } from 'react'
// import Navbar from './navbar/Navbar'
import App from '../App'; 

// export default function Homepage (props) {

export default class Homepage extends React.Component {
  

  render() {

    return (
      <div>
        index, now called homepage!
        <p>
          <a href="/events">See all events</a>
        </p>
        <p>
          <button><a href="/signup"> Signup</a></button> <button><a href="/login"> Login</a></button>
        </p>
        
        <p>
          Welcome {this.props.username} !
        </p>

      </div>
    )
  }
}
