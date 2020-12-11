import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import { Route , Switch } from "react-router-dom"

import Index from './components/Index';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Navbar from './components/navbar/Navbar';
import Events from './components/events/Events';
import UserProfile from './components/user/UserProfile';
import createEvent from './components/events/createEvent';

class App extends Component {
  render() {
    return (
      <div>
      <Navbar />
        <Switch>

          <Route exact path = "/" component = { Index } />
          <Route exact path = "/signup" component = { Signup } />
          <Route exact path = "/login" component = { Login } />
          <Route exact path = "/events" component = { Events } />
          <Route exact path = "/profile" component = { UserProfile } />
          <Route exact path = "/createEvent" component = {createEvent} />
          {/* <Route exact path = "/beers" component = { Beers } />
          <Route exact path = "/beers/:id" component = { BeerDetail } />
          <Route exact path = "/random-beer" component = { Randombeer } />
          <Route exact path = "/new-beer" component = { NewBeer } /> */}

      </Switch>

      </div>
    )
  }
}


export default App;
