import React from 'react'
import {Link} from 'react-router-dom'
import Events from './events/Events'
import FilteredEvents from './events/Search/FilteredEvents'
import Searchbar from './events/Search/Searchbar'
// import Navbar from './navbar/Navbar'
// import App from '../App'; 
import axios from 'axios'
import '../components/events/Search/search.css'
import Carousel from 'react-bootstrap/Carousel'


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
        // console.log( `api call`, response)
        this.setState({
          events : event,
          //below is from an outdated version of search, can be ignored
          title: response.data.title,
          description: response.data.description,
          image: response.data.image,
        })
      })
  }

  
  render() {
// working, but removed for simplification of search
    const user = this.state.user;
    // console.log(`this is the render declared user = ${user} `)
  

    
    // if (!user) return ( 
      
    return (
      <div className="homepage"> 

      <h2 className="welcome">
         Welcome  {user && this.state.user.username} to Emeet
        </h2>

        <div className="carousel">
        <Carousel>
              <Carousel.Item interval={1000}>
            <img
              className="d-block w-100 inner-img"
              src="https://res.cloudinary.com/irieljm/image/upload/c_scale,h_475/v1608129941/Emeet/computer5.jpg"
              alt="comp5"
            />
            <Carousel.Caption>
              <h3>Feeling sad and lonely at home?</h3>
              <p>join Emeet & create an event to bring people together</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100 inner-img"
              src="https://res.cloudinary.com/irieljm/image/upload/c_scale,h_629/v1608129945/Emeet/computer3.jpg"
              alt="comp3"
            />
            <Carousel.Caption>
              <h3>Can't hang out with your friends?</h3>
              <p>join Emeet to finds people to hang out with online</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 inner-img" 
              src="https://res.cloudinary.com/irieljm/image/upload/c_scale,h_506/v1608130423/Emeet/computer8.jpg"
              alt="comp8"
            />
            <Carousel.Caption>
              <h3>at home or at the park</h3>
              <p>With Emeet you can have fun with new & old friends online</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
 

        {/* <p>
          <a href="/events">See all events</a>
        </p> */}
        <div class="searchFullContainer">
          
          <container>
            <FilteredEvents
              events = {this.state.events}
            />
          </container>
        </div>

        

        
         
      </div>
    )

   
    // return (
    //   <>
          
    //     <div className="homepage"> 

    //     <h2>
    //       Welcome {this.state.user.username} !
    //     </h2>

    //     <div className="carousel">
    //     <Carousel>
    //           <Carousel.Item interval={1000}>
    //         <img
    //           className="d-block w-100"
    //           src="https://res.cloudinary.com/irieljm/image/upload/v1608129941/Emeet/computer5.jpg"
    //           alt="comp5"
    //         />
    //         <Carousel.Caption>
    //           <h3>First slide label</h3>
    //           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //         </Carousel.Caption>
    //       </Carousel.Item>
    //       <Carousel.Item interval={500}>
    //         <img
    //           className="d-block w-100"
    //           src="https://res.cloudinary.com/irieljm/image/upload/v1608129945/Emeet/computer3.jpg"
    //           alt="comp3"
    //         />
    //         <Carousel.Caption>
    //           <h3>Second slide label</h3>
    //           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //         </Carousel.Caption>
    //       </Carousel.Item>
    //       <Carousel.Item>
    //         <img
    //           className="d-block w-100"
    //           src="https://res.cloudinary.com/irieljm/image/upload/v1608130423/Emeet/computer8.jpg"
    //           alt="comp4"
    //         />
    //         <Carousel.Caption>
    //           <h3>Third slide label</h3>
    //           <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    //         </Carousel.Caption>
    //       </Carousel.Item>
    //     </Carousel>
    //   </div>
        
    //     <div class="searchFullContainer">
    //       <h5>search implementation</h5>
    //       <div class="searchResults">

    //         <FilteredEvents
    //           events = {this.state.events}
    //         />
    //       </div>
    //     </div>

    //   </div>

    //   </>
    // )
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

/* <button><a href="/signup"> Signup</a></button> <button><a href="/login"> Login</a></button> */
// </p>