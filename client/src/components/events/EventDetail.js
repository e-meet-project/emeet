import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Addevent from './Addevent';
import Editevent from './Editevent';
import './eventLists.css'

import { Form, Button, Alert, Container, Dropdown } from 'react-bootstrap';

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
  }

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
              // attending: response.data.attendees.includes(this.props.user._id)
            })

            if (response.data.attendees.includes(this.props.user._id) ) {
              console.log('success')
              this.setState({
                attending: true
              })
            } else {
              console.log('fail', this.props.user._id)
              // console.log(response.data.attendees)
              // console.log.log( `props`, this.props.user._id)
            }
          

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
        this.props.history.push("/profile");
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
        attending: !this.state.attending
      })
    }).catch(err => console.log(err))
  }


  render() {
    // console.log( `render user` , this.state.attending)
    // console.log(this.state.event.attendees._id)
    console.log(`renderid`, this.props.user._id)

    // console.log("attending", this.state.attending)
    // console.log( `user?`, this.props.user._id)
  //   if (this.state.error) return <h1>{this.state.error}</h1>
     if (this.state.error) return <h1>{this.state.error}</h1>
    if (!this.state.event) return <h1 class="detailsHeader">Loading...</h1>
   
   
    
    // console.log(`event details!`)
    // this.getEventDetails();
    // console.log(`render's this.state`, this.state)

    return (
      <div className="detailsBody">
      <div className="imageFlex">
      
        
          <div className ="detailsHeader">

            <div className="detailsTitle">
             
              <h1>{this.state.event.title}</h1>
            </div>
  
            
    
            {/* <p>Start {this.state.event.startTime}  End {this.state.event.endTime}</p> */}
    
            <div className="detailsDateTime">
            	{this.state.event.startTime 
            	  ? <div>
                  <p><b>Start Time: </b>{this.state.event.startTime} 
                  <br/><b>End Time : </b> {this.state.event.endTime} </p>
                </div>
                : <p> <b>Start & End Time:</b> TBD </p>
            	}
              
            	{/* <p>Date: {this.state.event.date}</p> */}
              
            	{this.state.date 
            	  ? <p><b>Date:</b> {this.state.event.date.slice(0,10)}</p> 
            	  : <p>  <b>Date :</b> TBD  </p> 
            	}
            </div>
          </div>
          
      </div>
           
          <div className="detailsJoin">
          <h3>Want to join this event?</h3>
            {/* {this.props.user && (this.state.attending 
              ? <p>You are attending this event! </p> 
              : <button onClick={this.joinEvent}> Join event</button>)} */}

            {this.state.attending 
              ? <p>You are attending this event!  
                  <p>
                    <a href={this.state.event.googleLink}>
                       Click here to go to your event
                    </a> 
                  </p>
                </p> 
              : <Button onClick={this.joinEvent}> Join event</Button>
            } 
          </div>
        <div className="detailsDescription">
          <p><b>What you'll do during this event:</b> </p>
            <p>
            <br />
            	{this.state.event.description}
            </p>

              <img src={this.state.event.image} alt=""/>
        </div>
        
        
        {/* <p> googleLink: {this.state.event.googleLink}</p> */}
       
          
          <hr />
          <div className="detailsAttendeesHeader">
          	<h3>
          	  Meet your fellow Event attendees: 
          	</h3>
          </div>
        <div className="detailsAttendees">
     
          {this.state.event.attendees.map((attendee, index) => {
            return (
              <div>

                <div className="detailsBox">
                  <p>
                    {attendee.username}
                  </p>
  
                  <img className="ProfilePhoto" alt={attendee.username} 
                    style= { { borderRadius: "50%"} } 
                    // maxWidth:" 120px",
                    src={attendee.profileImage}>
                  </img>
                </div>
                

              </div>
            )
          })}

        </div>

        <div className="detailsEventOwner">
          {this.props.user._id === this.state.event.owner && this.props.user._id
            ? <div className="row">
              

                <div className="detailsEventOwnerColLeft">
                    <h3>
                      You are the host of this event!
                    </h3>
                    <br />  
                    <h4>
                      Need to change something? 
                    </h4>
                    <p>
                      Click here to display the edit form:  
                    </p>  
                    <Button onClick={this.toggleEditForm}>
                      Show Edit Form
                    </Button>

                <div className="detailsEventOwnerDelete">
                  <Alert variant={'danger'}>
                  <h4>Can't host the event any more? </h4>
                    
                    <Dropdown >
                      <Dropdown.Toggle variant="danger" id="dropdown-basic">
                        Yes I'm sure I want to delete this event
                      </Dropdown.Toggle>
                        <Dropdown.Menu>
                         <Dropdown.Item onClick={()=>{this.deleteEvent()}} >
                          <h1>
                            Delete 
                          </h1>
                          <p>
                            Please note that this action CANNOT be undone! Please only click delete if you're 100% certain!
                          </p>
                         </Dropdown.Item> 
                        </Dropdown.Menu>
                    </Dropdown>
        
                  </Alert>
                 </div>

                </div>
              <div className="detailsEventOwnerEditAll">
                    <div className="detailsEventOwnerEditForm, detailsEventOwnerColRight">
                      {this.state.editForm && (
                        <Editevent
                          {...this.state}
                          handleChange={this.handleChange}
                          handleSubmit={this.handleSubmit}
                        />
                      )}
                    </div>
                  </div>
            </div>
          : <p></p>
          }

            {/* {this.state.editForm && (
              <Editevent
                {...this.state}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
              />
            )} */}
        </div> 

      </div>
    )
  }
}

//original version of owner buttons
{/* <h1>Original Version!</h1>
{this.props.user._id === this.state.event.owner 
  && <button variant='danger' onClick={()=>{this.deleteEvent()}}>
    Delete event
  </button>}

}

  
{/* {this.props.user && (this.state.attending ? <p>You are attending this event! </p> : <button onClick={this.joinEvent}> Join event</button>)} */}
// {this.props.user && (this.state.attending 
//   ? <p>You are attending this event! <a href={this.state.event.googleLink}>Click here to go to your event</a> </p> 
//   : <button onClick={this.joinEvent}> Join event</button>)
// } 
