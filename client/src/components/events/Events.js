import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import EventList from './Search/EventList'
import Searchbar from './Search/Searchbar';



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

 
           <div className="searchBar">

           <h2>Find your next Emeet Event</h2>
              <Searchbar 
                filter = {this.filterEvents}
                search = {this.state.search}
              />
            </div>
              
            
          
        
        <Link className="btn btn-primary" style={{margin: "0.5rem", color:"#5d576b", backgroundColor: "#99e1d9"}} to="/Addevent">Create your own event!</Link>
        <Link className="btn btn-default" to="/signup">sign up</Link>
        
        <EventList eventList={this.state.events} />
        
      </div>


       //<div class="createEvent">
      //        <Link  to = "/addevent"> Would you like to host your own event?  Click here!</Link>
       // </div>


    //     {this.state.events.map ( (event, index) => {
    //       return ( 
    //         // <div 
    //         //   key= {event._id}
    //         //   class="eventList"
    //         //   >

    //         //     <div class="eventListText eventListItemHeight">
    //         //         <h4>
    //         //           {event.title}
    //         //         </h4>
    //         //         <br />
    //         //         Date :{event.date}
    //         //         <br />
    //         //         Starts at {event.startTime+'0'}
    //         //     </div>

    //         //     <Link to = {`/events/${event._id}`}  class="eventListLink eventListItemHeight"  > See More Information </Link>
                
    //         // {/* <EventDetail / */}
    //         // {/* <Link to exact path = "/event/:id" component = { EventDetail } */}
    //         // </div>
    //       )
      
    //   } )
    //  } 

        //  EVENT LIST

        // <ul>
        //   <li>Event 1</li>
        //   <li>Event 2</li>
        //   <li>Event 3</li>
        // </ul> 

        // <div>
        //   <p>Not finding an event that peaks your interest? Why not host you're own?</p>
        //   <Link  to = "/addevent">Click here to create your own event!</Link>
        // </div>

      //     <div>
      //   <button><a href="/signup">sign up</a></button>
      //   {/* <Link to = "/createEvent">Create an event? </Link> */}
      // </div>
    )
  }

}
       
     