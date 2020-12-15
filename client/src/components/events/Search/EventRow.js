import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class EventRow extends Component {
  render() {
    // console.log(this.props.)
    return (
      <div>
        <p key= {this.props.idKey} >
               <h3>
                 Event Title : {this.props.title}
               </h3>
               <b>What it's about :</b> {this.props.description}
                {/* {this.props.category} */}
                <Link to = {`/events/${this.props.id}`}  > See More Information </Link>
                
        </p>
      </div>
    )
  }
}
