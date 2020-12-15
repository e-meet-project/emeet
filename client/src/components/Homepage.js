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
    user : this.props,
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
    // console.log( `homepage props:`, this.state.user)
    return (
      <div>
        index, now called homepage!
        <p>
          <a href="/events">See all events</a>
        </p>
        <p>
        {/* <p>
          <Searchbar />
        </p> */}
        {/* <Events /> */}
        <p>
            These events:
            {this.state.events.map ( (event, index) => {
            return ( 
              <div key= {event._id}>
                  <p>
                      {event.title}
                  </p>
                  <Link to = {`/events/${event._id}`}  > See More Information </Link>
                  
              </div>
              )})}
        </p>

          <button><a href="/signup"> Signup</a></button> <button><a href="/login"> Login</a></button>
        </p>
        
        <p>
          Welcome {this.props.username} !
        </p>

      </div>
    )
  }
}
