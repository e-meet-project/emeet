import React, { Component } from 'react'
import axios from "axios";



export default class createEvent extends Component {
  state = {
    title: '',
    date:'',
    time: '',
    maxcapacity:'',
    hostedby: '',
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
   
      
    const { title, date, time, maxcapacity, hostedby, description, image, googleLink} = this.state;
    console.log(this.state)
  
  
    axios.post("/api/events", {    
    title:title,
    date:date,
    time: time,
    maxcapacity:maxcapacity,
    hostedby: hostedby,
    description: description,
    image:image,
    googleLink: googleLink,}).then(()=> {
      console.log("evento creado")
    }).catch(err => {
      console.log(err);
    })

    // this.props.history.push(`/events/${this.props.events._id}`);
      
    
  }


  
 
  



  render() {
    return (
        <div>
          <div> 
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="title"> Event title: </label>
                <input type="text" 
                name="title" 
                id="title" 
                
                value={this.state.title} 
                onChange={this.handleChange}/>
                <br/>
                <label htmlFor="date">Event date:</label>
                <input type="date" 
                name="date" 
                id="date" 
                value={this.state.date}
                 onChange={this.handleChange}/>
                <br/>
                <label htmlFor="time">Event time: </label>
                <input type= "time" 
                name="time" 
                id="time" 
                value={this.state.time}  
                onChange={this.handleChange}/>
                <br/>
                <label htmlfor="maxcapacity"> Maximum capacity: </label>
                <input type="number" name="maxcapacity" id="maxcapacity"/>
                <br/>
                <label htmlFor="hostedby">Hosted by: </label>
                <input type="text" name="hostedby" id="hostedby"/>
                <br/>
                <label htmlFor="description">Description: </label>
                <input type="text" name="description" id="description"/>
                <br/>
                <label htmlFor="googlelink">Add Google link: </label>
                <input type="link" name="googlelink" id="googlelink"/>
                <br/>
                <label hmtlFor="img" >Upload an image: </label>
                <input type= "file" name="img" id="img" accept="image/*"></input>
                <button type='submit'> Add your event! </button>
              
            </form>
        </div>
        </div>
    );
    
  }
}




