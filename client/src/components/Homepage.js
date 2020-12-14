import React, { Component } from 'react'
// import Navbar from './navbar/Navbar'
import App from '../App'; 


export default class Homepage extends React.Component {


  render() {
    // console.log(this.props.username)
    return (
      <div>
        index, now called homepage!
        <p>
          <a href="/signup"> Signup</a>
        </p>
        
        <p>
          <a href="/login"> Login</a>
        </p>


        <p>
          Welcome {this.props.username} !
        </p>

      </div>
    )
  }
}
