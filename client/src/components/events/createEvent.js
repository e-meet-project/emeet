import React, { Component } from 'react'




export default class createEvent extends Component {
  state = {
    title: '',
    date:'',
    time: '',
    maxcapacity:'',
    hostedby: '',
    description: '',
    img:'',
    googlelink:'',
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    
    
    this.setState ({
      [name]: value
    });
  };


  
  handleSubmit = (event) => {
    event.preventDefault ();
   
      
    const { title, date, time, maxcapacity, hostedby, description, img, googlelink} = this.state;
    console.log(this.state)
  
  
  
    createEvent(title, date, time, maxcapacity, hostedby, description, img, googlelink).then((data) => {
      if (data.message) {
        this.setState ({
          message: data.message,
          title: '',
          date:'',
          time:'',
          maxcapacity:'',
          hostedby:'',
          description:'',
          img:'',
          googlelink:''

        });
      } else {
        this.props.history.push(`/events/${this.props.events._id}`);
      }
    });
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




