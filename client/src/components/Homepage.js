import React from 'react'
import {Link} from 'react-router-dom'
import Events from './events/Events'
import FilteredEvents from './events/Search/FilteredEvents'
import Searchbar from './events/Search/Searchbar'
// import Navbar from './navbar/Navbar'
// import App from '../App'; 
import axios from 'axios'


export default class Homepage extends React.Component {

  state = {
    user : this.props.user,
    events: [],
    title: '',
    description: '',   
    date: '',
    startTime: "",
    endTime: "",
  }

  componentDidMount() {
    axios.get('/api/events') 
      .then( response => {
        const event = response.data;
        console.log( `api call`, response)
        this.setState({
          events : event,
          title: response.data.title,
          description: response.data.description,
          image: response.data.image,
        })
      })
  }

  render() {
//working, but removed for simplification of search
    // const user = this.state.user;
    // console.log(`this is the render declared user = ${user} `)
  

    // if (!user) return ( 
    //   <> 
    //     index, now called homepage!
    //     <p>
    //       Welcome!
    //     </p>

    //     <p>
    //       <a href="/events">See all events</a>
    //     </p>
    //     <p>
    //     {/* <p>
    //       <Searchbar />
    //     </p> */}
    //     {/* <Events /> */}
    //     <p>
    //         These events:
    //         {this.state.events.map ( (event, index) => {
    //         return ( 
    //           <div key= {event._id}>
    //               <p>
    //                   {event.title}
    //               </p>
    //               <Link to = {`/events/${event._id}`}  > See More Information </Link>
                  
    //           </div>
    //           )})}
    //     </p>

    //       {/* <button><a href="/signup"> Signup</a></button> <button><a href="/login"> Login</a></button> */}
    //     </p>
         
    //   </>
    // )

   
    return (
      <div>
        index, now called homepage!
        <p>
          {/* Welcome {this.state.user.username} ! */}
        </p>
        
        <div>
          <h1>search implementation</h1>
          <p>
            <FilteredEvents
              events = {this.state.events}
            />
          </p>
        </div>



        
  
      </div>
    )
  }
}


//  {/* if (!this.state.user) 
//     console.log(`homepage userstate`,this.state.user)
//     // console.log( `homepage props:`, this.state.user) */}


// To use the axios call directly on page: 
// <p>
// <a href="/events">See all events</a>
// </p>
// <p>
// <p>
//   These events:
//   {this.state.events.map ( (event, index) => {
//   return ( 
//     <div key= {event._id}>
//         <p>
//             {event.title}
//         </p>
//         <Link to = {`/events/${event._id}`}  > See More Information </Link>
        
//     </div>
//     )})}
// </p>

{/* <button><a href="/signup"> Signup</a></button> <button><a href="/login"> Login</a></button> */}
// </p>