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
                    id = {event._id}
                    date = {event.date}
                />
              )
          })
      )
  }

  render() {
    return (
      <div>
        {/* its the list! more list! */}
        { this.displayRows() }
      </div>
    )
  }
} 

// Kara's version was selected as the eventRow uses the var passed in the function.

// in Kara's, she has the display row function called in the render section
// in Iriels, she has the map directly in the render:

// render() {
//   return (
//     <div className="container">
//       <div className="row">
//         {this.props.eventList.map(event => 
//           <EventRow 
//             key={event._id} 
//             event={event} 
//           />)}

//       </div>
//     </div>
//   )
// }
// }