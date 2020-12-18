import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import EventList from './Search/EventList'
import Searchbar from './Search/Searchbar';
import FilteredEvents from './Search/FilteredEvents'
import './Search/search.css'



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
       
      <div className="filteredResults">

      <div className="eventHeader">
        <h2>Find your next Emeet </h2>
             {/* <div className="searchBar"> */}
  
             {/* <h2>Find your next Emeet Event</h2> */}
           
          <div className="allEvents"> 
            <div>
              <Link className="allEventsButton" 
                // style={ { color: "#18191a", backgroundColor: "#99e1d9"} } 
                // margin: "0.5rem", color:"#5d576b"
                to="/Addevent">
               Or create your own!
              </Link>
            </div>
  
          </div>
      </div>

        {/* <EventList eventList={this.state.events} /> */}

        <div className="container">
          <FilteredEvents
                events = {this.state.events}
          />
        </div>
        



      </div>


     
    )
  }

}
       
// {/* <Searchbar 
//       filter = {this.filterEvents}
//       search = {this.state.search}
//     />
//   </div>
//      */}