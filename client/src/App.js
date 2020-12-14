// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import { Route , Switch , Redirect, BrowserRouter } from "react-router-dom"

// import Index from './components/Index';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Navbar from './components/navbar/Navbar';
import Events from './components/events/Events';
import UserProfile from './components/user/UserProfile';
import Homepage from './components/Homepage';

class App extends Component {

  //auth added dec 11@11AM
  state = {
    user: this.props.user
  }

  setUser = user => {
    this.setState({
      user: user
    })
  }
  //=========================

  render() {
    console.log(`app.js user`, this.state.user)
    return (
      <div>
        <Navbar user={this.state.user} setUser={this.setUser} />

          <Switch>

          <Route exact path = "/" component = { Index } />
          <Route exact path = "/signup" component = { Signup } />
          <Route exact path = "/login" component = { Login } />
          <Route exact path = "/events" component = { Events } />
          <Route exact path = "/profile" component = { UserProfile } />
          <Route exact path = "/Addevent" component = {Addevent} />
          {/* <Route exact path = "/beers" component = { Beers } />
          <Route exact path = "/beers/:id" component = { BeerDetail } />
          <Route exact path = "/random-beer" component = { Randombeer } />
          <Route exact path = "/new-beer" component = { NewBeer } /> */}
            <Route exact path = "/" 
              render = { props =>  
              <Homepage 
                // username=  {this.state.user.username} 
                // setUser={this.setUser} {...props} 
                />}
              // user = {this.state.user} setUser={this.setUser}
              //component = { Homepage }
            />


            <Route exact path = "/signup" 
              render = { props => 
               <Signup setUser={this.setUser} {...props} />}
               //component = { Signup }
            />
            <Route exact path = "/login" 
              render={(props) => 
              <Login setUser={this.setUser} {...props}/>}
                // component = { Login } /> //replaced by render
            />
            
            <Route exact path = "/events" component = { Events } />

            <Route exact path = "/profile" 
              render={props => {
                  if (this.state.user) return <UserProfile {...props}/>
                  else return <Redirect to='/' /> 
                  // component = { UserProfile } /> // replaced by render
                  }}
            />

          </Switch>

      </div>
    )
  }
}


export default App;



// <Route exact path = "/beers" component = { Beers } />
// <Route exact path = "/beers/:id" component = { BeerDetail } />
// <Route exact path = "/random-beer" component = { Randombeer } />
// <Route exact path = "/new-beer" component = { NewBeer } /> 