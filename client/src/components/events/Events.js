import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import EventList from './Search/EventList'


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
        <EventList eventList={this.state.events} />
        <Link className="btn btn-primary" to="/Addevent">Create your own event!  YESS</Link>
        <Link className="btn btn-default" to="/signup">sign up</Link>
      </div>
    )
  }

}
       
     