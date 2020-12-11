import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { login } from '../../services/auth';
import './auth.css';


export default class Login extends Component {

  state = {
    username: '',
    password: '',
    message: ''
  };

  handleSubmit = event => {
    event.preventDefault();

    const { username, password } = this.state;

    login(username, password).then(data => {
      if (data.message) {
        this.setState({
          message: data.message,
          username: '',
          password: ''
        });
      } else {
        // successfully logged in
        // update the state for the parent component
        this.props.setUser(data);
        this.props.history.push('/');
      }
    });
  };


  render() {
    return (
      <div>
        <button>LOGIN </button>

        <h1>Please log in</h1>
        <p class="error">
          {this.state.message}
        </p>

        <form onSubmit={this.handleSubmit}>
          <p>
            <label htmlFor="username">Username </label>
                <input 
                    type = "text"
                    name = "username"
                    id = "username"
                    // value = {this.state.username}
                    onChange = {this.handleChange}
                />
          </p>

            <p>
          <label htmlFor="password">Password </label>
              <input 
                  type = "password"
                  name = "password"
                  id = "password"
                  // value = {this.state.password}
                  onChange = {this.handleChange}
              />  
          </p>
          <button type='submit'>Login</button>
        </form>
        Need to create an account ?  <Link to = "/signup">Sign up</Link>
    
      </div>
    )
  }
}
