import React, { Component } from 'react'
import axios from 'axios'

export default class EventDetail extends Component {

  state = {
    event: null
  };

  getEventDetails = () => {
    console.log(this.props)
    const eventId = this.props.match.params.id

    axios.get(`/api/events/${eventId}`)
        .then(response => {
            const event = response.data;
            // console.log(country);
            this.setState({
              event: event
            })
          })
          console.log(`inside getBeerDetails: ${this.state.event}`)
      }

  componentDidMount() {
    this.getEventDetails();
    console.log(`compDM ${this.state.beer}`)
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
    console.log(`event details!`)
    this.getEventDetails();
    return (
      <div>
      test!
        {/* {this.props.title} */}
      </div>
    )
  }
}
