import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Login extends Component {
  render() {
    return (
      <div>
        <button>LOGIN </button>

        <h1>Please log in</h1>

        <form onSubmit={this.handleSubmit}>
          <p>
            <label htmlFor="name">Username </label>
                <input 
                    type = "text"
                    name = "name"
                    id = "name"
                    // value = {this.state.name}
                    onChange = {this.handleChange}
                />
          </p>

            <p>
          <label htmlFor="tagline">Password </label>
              <input 
                  type = "text"
                  name = "tagline"
                  id = "tagline"
                  // value = {this.state.tagline}
                  onChange = {this.handleChange}
              />  
          </p>
        </form>
        Need to create an account ?  <Link to = "/signup">Sign up</Link>
    
      </div>
    )
  }
}
