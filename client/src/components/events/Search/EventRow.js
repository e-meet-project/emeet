import React, { Component } from 'react'

export default class EventRow extends Component {
  render() {
    return (
      <div>
        its a row! 
        <p key= {this.props.idKey} >
               <h3>
                 Event Title : {this.props.title}
               </h3>
               What it's about : {this.props.description}
                {/* {this.props.category} */}
        </p>
      </div>
    )
  }
}
