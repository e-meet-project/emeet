import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { signup } from '../services/auth'


export default class Signup extends Component {

  //authentication - added dec 11 @ 11
  state = {
    username: '',
    password: '',
    profileImage: '',
    message: ''
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { username, password, profileImage } = this.state;

    signup(username, password, profileImage).then(data => {
      if (data.message) {
        this.setState({
          message: data.message,
          username: '',
          password: '',
          profileImage: ''
        });
      } else {
        this.props.setUser(data);
        this.props.history.push('/signup'); //was to projects, now to signup?
      }
    });
  };



  render() {
    return (
      <div>

        <h1>Create your account</h1>

        <form onSubmit={this.handleSubmit}>
          <Form.Group>
          {/* <p> */}
            <Form.Label htmlFor="username">Username </Form.Label>
                <Form.Control 
                    type = "text"
                    name = "username"
                    id = "username"
                    value = {this.state.username}
                    onChange = {this.handleChange}
                />
          {/* </p> */}
          </Form.Group>

          <Form.Group>
            <p>
            <Form.Label htmlFor="password">Password </Form.Label>
                <Form.Control 
                    type = "password"
                    name = "password"
                    id = "password"
                    value = {this.state.password}
                    onChange = {this.handleChange}
                />  
            </p>
          </Form.Group>

          <Form.Group>
            <p>
            <Form.Label htmlFor="profileImage">Profile Picture </Form.Label>
                <Form.Control 
                    type = "file"
                    name = "profileImage"
                    id = "profileImage"
                    value = {this.state.profileImage}
                    onChange = {this.handleChange}
                />  
            </p>
          </Form.Group>
          
          {this.state.message && (
            <Alert variant='danger'>{this.state.message}</Alert>
          )}
          
          <Button type='submit' >
            Sign up 
          </Button>
        
        </form>
        
        Already have an account <Link to = "/login">Login </Link>
    
      </div>
    )
  }
}
