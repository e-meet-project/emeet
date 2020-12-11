import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Signup extends Component {
  render() {
    return (
      <div>
        {/* <button>LOGIN </button> */}

        <h1>Create your account</h1>

        <form onSubmit={this.handleSubmit}>
          <p>
            <label htmlFor="username">Username </label>
                <input 
                    type = "text"
                    name = "username"
                    id = "username"
                    // value = {this.state.name}
                    onChange = {this.handleChange}
                />
          </p>

          <p>
          <label htmlFor="password">Password </label>
              <input 
                  type = "text"
                  name = "password"
                  id = "password"
                  // value = {this.state.tagline}
                  onChange = {this.handleChange}
              />  
          </p>

          <p>
          <label htmlFor="profileImage">Profile Picture </label>
              <input 
                  type = "file"
                  name = "profileImage"
                  id = "profileImage"
                  // value = {this.state.tagline}
                  onChange = {this.handleChange}
              />  
          </p>
        </form>
        Already have an account <Link to = "/login">Login </Link>
    
      </div>
    )
  }
}
