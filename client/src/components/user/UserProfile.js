import React, { Component } from 'react';
import './UserProfile.css';
import Events from '../events/Events';
import axios from 'axios';



export default class UserProfile extends Component {

  // state = {
  //   user: User
  // }

  // getData = () => {
  //   const id = this.props.match.params.id;
  //     axios.get(`/api/user/${id}`)
  //       .then(response => {
  //         console.log(response);
  //         this.setState({
  //         username: response.data,
          
  //       })
  //     })
  //     .catch(err => {
  //       console.log(err.response)
  //       if (err.response.status === 404) {
  //         this.setState({
  //           error: 'error'
  //         })
  //       }
  //     })
  // }


  render() {
    return (
        <>
          <div className="profile-container-top">
            
            <div className="aboutMe">
              <h1 className="profile-name">username</h1>
              <p className="aboutMe"> here is a small description about me</p>
            </div>
            <div className="aboutMe-image">

                <div class="rcol">
                  <div id="D_memberProfileAside" class="docSection padding-bottom">

                    <div id="image_142315192" class="profileImageContainer rounded-corner-top ">
                      <span id="member-profile-photo"><a href="https://secure.meetupstatic.com/photos/member/e/8/5/a/member_191219482.jpeg" target="_new">
                      <img class="D_memberProfilePhoto photo big-preview-photo" alt="" style={{maxWidth:" 140px"}} src="https://secure.meetupstatic.com/photos/member/e/8/5/a/member_191219482.jpeg" data-thumb-src="https://secure.meetupstatic.com/photos/member/e/8/5/a/thumb_191219482.jpeg"></img></a></span>
                    
                    </div>

                  </div>
            
                </div>
          
              </div>
		
	          </div>


          <nav className="nav-events">Events</nav>          
            
              <div className="navbar-eventsLInks">
                <a href="#pastEvents">Past Events</a>
                <a href="#upcoming">Upcoming</a>
                <a href="#eventsYouOwn">Events you own</a>
              </div>
            
          
          <button className="btn-add-your-event" style={{backgroundColor: "#99e1d9", width: "80%"}}> Add your own event</button>



          <div className="profile-myEventList">
							
								
              <div className="event-list-small" data-chapterid="23228190">
                
                  <div className="figureset-figure">
                    <a className="" title="event._id" href="/"><img src="https://secure.meetupstatic.com/photos/event/4/5/4/2/thumb_478517730.jpeg" alt="image2"></img></a>
                  </div>
                  <div class="figureset-description margin-bottom">
                    <h4 className="flush--bottom">
                      <a class="link-to-event" href="/"> event #1</a>
                    </h4>
                      <h4 class="date-time">show the date and time of event</h4>
                  </div>
              </div>
            
              <div className="event-list-small" data-chapterid="23228190">
                
                <div className="figureset-figure">
                  <a className="" title="event._id" href="/"><img src="https://secure.meetupstatic.com/photos/event/4/5/4/2/thumb_478517730.jpeg" alt="image2"></img></a>
                </div>
                <div class="figureset-description margin-bottom">
                  <h4 className="flush--bottom">
                    <a class="link-to-event" href="/"> event #2</a>
                  </h4>
                    <h4 class="date-time">show the date and time of event</h4>
                </div>
            </div>

            <div className="event-list-small" data-chapterid="23228190">
                
                  <div className="figureset-figure">
                    <a className="" title="event._id" href="/"><img src="https://secure.meetupstatic.com/photos/event/4/5/4/2/thumb_478517730.jpeg" alt="image2"></img></a>
                  </div>
                  <div class="figureset-description margin-bottom">
                    <h4 className="flush--bottom">
                      <a className="link-to-event" href="/"> event #3</a>
                    </h4>
                      <h4 className="date-time">show the date and time of event</h4>
                  </div>
              </div>

              <div className="event-list-small" data-chapterid="23228190">
                
                  <div className="figureset-figure">
                    <a className="" title="event._id" href="/"><img src="https://secure.meetupstatic.com/photos/event/4/5/4/2/thumb_478517730.jpeg" alt="image2"></img></a>
                  </div>
                  <div class="figureset-description margin-bottom">
                    <h4 className="flush--bottom">
                      <a className="link-to-event" href="/"> event #4</a>
                    </h4>
                      <h4 className="date-time">show the date and time of event</h4>
                  </div>
              </div>
              
              <div className="event-list-small" data-chapterid="26468002">
                
                  <div className="figureset-figure">
                    <a className="4" title="event.Id" href="https://www.meetup.com/Ironhack-Berlin/"><img src="https://secure.meetupstatic.com/photos/event/4/5/4/2/thumb_478517730.jpeg" alt="image3"></img></a>
                  </div>
                <div className="figureset-description margin-bottom">
                  <h4 className="flush--bottom">
                    <a className="link-to-event" href="https://www.meetup.com/Ironhack-Berlin/">
                       Ironhack Berlin</a>
                  </h4>
                  <h4 className="date-time">show the date and time of event</h4>

                </div>
              </div>
            
  
          </div>







        </>

      
    )
  }

}