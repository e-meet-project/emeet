import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Addevent from './Addevent';
import Editevent from './Editevent';

export default class EventDetail extends Component {

  state = {
    error: null,
    event: null,
    title: '',
    description: '',
    // owner: { type: Schema.Types.ObjectId, ref: 'User'},
    image: '',
    googleLink: '',
    // attendees: [{ type: Schema.Types.ObjectId, ref: 'Event' }],
    date: '',
    startTime: "",
    endTime: "",
    maxCapacity:"",
    attending: false,
  };



  getEventDetails = () => {
    // console.log(`getEventDetails:`, this.props)
    const eventId = this.props.match.params.id

    axios.get(`/api/events/${eventId}`)
        .then(response => {
            const event = response.data;
            // console.log(`axios call:`, event)
            this.setState({
              event : event,
              title: response.data.title,
              description: response.data.description,
              image: response.data.image,
              googleLink: response.data.googleLink,
              date: response.data.date,
              startTime: response.data.startTime,
              endTime: response.data.endTime,
              maxCapacity: response.data.maxCapacity,
              attending: response.data.attendees.includes(this.props.user._id)
            })
          })
          .catch(err => {
            console.log(err.response)
            // if (err.response.status === 404) {
            //   this.setState({
            //     error: 'Sorry - Project Not found 🤷‍♀️ 🤷‍♂️'
              // })
            // }
           
          })
         
  }

  componentDidMount() {
    this.getEventDetails();

  }

  deleteEvent = () => {
    // delete this project from the database
    const id = this.props.match.params.id;
    axios.delete(`/api/events/${id}`)
      .then(() => {
        // this is how you do a redirect with react router dom
        this.props.history.push('/profile');
      })
  }

  toggleEditForm = () => {
    this.setState((prevState) => ({
      editForm: !prevState.editForm
    }))
    
  
    }



  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }




  componentDidUpdate(prevProps) {
  //   console.log('current props:', this.props.match.params.id)
  //   console.log('previous props:', prevProps.match.params.id)
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.getEventDetails();
      // console.log(`compDU ${this.state.event}`)
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    const id = this.props.match.params.id;
    axios.put(`/api/events/${id}`, {
      title: this.state.title,
      description: this.state.description,
      image: this.state.image,
      googleLink: this.state.googleLink,
      date: this.state.date,
      startTime: this.state.startTime,
      endTime: this.state.endTime,
      maxCapacity: this.state.maxCapacity,

    })
      .then(response => {
        this.setState({
          event: response.data,
          title: response.data.title,
          description: response.data.description,
          image: response.data.image,
          googleLink: response.data.googleLink,
          date: response.data.date,
          maxCapacity:response.data.maxCapacity,
          startTime: response.data.startTime,
          endTime: response.data.endTime,
          editForm: false
        })
        this.props.history.push("/events");
      })
      .catch(err => {
        console.log(err);
      })
  }

  joinEvent = () => {
    const id = this.props.match.params.id;
    axios.put(`/api/events/join/${id}`)
    .then(response => {
      console.log(response, "response");
      this.setState({
        attending: true
      })
    }).catch(err => console.log(err))
  }


  render() {
    console.log( `render` , this.state.attending)
    console.log("attending", this.state.attending)
    // console.log( `user?`, this.props.user._id)
  //   if (this.state.error) return <h1>{this.state.error}</h1>
     if (this.state.error) return <h1>{this.state.error}</h1>
    if (!this.state.event) return <h1>Loading...</h1>
   
   
    
    // console.log(`event details!`)
    // this.getEventDetails();
    // console.log(`render's this.state`, this.state)

    return (
      <div>
     
        <h1>{this.state.event.title}</h1>
        <p>{this.state.event.description}</p>
        <p>Start {this.state.event.startTime}  End {this.state.event.endTime}</p>
        {/* <p>Date: {this.state.event.date}</p> */}

        {this.state.date 
          ? <p>Date: {this.state.event.date.slice(0,10)}</p> 
          : <p>  Date : TBD  </p> 
        }

        <p> googleLink: {this.state.event.googleLink}</p>
        <ul> Meet you fellow Event attendees: 
        {this.state.event.attendees.map((attendee, index) => {
          return (<div>
            <li>{attendee.username}</li>
            <img className="ProfilePhoto" alt="" 
              style={{maxWidth:" 120px", borderRadius: "50%"}} 
                  src={attendee.profileImage}></img>
          </div>)
        })}
        </ul>
        
        {this.props.user._id === this.state.event.owner && <button variant='danger' onClick={()=>{this.deleteEvent()}}>Delete event</button>}
        {this.props.user._id === this.state.event.owner && <button onClick={this.toggleEditForm}>Show Edit Form</button>}
        {/* {this.props.user && (this.state.attending ? <p>You are attending this event! </p> : <button onClick={this.joinEvent}> Join event</button>)} */}
        {this.props.user && (this.state.attending 
          ? <p>You are attending this event! <a href={this.state.event.googleLink}>Click here to go to your event</a> </p> 
          : <button onClick={this.joinEvent}> Join event</button>)
        } 
        
        {this.state.editForm && (
          <Editevent
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        )}
      </div>
    )
  }
}

