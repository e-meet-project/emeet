import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { signup } from '../../services/auth'
import './auth.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Form, Button, Alert, Container } from 'react-bootstrap';


// client/src/services/auth.js <--- relative path

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

    signup(username, password, profileImage).then ( data => {
      // console.log(`data`, data)
      if (data.message) {
        this.setState({
          message: data.message,
          username: '',
          password: '',
          profileImage: ''
        });
      } else {
        this.props.setUser(data);
        this.props.history.push('/'); //was to projects, now to signup?
      }
    });
  };


  render() {
    console.log(this.props)

    return (
      <div class="centerAuth">

        <Container>
          <div className="boxOn">

            <div>
              <h1>Create your account</h1>
            
              <p className="error">
                  {this.state.message}
              </p>
            </div>
    
    
            <Form onSubmit={this.handleSubmit}>
            <Form.Group>
                <Form.Label  htmlFor="username">Username </Form.Label>
                  <Form.Control 
                        type = "text"
                        name = "username"
                        id = "username"
                        value = {this.state.username}
                        onChange = {this.handleChange}
                    />
              </Form.Group>
    
    
              <Form.Group>
                <Form.Group htmlFor="password">Password </Form.Group>
                  <Form.Control 
                        type = "password"
                        name = "password"
                        id = "password"
                        value = {this.state.password}
                        onChange = {this.handleChange}
                    />  
                </Form.Group>
    
                <Form.Group>
{/* 
                    <Form.File 
                        id="custom-file"
                        type="file"
                        class="custom-file-input"
                        label
                        value = {this.state.profileImage}
                        onChange = {this.handleChange}
                    />  

                <Form.Label  
                  htmlFor="profileImage"
                  for="custom-file" 
                  class="custom-file-label"
                  >
                    Profile Picture 2 
                  </Form.Label> */}
                {/* <Form.Label  for="custom-file" class="custom-file-label">

                </Form.Label> */}

                  {/* <Form> */}
                    {/* <Form.File
                      id="custom-file"
                      type="file"
                      class="custom-file-input"
                      lablel="Upload a profile picture"
                      custom
                    />
                    <label for="custom-file" class="custom-file-label">

                    </label> */}
                  {/* </Form> */}
                  <br />
                <div className="profileImageUpload">
                  <Form.Label  htmlFor="profileImage">Uplodad a Profile Picture? </Form.Label>
              
                      <div class="profileImageUploadContainer">
                        <Form.Control 
                            type = "file"
                            name = "profileImage"
                            id = "profileImage"
                            value = {this.state.profileImage}
                            onChange = {this.handleChange}
                            class="profileImageUpload"
                        />  
                      </div>
                </div>

                </Form.Group>          
              
              <Button type='submit' >
                Sign up 
              </Button>
            
            </Form>
              <div className="signupLoginSwitch">
                Already have an account <Link to = "/login">Login </Link>
              </div>
          </div>
        </Container>
      </div>
    )
  }
}

//form using bootstap
// <Form.Group>

//   <Form.Label htmlFor="username">Username </Form.Label>
//       <Form.Control 
//           type = "text"
//           name = "username"
//           id = "username"
//           value = {this.state.username}
//           onChange = {this.handleChange}
//       />

// </Form.Group>

// <Form.Group>
//   <p>
//   <Form.Label htmlFor="password">Password </Form.Label>
//       <Form.Control 
//           type = "password"
//           name = "password"
//           id = "password"
//           value = {this.state.password}
//           onChange = {this.handleChange}
//       />  
//   </p>
// </Form.Group>

// <Form.Group>
//   <p>
//   <Form.Label htmlFor="profileImage">Profile Picture </Form.Label>
//       <Form.Control 
//           type = "file"
//           name = "profileImage"
//           id = "profileImage"
//           value = {this.state.profileImage}
//           onChange = {this.handleChange}
//       />  
//   </p>
// </Form.Group>

// {this.state.message && (
//   <Alert variant='danger'>{this.state.message}</Alert>
// )}

// <Button type='submit' >
//   Sign up 
// </Button>

// {this.state.message && (
//   <Alert variant='danger'>{this.state.message}</Alert>
// )}