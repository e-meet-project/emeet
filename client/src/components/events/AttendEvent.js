import React, { Component } from 'react'
import axios from 'axios'
// import { response } from 'express';

export default class AttendEvent extends Component {
  
  state = {
    attending: false,
    // attendees: []
  }

  //user attend functionality start =============
  eventAttendHandleChange = event => {
    console.log('button clicked')
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
      attending: !this.state.attending
    });
  };

  eventAttendHandleSubmit = event => {
    event.preventDefault();
    console.log(`handlesubmit state,`, this.state); //doesn't display
    console.log('button clicked, handlesubmit')

    // axios.post('/api/events', {
    //   attendees: this.event.attendees.push(this.props.user._id)
    // })
    //   .then(() => {
    //     // set the form to it's initial state (empty input fields)
    //     this.setState({
    //       attending: !this.state.attending,
    //       // attendees: response.data.attendees
    //     })

    //     // update the parent components state (in Projects) by calling getData()
    //     this.props.getData();
    //   })
    //   .catch(err => console.log(err))

  }

  render() {
    console.log(`attendEvent comp`, this.state.attending)
    return (
      <div>
          <p>Interested {this.props.user.username}, id ={this.props.user._id} ? </p>

           <form  onSubmit={this.handleSubmit}>
           <label htmlFor="attend">in attending the event?</label>
            <input 
                type='button'
                id='title'
                name='title'
                value= 'Click here to register for the event!'
                onClick={this.eventAttendHandleChange}
              />
          
          </form>
          {this.props.attendees}
      </div>
    )
  }
}
