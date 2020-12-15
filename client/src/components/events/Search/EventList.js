import React, { Component } from 'react'
import EventRow from './EventRow'

export default class EventList extends Component {
  
  displayRows = () => {
    return (
        this.props.eventList.map(event => {
            return (
                <EventRow 
                    title = {event.title}
                    idKey = {event.idKey}
                    description = {event.description}
                />
              )
          })
      )
  }

  render() {
    return (
      <div>
        its the list! more list!
        { this.displayRows() }
      </div>
    )
  }
}
