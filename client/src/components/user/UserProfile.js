import React, { Component } from 'react';
import './UserProfile.css';
import 'bootstrap/dist/css/bootstrap.css';
// import { userProfileData } from '../';
import EventDetail from '../events/EventDetail';
import axios from 'axios';



export default class UserProfile extends Component {

  state = {
    user: this.state,

    
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
      // console.log(`inside getUserDetails: ${this.state.user}`)
  }

  

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
    const user = this.state.user;
    console.log(`this is the render declared user = ${user} `)
  
    
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







        </>
}

state = {
  user: null,
  // username: this.props.user.username,
  events: this.props.user.eventsAttended,
  eventDetailsfromDB: ''
};


// getUserDetails = () => {
//   console.log(this.props)

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

// componentDidUpdate(prevProps) {
//   console.log('current props:', this.props.match.params.id)
//   console.log('previous props:', prevProps.match.params.id)
//   if (prevProps.match.params.id !== this.props.match.params.id) {
//     this.getUserDetails();
//     console.log(`compDU ${this.state.user}`)
//   }
// }



//alternative user profile =======================================================================

// import React, { Component } from 'react';
// import './UserProfile.css';
// // import { userProfileData } from '../';
// import Events from '../events/Events';
// import axios from 'axios';
// import EventRow from '../events/Search/EventRow';



// export default class UserProfile extends Component {

//   state = {
//     user: null,
//     // username: this.props.user.username,
//     events: this.props.user.eventsAttended,
//     eventDetailsfromDB: ''
//   };


//   // getUserDetails = () => {
//   //   console.log(this.props)
  
//   //     axios.get(`/api/user/${this.props.user._id}`)
//   //       .then(response => {
//   //         console.log(`axios get`, response)
//   //         this.setState({
//   //         user: response.data
//   //       })
//   //     })
//   //     console.log(`inside getUserDetails: ${this.state.user}`)
//   // }

//   // componentDidMount() {
//   //   this.getUserDetails();
//   //   console.log(`this is the compDM ${this.state.user}`)
//   // }

//   // componentDidUpdate(prevProps) {
//   //   console.log('current props:', this.props.match.params.id)
//   //   console.log('previous props:', prevProps.match.params.id)
//   //   if (prevProps.match.params.id !== this.props.match.params.id) {
//   //     this.getUserDetails();
//   //     console.log(`compDU ${this.state.user}`)
//   //   }
//   // }



//   componentDidMount() {
//     console.log('hello')
//     axios.get('/api/events') 
//       .then( response => {
//         console.log( `api DB`, response)
//         this.setState({
//           eventDetailsfromDB: response.data
//         })
//       })
//   }
//   // above = filter events looking for id in attendees

//   render() {
//     const user = this.props.user;
//     // console.log(`this is the render declared user = ${user} `)
//     // console.log(`userProfile props user`, user)
//     // console.log(`userevents`, this.state.events)
//     // console.log(`eventattended`, user.eventsAttended)
//     console.log(`eventsDB`, this.state.eventDetailsfromDB)
  

//     // if (!user) {
//     //   return <> Loading... </>;
//     // } 
//     // else 
//     if (this.state.events == '' ) return <>No events! </> ;

//     // } else {

//       return (
//           <>
//           <h1>Past History Test</h1>
//           <h2>Hello {user.username}</h2>

//           <div>
//             {/* const events = await Event
//             find() */}
//           </div>
//           <div>
//             <h3>version 2- searching for id in event collection</h3>
            
//             {this.state.eventDetailsfromDB.map (event => {
//               return (
//                 <div key = {user._id}>
                  
//                   <p>
//                     {event.title}
//                   </p>

//                 </div>
//               )
//             })}
//           </div>
          
//           <p> 
//           Events:
//             {this.state.events.map( event => {
//               return (

//                 <div key = {event._id}>
//                   <p>
//                   events!!
//                     {event}
//                   </p>

//                 </div>
//               )
//             })}
//             {/* End */}
//           </p>
//         </>

//       ) // finsl else return ends
//     // } //if statement ends
//   }// render ends
// } //class ends
