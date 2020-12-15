import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../eventLists.css'

export default class EventRow extends Component {
  render() {
    // console.log(this.props.)
    return (
      <div>
      {/* this is a row! */}
        <p 
          key= {this.props.idKey} 
          class="eventList"
        >
            <div class="eventListText eventListItemHeight">
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
      </div>
    )
  }
}
