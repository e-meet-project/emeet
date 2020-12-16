import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../eventLists.css'

export default class EventRow extends Component {
  render() {
    // console.log(this.props);
    const {event} = this.props;
    return (
      <div>
      {/* this is a row! */}
      {/* kara's event rows */}
      
        <p 
          key= {this.props.idKey} 
          class="eventList"
        >
            <div class="eventListText eventListItemHeight">
            <h1>Kara's</h1>
              <h3>
                Event Title : {this.props.title}
              </h3>
              <b>What it's about :</b> {this.props.description}
              <br />
              Date: {this.props.date}
              
            </div>
            {/* {this.props.category} */}
            <Link 
              to = {`/events/${this.props.id}`}  
              class="eventListLink eventListItemHeight"  
            > 
              See More Information 
            </Link>
                
        </p>
      {/* //  iriel's event rows ============================================== */}

        <div className="card col-md-4 col-sm-3">
        <h1>Iriel's</h1>
          {event.image && <img src={event.image} className="card-img-top" alt={event.title}/>}
          <div className="card-body">
            <h5 className="card-title">{event.title}</h5>
            <p className="card-text">{event.description}</p>
            <Link to={`/events/${this.props._id}`} className="btn btn-primary">More Information</Link>
          </div>
      </div>
    </div>
    )
  }
}


// will need to see which displays correctly after merge conflicts resolved.