// import { Alert } from 'bootstrap';
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { login } from '../../services/auth';
import './auth.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Form, Button, Alert, Container } from 'react-bootstrap';


export default class Login extends Component {

  state = {
    username: '',
    password: '',
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

    const { username, password } = this.state;

    // console.log (`state before  `, this.state)

    login ( username , password ).then ( data => {
      console.log(`login data`, data)

      if (data.message) {
        this.setState({
          message: data.message,
          username: '',
          password: ''
        });

      } else {
        // successfully logged in
        // update the state for the parent component
        console.log(`before the setUser`)
        console.log(this.props)
        this.props.setUser(data);
        console.log(`after the setUser`)
        this.props.history.push('/');
      }
    });
  };


  render (){
    return (
      <div class="centerAuth">

        <Container>
          <div class="boxOn">
            <div>
              <h1>
                Please log in
              </h1>
      
          
              <p className="error">
                {this.state.message}
              </p>
            </div>
    
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Label htmlFor='username'>Username: </Form.Label>
                <Form.Control 
                  size="lg"
                  type = "text"
                  name = "username"
                  id = "username"
                  value = {this.state.username}
                  onChange = {this.handleChange}
                />
              </Form.Group>
    
              <Form.Group>
                <Form.Label htmlFor="password">Password </Form.Label>
                    <Form.Control 
                        size="lg"
                        type = "password"
                        name = "password"
                        id = "password"
                        value = {this.state.password}
                        onChange = {this.handleChange}
                    />  
                </Form.Group>
    
                <Button variant="primary" type='submit'>Login</Button>
    
            </Form>
            <div className="signupLoginSwitch">
              Need to create an account?  <Link to = "/signup">Sign up</Link>
            </div>
            </div>
        </Container>
    
      </div>
    )
  }
}
