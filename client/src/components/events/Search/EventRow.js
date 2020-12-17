import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../eventLists.css'

export default class EventRow extends Component {
  render() {
    // console.log(this.props.)
    const {event} = this.props;
      // console.log( "this is the event", event)
    
      return (

        <div className="card col-sm-4 col-sm-3 card-box" 
          style={ {paddingTop: "2rem"} }
          >
          {event.image && 
            <img src={event.image} className="card-img-top" 
            style={{maxHeight: "150px"}} 
            alt={event.title}
          />}

          <div className="card-body">
            <h5 className="card-title">{event.title}</h5>
            <p className="card-text">{event.description}</p>
            <Link to={`/events/${event._id}`} className="btn btn-primary">
              More Information
            </Link>
          </div>
        </div>




      // <div 
      //   key= {this.props.idKey}
      //   >
      //   <div className="card col-md-4 col-sm-3">
      //    <img src={this.props.image} className="card-img-top" alt={this.props.title}/>

      //       <div className="card-body">
      //         <h5 className="card-title">
      //           Event Title : {this.props.title}
      //         </h5>
      //         <p className="card-text">
      //           <b>What it's about :</b> {this.props.description}
      //         </p>
      //         <br />
      //         Date: {this.props.date}
              
      //       </div>
      //       {/* {this.props.category} */}
      //       <Link 
      //         to = {`/events/${this.props.id}`}  
      //         className="btn btn-primary"> 
      //         See More Information 
      //       </Link>
                
      //   </div>
      // </div>
    )
  }
}
