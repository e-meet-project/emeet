import React, { Component } from 'react';
import './UserProfile.css';
// import { userProfileData } from '../';
import Events from '../events/Events';
import axios from 'axios';



export default class UserProfile extends Component {

  state = {
    user: null
  };


  getUserDetails = () => {
    console.log(this.props)
  
      axios.get(`/api/user/${this.props.user._id}`)
        .then(response => {
          console.log(response)
          this.setState({
          user: response.data
        })
      })
      console.log(`inside getUserDetails: ${this.state.user}`)
  }

  componentDidMount() {
    this.getUserDetails();
    console.log(`this is the compDM ${this.state.user}`)
  }

  // componentDidUpdate(prevProps) {
  //   console.log('current props:', this.props.match.params.id)
  //   console.log('previous props:', prevProps.match.params.id)
  //   if (prevProps.match.params.id !== this.props.match.params.id) {
  //     this.getUserDetails();
  //     console.log(`compDU ${this.state.user}`)
  //   }
  // }


  render() {
    const user = this.state.user;
    console.log(`this is the render declared user = ${user} `)
  

    if (!user) return <> Loading... </>;

    return (
        <>
          <div className="profile-container-top">
            
            <div>
            {this.state.user.eventsAttended.map ((eventAttended, index) => {

              return ( 
                  <div key= {eventAttended._id}>
                    <p>
                      {/* {eventAttended.title} */}
                    </p>
                  </div>
                )
                }
            )
            } 


              <h1 className="profile-name">{this.state.user.username}</h1>
              <p className="aboutMe"> here is a small description about me</p>
            </div>
            <div className="aboutMe-image">
                  <div id="D_memberProfileAside" className="docSection">
                      <img className="ProfilePhoto" alt="" style={{maxWidth:" 140px"}} 
                      src="{this.state.user.profileImage}"></img>
                  </div>
            </div>
		
	          </div>


          <nav className="nav-events">Events</nav>          
            
              <div className="navbar-eventsLInks">
                <a href="#pastEvents">Past Events</a>
                <a href="#upcoming">Upcoming</a>
                <a href="#eventsYouOwn">Events you own</a>
              </div>
            
          
          <button className="btn-add-your-event" 
          style={{backgroundColor: "#99e1d9", width: "80%"}}> <a href="event/form">Add your own event</a></button>

          <div className="profile-myEventList">
								
          {this.state.user.eventsAttended.map ((eventAttended, index) => {

            return ( 
                <div key= {eventAttended._id}>
                 
                <div className="event-list-small">
                
                  <div className="event-info">
                    <img src="{eventAttended.image}" alt="image2"></img>
                    
                  </div>
                  <div className="event-description">
                    <h4 className="event-title">
                      <a className="link-to-event" href="{event._id}">{eventAttended.title}</a>
                    </h4>
                    <h4 className="description">{eventAttended.description}</h4>
                      <h4 className="date-time">{eventAttended.date}</h4>
                  </div>
              </div>
                </div>
              )
              }
            )
            }








            
              {/* <div className="event-list-small" >
                
                <div className="event-info">
                  <a className="" title="event._id" href="/"><img src="" alt="image2"></img></a>
                </div>
                <div className="event-description margin-bottom">
                  <h4 className="event-title">
                    <a className="link-to-event" href="/"> </a>

                  </h4>
                    <h4 className="date-time">show the date and time of event</h4>
                </div>
            </div> */}

{/* 
            <div className="event-list-small" >
                
                  <div className="event-info">
                    <a className="" title="event._id" href="/"><img src="https://secure.meetupstatic.com/photos/event/4/5/4/2/thumb_478517730.jpeg" alt="image2"></img></a>
                  </div>
                  <div className="event-description margin-bottom">
                    <h4 className="event-title">
                      <a className="link-to-event" href="/"> event #3</a>
                    </h4>
                      <h4 className="date-time">show the date and time of event</h4>
                  </div>
              </div>

              <div className="event-list-small" >
                
                  <div className="event-info">
                    <a className="" title="event._id" href="/"><img src="https://secure.meetupstatic.com/photos/event/4/5/4/2/thumb_478517730.jpeg" alt="image2"></img></a>
                  </div>
                  <div className="event-description margin-bottom">
                    <h4 className="event-title">
                      <a className="link-to-event" href="/"> event #4</a>
                    </h4>
                      <h4 className="date-time">show the date and time of event</h4>
                  </div>
              </div>
              
              <div className="event-list-small" >
                
                  <div className="event-info">
                    <a className="4" title="event.Id" href="https://www.meetup.com/Ironhack-Berlin/"><img src="https://secure.meetupstatic.com/photos/event/4/5/4/2/thumb_478517730.jpeg" alt="image3"></img></a>
                  </div>
                <div className="event-description margin-bottom">
                  <h4 className="event-title">
                    <a className="link-to-event" href="https://www.meetup.com/Ironhack-Berlin/">
                       Ironhack Berlin</a>
                  </h4>
                  <h4 className="date-time">show the date and time of event</h4>

                </div>
              </div>
            
   */}
          </div>







        </>

      
    )
  }

}