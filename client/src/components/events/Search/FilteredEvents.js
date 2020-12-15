// import React, { Component } from 'react'
// import { events } from '../../../../models/User'
// import EventDetail from '../EventDetail'
// import Events from '../Events'
// import Searchbar from './Searchbar'
// import {Link} from 'react-router-dom'

// export default class FilteredEvents extends Component {

//   state = {
//     upcomingEvents: this.props.events,
//     filteredEvents: this.props.events, //tbd
//     search: '',
//   }

//   // setSearch = search => {
//   //   // console.log('did it change?')
//   //   this.setState ( {
//   //       search: search
//   //   })
//   // }

// //   filterProducts = event => {
// //     this.setState({ 
// //         search: event.target.value}, () => {
// //           const filtered = this.state.upcomingEvents.filter(p => 
// //               p.name.toLowerCase().includes( this.state.search.toLowerCase() ) 
// //               );
              
// //               this.setState({
// //                 filteredEvents: filtered
// //                 }, 
// //               console.log(this.state.upcomingEvents) 
// //               )
// //         }
// //     })
// // }
// filterEvents = event => {
//   this.setState ({ search:event.target.value}, () => {
//     const filtered = this.state.upcomingEvents.filter ( p => 
//       p.name.toLowerCase().includes(this.state.search.toLowerCase() )
//     );
//     this.setState({
//       filteredEvents: filtered
//     })
//     // console.log(this.state.upcomingEvents)
//   })
// }


//   render() {
//     // console.log(this.props)
//     console.log(`fEvents`, this.props)
//     return (
//       <div>
//       {/* from fitleredEvents.js!:
//         <Searchbar
//         filter={this.filterProducts} //search's OnChange
//         search= {this.state.search} //search value
//         /> */}

//         events!
//         {/* <EventDetail /> */}
//         <Events/>
//         <Events />
//           <div>
//           {this.props.events.map ( (event, index) => {
//             return (
//                <div key= {event._id}>
//                   <p>
//                       {event.title}
//                   </p>
//                   <Link to = {`/events/${event._id}`}  > See More Information </Link>
//                 </div>
//             )
//           })}

//       </div>
//       </div>
//     )
//   }
// }


            /* {this.props.events.map ( (event, index) => {
            return ( 
              <div key= {event._id}>
                  <p>
                      {event.title}
                  </p>
                  <Link to = {`/events/${event._id}`}  > See More Information </Link>
              </div>
          </div> 
              ) } ) */