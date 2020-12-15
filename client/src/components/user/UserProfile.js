import React, { Component } from 'react';
import './UserProfile.css';
import 'bootstrap/dist/css/bootstrap.css';
// import { userProfileData } from '../';
import EventDetail from '../events/EventDetail';
import axios from 'axios';
import EventRow from '../events/Search/EventRow';



export default class UserProfile extends Component {

  state = {
<<<<<<< HEAD
    user: this.state,

    
=======
    user: null,
    // username: this.props.user.username,
    events: this.props.user.eventsAttended
>>>>>>> b434de753560e4601f1ed1c8e8fa41314df4606c
  };


  // getUserDetails = () => {
  //   console.log(this.props)
  
<<<<<<< HEAD
      axios.get(`/api/user/${this.props.user._id}`)
        .then(response => {
          console.log(response)
          this.setState({
          user: response.data
        })
      })
      // console.log(`inside getUserDetails: ${this.state.user}`)
  }

  
=======
  //     axios.get(`/api/user/${this.props.user._id}`)
  //       .then(response => {
  //         console.log(`axios get`, response)
  //         this.setState({
  //         user: response.data
  //       })
  //     })
  //     console.log(`inside getUserDetails: ${this.state.user}`)
  // }

  // componentDidMount() {
  //   this.getUserDetails();
  //   console.log(`this is the compDM ${this.state.user}`)
  // }
>>>>>>> b434de753560e4601f1ed1c8e8fa41314df4606c

  // componentDidUpdate(prevProps) {
  //   console.log('current props:', this.props.match.params.id)
  //   console.log('previous props:', prevProps.match.params.id)
  //   if (prevProps.match.params.id !== this.props.match.params.id) {
  //     this.getUserDetails();
  //     console.log(`compDU ${this.state.user}`)
  //   }
  // }



  // pastAndFutureEvents = () => {
  //   const today = new Date();
  //   console.log(today.toDateString());
  //   let databaseCall = [];
  //   let pastEvents = [];
  //   // this includes events today 
  //   let futureEvents = [];

  //   axios.get(`/api/user/${this.props.user._id.eventsAttended}`)
  //       .then(eventsAttended => {
  //         console.log(eventsAttended)
  //         databaseCall = eventsAttended; 
  //       })
      
  //       databaseCall.forEach((eventAttended) =>{
  //         if (today >= eventAttended.date) {
  //           pastEvents.push(eventAttended)
  //         }
  //         if (today < eventAttended.date) {
  //           futureEvents.push(eventAttended)
  //         }

  //         this.setState({
  //           futureEvents: futureEvents, 
  //           pastEvents: pastEvents
  //         })
  //     })
  //   }
  

      componentDidMount() {
        this.getUserDetails();
        console.log(`this is the compDM ${this.state.user}`)
      }


  render() {
    const user = this.props.user;
    // console.log(`this is the render declared user = ${user} `)
    console.log(`userProfile props user`, user)
    console.log(`userevents`, this.state.events)
  
    
    if (!user) return <> Loading... </>;
      
    return (
        <>
          <div className="profile-container-top">
            
         


              <h1 className="profile-name" >{this.state.user.username}</h1>
              <p className="aboutMe">{this.state.user.aboutMe}</p>
              <img className="ProfilePhoto" alt="" 
              style={{maxWidth:" 120px", borderRadius: "50%"}} 
                  src={this.state.user.profileImage}></img>
            
		
	        </div>


            <button className="btn-add-your-event" 
          // style={{backgroundColor: "#99e1d9", width: "80vw", marginLeft: "5vw", padding: "5px 10px"}}
          >
           <a href="/Addevent">Add your own event</a></button>



          <nav className="nav-events">Events</nav>    

          <div className="navbar-eventsLInks">

            <ul>
            <ul>past events</ul>
            <ul>upcoming</ul>
            <ul>Events you own</ul>
            
              {/* <a href="#pastEvents">Past Events</a>
            
            <a href="#upcoming">Upcoming</a>
            <a href="#eventsYouOwn">Events you own</a> */}
            </ul>


            </div>

          {this.state.user.eventsAttended.map ((eventAttended, index) => {
            return ( 
                <div key= {eventAttended._id}>
                
                <div className="event-list-small">
                
                  <div className="event-description">
                    <h4 className="event-title">
                      <a className="link-to-event" href={`/events/${eventAttended._id}`}>{eventAttended.title}</a>
                    </h4>
                      <div className="event-info">
                        <img src={eventAttended.image} alt="image2"></img>
                      </div>
                    <h4 className="description">{eventAttended.description}</h4>
                      <h4 className="date-time">{eventAttended.date.slice(0, 10)}</h4>
                  </div>
              </div>
                </div>
              )
              }
            )
            }

      
             
            
          
          <div className="profile-myEventList">
								


              
          </div>







//         </>

      
//     )
//   }

// }