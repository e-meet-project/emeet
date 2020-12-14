// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'

// import Index from './components/Index';

import { Route , Switch , Redirect, BrowserRouter } from "react-router-dom"
import Addevent from './components/events/Addevent';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Navbar from './components/navbar/Navbar';
import Events from './components/events/Events';
import UserProfile from './components/user/UserProfile';
import Homepage from './components/Homepage';
import EventDetail from './components/events/EventDetail';


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
    // console.log(`App.js user`, this.state.user)
    return (
      <div>
        <Navbar user={this.state.user} setUser={this.setUser} />

          <Switch>

          {/* <Route exact path = "/" component = {Homepage } />
          {/* <Route exact path = "/signup" component = { Signup } /> */}
          {/* <Route exact path = "/login" component = { Login } /> */}
          {/* <Route exact path = "/events" component = { Events } />
          <Route exact path = "/profile" component = { UserProfile } /> */} 
          {/* <Route exact path = "/Addevent" component = {Addevent} /> */}
          {/* <Route exact path = "/beers" component = { Beers } />
          <Route exact path = "/beers/:id" component = { BeerDetail } />
          <Route exact path = "/random-beer" component = { Randombeer } />
          <Route exact path = "/new-beer" component = { NewBeer } /> */}
            <Route exact path = "/" 
              render = { props =>  
              <Homepage 
                />}
            />
            

            <Route exact path = "/signup" 
              render = { props => 
               <Signup setUser={this.setUser} {...props} />}
               //component = { Signup }
            />
            <Route exact path = "/login" 
              render={props => 
              <Login setUser={this.setUser} {...props}/>}
                // component = { Login } /> //replaced by render
            />
            
            <Route exact path = "/events" component = { Events } />

            <Route exact path = "/profile" 
              render={props => {
                  if (this.state.user) return <UserProfile {...props} user={this.state.user}/>
                  else return <Redirect to='/UserProfile' /> 
                  // component = { UserProfile } /> // replaced by render
                  }}
            />

            <Route exact path = "/events/:id" 
              render = { props => 
                <EventDetail
                // user={this.state.user} 
                {...props} 
                />}
      
              // component = { EventDetail }
            />
              <Route exact path = "/Addevent" 
              render = { props => 
               <Addevent user={this.state.user} {...props} />}
              
            />

          </Switch>

      </div>
    )
  }
}


export default App;



        // <Route?
        //   exact
        //   path='/projects/:id'
        //   render={ props => 
        //     <ProjectDetails user={this.state.user} {...props} />}
        // />

// <Route exact path = "/beers" component = { Beers } />
// <Route exact path = "/beers/:id" component = { BeerDetail } />
// <Route exact path = "/random-beer" component = { Randombeer } />
// <Route exact path = "/new-beer" component = { NewBeer } /> 