import React, { Component } from 'react'
import axios from "axios";



export default class Addevent extends Component {
  state = {
    title: '',
    date:'',
    startTime: '',
    endTime: '',
    // attendees: '',
    // owner: '',
    description: '',
    image:'',
    googleLink:'',
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    
    console.log(value);
    this.setState ({
      [name]: value
    });
  };


  
  handleSubmit = (event) => {
    event.preventDefault ();
   
      
    const { title, date, startTime,endTime, description, image, googleLink} = this.state;
    console.log(this.state)
  
  
    axios.post("/api/events", {    
    title:title,
    date:date,
    startTime: startTime,
    endTime:endTime,
    owner: this.props.user._id,
    description: description,
    image:image,
    googleLink: googleLink,}).then((event)=> {
      console.log(event.data , "fetch event")
    }).catch(err => {
      console.log(err);
    })

    // this.props.history.push(`/events/${this.props.events._id}`);
      
    
  }


  
 
  



  render() {
    console.log(this.props)
    return (
       <div>
          <div> 
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="title"> Event title: </label>
                <input 
                type="text" 
                name="title" 
                id="title" 
                
                value={this.state.title} 
                onChange={this.handleChange}/>
                <br/>
                <label htmlFor="date">Event date:</label>
                <input 
                type="date" 
                name="date" 
                id="date" 
                value={this.state.date}
                onChange={this.handleChange}/>
                <br/>
                <label htmlFor="startTime "> Start time: </label>
                <input 
                type= "time" 
                name="startTime" 
                id="startTime" 
                value={this.state.startTime}  
                onChange={this.handleChange}/>
                <br/>
                <label htmlFor="endTime" > End time: </label>
                <input 
                type="time"
                name="endTime"
                id="endTime"
                value={this.state.endTime}
                onChange={this.handleChange}/>
                <br/>
                <label htmlFor="attendees"> Maximum capacity: </label>
                <input 
                type="number"
                name="attendees" 
                id="attendees"
                value={this.state.attendees}
                onChange={this.handleChange}/>
                <br/>
                {/* <label htmlFor="owner">Hosted by:  </label>
                <input 
                type="text" 
                name="owner" 
                id="owner"
                value={this.state.owner}
                onChange={this.handleChange}/>
                <br/> */}
                <label htmlFor="description">Description: </label>
                <input 
                type="text"
                name="description"
                id="description"
                value={this.state.description}
                onChange={this.handleChange}
                 />
                <br/>
                <label htmlFor="googlelink">Add Google link: </label>
                <input 
                type="link"
                name="googlelink"
                id="googlelink"
                value={this.state.googleLink}
                onChange={this.handleChange} />
                <br/>
                <label hmtlFor="image" >Upload an image: </label>
                <input type= "file"
                 name="image"
                  id="image"
                   accept="image/*">
                    </input>
                <button type='submit'> Add your event! </button>
              
            </form>
            </div>
        </div>
    );
  }
}
    
  




