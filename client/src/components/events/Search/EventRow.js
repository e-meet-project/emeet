import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class EventRow extends Component {
  render() {
    console.log(this.props);
    const {event} = this.props;
    return (
      <div className="card col-md-4 col-sm-3">
        {event.image && <img src={event.image} className="card-img-top" alt={event.title}/>}
        <div className="card-body">
          <h5 className="card-title">{event.title}</h5>
          <p className="card-text">{event.description}</p>
          <Link to={`/events/${this.props.id}`} className="btn btn-primary">More Information</Link>
        </div>
      </div>
    )
  }
}
