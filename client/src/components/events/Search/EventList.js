import React, { Component } from 'react'
import EventRow from './EventRow'

export default class EventList extends Component {
  
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.eventList.map(event => <EventRow key={event._id} event={event} />)}
        </div>
      </div>
    )
  }
}
