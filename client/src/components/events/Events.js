import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import EventDetail from './EventDetail'
import './eventLists.css'

// export default function Events(props) {
//   return (
//     <div>
//         {props.events.map ( (event ) => {
//           return ( 
//             <div key= {event._id}>
//                 <p>
//                     {event.title}
//                 </p>
//                 <Link to = {`/events/${event._id}`}  > See More Information </Link>
                
//             {/* <EventDetail / */}
//             {/* <Link to exact path = "/event/:id" component = { EventDetail } */}
//             </div>
//           )
      
//       } ) } 
//     </div>
//   )
// }




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
       
      <div>


        <div class="createEvent">
              <Link  to = "/addevent"> Would you like to host your own event?  Click here!</Link>
        </div>


        {this.state.events.map ( (event, index) => {
          return ( 
            <div 
              key= {event._id}
              class="eventList"
              >

                <div class="eventListText eventListItemHeight">
                    <h4>
                      {event.title}
                    </h4>
                    <br />
                    Date :{event.date}
                    <br />
                    Starts at {event.startTime+'0'}
                </div>

                <Link to = {`/events/${event._id}`}  class="eventListLink eventListItemHeight"  > See More Information </Link>
                
            {/* <EventDetail / */}
            {/* <Link to exact path = "/event/:id" component = { EventDetail } */}
            </div>
          )
      
      } ) } 

        {/* EVENT LIST

        <ul>
          <li>Event 1</li>
          <li>Event 2</li>
          <li>Event 3</li>
        </ul> */}

        <div>
          <p>Not finding an event that peaks your interest? Why not host you're own?</p>
          <Link  to = "/addevent">Click here to create your own event!</Link>
        </div>


        <button><a href="/signup">sign up</a></button>
        {/* <Link to = "/createEvent">Create an event? </Link> */}
      </div>
    )
  }

}
       
     