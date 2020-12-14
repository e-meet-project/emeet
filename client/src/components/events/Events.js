import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Events extends Component {

  state = {
    events: []
  }

  componentDidMount() {
    axios.get('/api/events') 
      .then( response => {
        console.log( `api call`, response)
      })
  }

  render() {
    console.log(`event page`)
    // console.log(response)
    return (
      <div>
        EVENT LIST
        
        <ul>
          <li>Event 1</li>
          <li>Event 2</li>
          <li>Event 3</li>
        </ul>
        {/* <Link to = "/createEvent">Create an event? </Link> */}
      </div>
    )
  }
}

