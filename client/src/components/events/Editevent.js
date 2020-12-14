import React, { Component } from 'react'
import axios from 'axios'

export default class Editevent extends Component {
  state = {
    title: '',
    date:'',
    startTime: '',
    endTime: '',
    maxCapacity:'',
    // attendees: '',
    // owner: '',
    description: '',
    image:'',
    googleLink:'',
  }

  render() {
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
                onChange={this.props.handleChange}/>
                <br/>
                <label htmlFor="date">Event date:</label>
                <input 
                type="date" 
                name="date" 
                id="date" 
                value={this.state.date}
                onChange={this.props.handleChange}/>
                <br/>
                <label htmlFor="startTime "> Start time: </label>
                <input 
                type= "time" 
                name="startTime" 
                id="startTime" 
                value={this.state.startTime}  
                onChange={this.props.handleChange}/>
                <br/>
                <label htmlFor="endTime" > End time: </label>
                <input 
                type="time"
                name="endTime"
                id="endTime"
                value={this.state.endTime}
                onChange={this.props.handleChange}/>
                <br/>
                <label htmlFor="maxCapacity"> Maximum capacity: </label>
                <input 
                type="number"
                name="maxCapacity" 
                id="maxCapacity"
                value={this.state.maxCapacity}
                onChange={this.props.handleChange}/>
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
                onChange={this.props.handleChange}
                 />
                <br/>
                <label htmlFor="googleLink">Add Google link: </label>
                <input 
                type="link"
                name="googleLink"
                id="googleLink"
                value={this.state.googleLink}
                onChange={this.props.handleChange} />
                <br/>
                <label hmtlFor="image" >Upload an image: </label>
                <input type= "file"
                 name="image"
                  id="image"
                   accept="image/*">
                    </input>
                <button type='submit'> Edit your event </button>
              
            </form>
            </div>
        </div>
    );
  }
}
    
  




