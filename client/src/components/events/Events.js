import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import EventDetail from './EventDetail'
import './eventLists.css'

// I don't know what this is below. Probably can delete, esp. as it was commented out.
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
       
      <div>
      <h1>Kara's</h1>

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


      {/* iriels ================================================== */}
        <button><a href="/signup">sign up</a></button>
        {/* <Link to = "/createEvent">Create an event? </Link> */}
      <div className="container">
      <h1>
        Iriels
      </h1>
        <EventList eventList={this.state.events} />
        <Link className="btn btn-primary" to="/Addevent">Create your own event!  YESS</Link>
        <Link className="btn btn-default" to="/signup">sign up</Link>
      </div>
      </div>
    )
  }

}
       
     