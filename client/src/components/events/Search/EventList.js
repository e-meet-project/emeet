import React, { Component } from 'react'
import EventRow from './EventRow'

export default class EventList extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.eventList.map(event => 
            <EventRow 
              key={event._id} 
              event={event} 
              />
            )}
        </div>
      </div>
    )
  }


  // version below does not allow for the card display of bootstrap
  // displayRows = () => {
  //   return (
  //       this.props.eventList.map(event => {
  //           return (
  //               <EventRow 
  //                   title = {event.title}
  //                   idKey = {event.idKey}
  //                   description = {event.description}
  //                   id = {event._id}
  //                   date = {event.date}
  //               />
  //             )
  //         })
  //     )
  // }

  // render() {
  //   return (
  //     <div>
  //       {/* its the list! more list! */}
  //       { this.displayRows() }
  //     </div>
  //   )
  // }
}
