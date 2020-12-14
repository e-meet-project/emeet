import React, { Component } from 'react'
import axios from 'axios'
import editEvent from './Editevent';
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
    maxCapacity:""
    
  };

  getEventDetails = () => {
    // console.log(`getEventDetails:`, this.props)
    const eventId = this.props.match.params.id

    axios.get(`/api/events/${eventId}`)
        .then(response => {
            const event = response.data;
            console.log(`axios call:`, event)
            this.setState({
              event : event,
              title: response.data.title,
              description: response.data.description,
              image: response.data.image,
              googleLink: response.data.googleLink,
              date: response.data.date,
              startTime: response.data.startTime,
              endTime: response.data.endTime,
              editForm: false
            })
          })
          .catch(err => {
            console.log(err.response)
            // if (err.response.status === 404) {
            //   this.setState({
            //     error: 'Sorry - Project Not found 🤷‍♀️ 🤷‍♂️'
            //   })
            // }
          })
          // console.log(`inside getBeerDetails: ${this.state.event}`)
  }

  componentDidMount() {
    this.getEventDetails();
  //   console.log(`compDM ${this.state.beer}`)
  }

  componentDidUpdate(prevProps) {
    console.log('current props:', this.props.match.params.id)
    console.log('previous props:', prevProps.match.params.id)
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.getEventDetails();
      console.log(`compDU ${this.state.event}`)
    }
  }

  render() {
  //   if (this.state.error) return <h1>{this.state.error}</h1>
    if (!this.state.event) return <h1>Loading...</h1>
    // console.log(`event details!`)
    // this.getEventDetails();
    console.log(this.state)

    return (
      <div>
      test!
      test!
        <h1>{this.state.event.title}</h1>
        <p>{this.state.event.description}</p>
        <p>Start {this.state.event.startTime+'0'}  End {this.state.event.endTime+'0'}</p>
        <p>Date: {this.state.event.date.slice(0,10)}</p>
        <p>{this.state.event.attendees}</p>
        <p><button><a href="/Editevent">Show Edit Form</a></button></p>
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
