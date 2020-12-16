import React, { Component } from 'react'


export default class Editevent extends Component {
  

  render() {
    return (
      
<div>
          <div> 
            <h2> Edit your event </h2>
            <form onSubmit={this.props.handleSubmit}>
                <label htmlFor="title"> Event title: </label>
                <input 
                  type="text" 
                  name="title" 
                  id="title" 
                  
                  value={this.props.title} 
                  onChange={this.props.handleChange}/>
                <br/>
                <label htmlFor="date">Event date:</label>
                <input 
                  type="date" 
                  name="date" 
                  id="date" 
                  value={this.props.date}
                  onChange={this.props.handleChange}/>
                <br/>
                <label htmlFor="startTime "> Start time: </label>
                <input 
                  type= "time" 
                  name="startTime" 
                  id="startTime" 
                  value={this.props.startTime}  
                  onChange={this.props.handleChange}/>
                <br/>
                <label htmlFor="endTime" > End time: </label>
                <input 
                type="time"
                name="endTime"
                id="endTime"
                value={this.props.endTime}
                onChange={this.props.handleChange}/>
                <br/>
                <label htmlFor="maxCapacity"> Maximum capacity: </label>
                <input 
                type="number"
                name="maxCapacity" 
                id="maxCapacity"
                value={this.props.maxCapacity}
                onChange={this.props.handleChange}/>
                <br/>
                <label htmlFor="description">Description: </label>
                <input 
                type="text"
                name="description"
                id="description"
                value={this.props.description}
                onChange={this.props.handleChange}
                 />
                <br/>
                <label htmlFor="googleLink">Add Google link: </label>
                <input 
                type="link"
                name="googleLink"
                id="googleLink"
                value={this.props.googleLink}
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
    
  




