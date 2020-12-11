import React, { Component } from 'react'
import { Link } from 'react-router-dom'



export default class Events extends Component {
  render() {
    return (
      <div>
        EVENT LIST
        <ul>
          <li>Event 1</li>
          <li>Event 2</li>
          <li>Event 3</li>
        </ul>
        <Link to = "/createEvent">Create event</Link>
      </div>
    )
  }
}
