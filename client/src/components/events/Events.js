import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Axios from 'axios'
export default class Events extends Component {

  render() {
    return (
       
      <div>
        <italic> Find online events that you love! </italic>
      <br></br>
        EVENT LIST
        <ul>
          <li>Event 1</li>
          <li>Event 2</li>
          <li>Event 3</li>
        </ul>
        <Link  to = "/Addevent">Create your own event! </Link>
      </div>
    )
  }

}