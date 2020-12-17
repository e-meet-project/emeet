import React, { Component } from 'react'
import EventList from './EventList';
import EventRow from './EventRow';
import Searchbar from './Searchbar';
import axios from 'axios'
import '../../events/Search/search.css'


export default class FilteredEvents extends Component {
   
  state = {
    upcomingEvents: this.props.events,
    filteredEvents: [], //tbd
    search: '',
  }

//if props is filtered, then events display based off search results 
  filterEvents = event => {
    this.setState ( { search:event.target.value}, () => {

      const filtered = this.props.events.filter ( p => 
        p.description.toLowerCase().includes(this.state.search.toLowerCase() ) 
        || p.title.toLowerCase().includes(this.state.search.toLowerCase() ) 
        //check data? 
      );

      this.setState({
        filteredEvents: filtered
      })  
    })
  }


  render() {
    // console.log(`props`, this.props)
    // console.log(`at render`, this.state.upcomingEvents)
    // const events = this.state.upcomingEvents

    if ( this.state.search === '' )  {
      // console.log (`does it work?`) 
      return (
          <> 
           <div className="searchBar">

           <h2>Find your next Emeet Event</h2>
              <Searchbar 
                filter = {this.filterEvents}
                search = {this.state.search}
              />
            </div>
            <div class="searchResults">
              <p>
                <EventList 
                  eventList = {this.props.events} 
                />
            </p>
            </div>
          </>
      )
      } else {

        return (
          <div>
          
            <div className="searchBar">
            <h2>Find your next Emeet Event</h2>
              <Searchbar 
                filter = {this.filterEvents}
                search = {this.state.search}
              />
            </div>

            {/* <div>
              <h2>FilteredEvents</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, culpa debitis officiis dignissimos commodi assumenda exercitationem totam! Accusamus repellat sed animi, deserunt veniam est cum, voluptas sint ex a dolorem.</p>
            </div> */}

            <p>
              <EventList 
                eventList = {this.state.filteredEvents} 
              />
            </p>
          </div>
        )
    } //else statements 
  }
}