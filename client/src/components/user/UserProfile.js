//iriels START-----------------------------------------------------------------------------------------

import React, { Component } from 'react';
import './UserProfile.css';
import axios from 'axios';
import EventList from "../events/Search/EventList";


export default class UserProfile extends Component {

  state = {
    fullUserProfile: null,
    errorMessage: null,
  };


  getFullUserProfile() {
    axios.get(`/api/user/${this.props.user._id}`)
    .then(response => {
      this.setState({ fullUserProfile: response.data });
    })
    .catch(err => {
      this.setState({ errorMessage: err.message });
    });
  }  


  componentDidMount() {
    this.getFullUserProfile();
  }

  render() {
    const user = this.state.fullUserProfile;
    // console.log(`this is the render declared user = ${user} `)
    // console.log(`userProfile props user`, user)
    // console.log(`userevents`, this.state.events)
    if (!user) return <> Loading... </>;
    if (this.state.errorMessage) return <> Oh ho!... we had a problem ({this.state.errorMessage}) </>;
    
    const now = new Date();
    const pastEvents = user.eventsAttended.filter(event => new Date(event.date) < now);
    const upcomingEvents = user.eventsAttended.filter(event => new Date(event.date) >= now);
    const eventsCreated = user.eventsCreated;
    console.log({user, pastEvents, upcomingEvents, eventsCreated});
    return (
        <>
          <div className="profile-container-top">
              <h1 className="profile-name" >{user.username}</h1>
              <p className="aboutMe">{user.aboutMe}</p>
              <img className="ProfilePhoto" alt="" 
              style={{maxWidth:" 120px", borderRadius: "50%"}} 
                  src={user.profileImage}></img>
		
	        </div>
            <button className="btn-add-your-event" 
          >
          <a href="/Addevent">Add your own event</a></button>
          
          <div className="container profile-myEventList">

            <h2 className="row">Past Events</h2>
            <EventList eventList={pastEvents} />
            <hr/>
            <h2 className="row">Upcoming Events</h2>
            <EventList eventList={upcomingEvents} />
            <hr/>
            <h2 className="row">Events Created</h2>
            <EventList eventList={eventsCreated} />
          </div>
      </>

      
    )
  }

}
