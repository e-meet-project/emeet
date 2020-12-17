import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import EventList from './Search/EventList'
import Searchbar from './Search/Searchbar';



export default class Events extends Component {

  state = {
    events: []
  }

  componentDidMount() {
    axios.get('/api/events') 
      .then( response => {
        console.log( `api call`, response)
        this.setState({
          events: response.data
        })
      })
  }

  render() {
    // console.log(`event page`)
    // console.log(response)
    return (
       
      <div className="container">

 
           <div className="searchBar">

           <h2>Find your next Emeet Event</h2>
              <Searchbar 
                filter = {this.filterEvents}
                search = {this.state.search}
              />
            </div>
              
            
          
        
        <Link className="btn btn-primary" style={{margin: "0.5rem", color:"#5d576b", backgroundColor: "#99e1d9"}} to="/Addevent">Create your own event!</Link>
        <Link className="btn btn-default" to="/signup">sign up</Link>
        
        <EventList eventList={this.state.events} />
        
      </div>


    
    )
  }

}
       
     