import React, { Component } from 'react'
import axios from "axios";
import './eventLists.css'
import '../../components/auth/auth.css'
import { Form, Button, Alert, Container, Row, Col } from 'react-bootstrap';
import service from "../../services/upload";



// userProfileData
export default class Addevent extends Component {
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
    imagePublicID: "",
    googleLink:'',
    message: '',
    submitted: false,
    imageSelected: false,
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    
    console.log(value);
    this.setState ({
      [name]: value
    });
  };

  handleFileUpload = e => {
    console.log("The file to be uploaded is: ", e.target.files[0]);
    this.setState({
      imageSelected: true
    });
    const uploadData = new FormData();
    uploadData.append("image", e.target.files[0]);
    console.log("THIS IS THE UPLOAD DATA", uploadData)
    service.handleUpload(uploadData)
      .then(response => {
        console.log(response)
        const image = response.secure_url;
        const publicID = response.public_id;
        console.log('res from handleupload: ', response.secure_url);
        this.setState({ image: image, imagePublicID: publicID });
        console.log('new state: ', this.state.image);
        // check if the form already got submitted and only waits for the image upload
        if (this.state.submitted === true) {
          this.handleSubmit();
        }
      })
      .catch(err => {
        this.setState({
          imageSelected: false
        });
        console.log("Error while uploading the file: ", err);
      });
  }

  handleSubmit = (event) => {
    event.preventDefault ();

    console.log("submit");
      
    const { title, date, startTime,endTime, description, image, publicID, googleLink} = this.state;
    

    console.log(this.state)
  
    // userProfileData(event).then (data => {
    //   if (data.message) {
    //     this.setState({
    //       message: data.message,
    //     })
    //   }
    // });

    // if (title.length <5 ) {
    //     this.setState ({ 
    //     message: 'Please enter a longer title'
    //   })
    // }

    if (this.state.image || !this.state.imageSelected){
      console.log(image)
    axios.post("/api/events", {    
      title:title,
      date:date,
      startTime: startTime,
      endTime:endTime,
      owner: this.props.user._id,
      description: description,
      image:image,
      imagePublicID: publicID,
      googleLink: googleLink,
    })
      .then( (event) => {
        console.log(event.data , "fetch event")
        this.props.refreshData();
        this.setState({
          message:`Event created!`
        })
      }).catch( err => {
        console.log(err);
     })
    } else {
      this.setState({
        submitted: true
      })
    }
    this.props.history.push("/events");
    // this.props.history.push(`/events/${this.props.events._id}`);
      
  }; //handleSubmit end

  // userProfileData (something).then (data => {
  //   if (data.message) {
  //     this.setState({
  //       message: data.message,
  //     });
  
  
  

  render() {
    console.log(this.props)
    console.log(`message`, this.state.message)
    return (
       <div class="centerAuth">
            
            <Container>
              <div class="boxOn">
                <h1>Create an Event</h1>
                <p className="error">
                  Message: {this.state.message}
                </p>
    
                <div> 
               
                  <Form onSubmit={this.handleSubmit}> 
                    <Form.Group as={Row}>
                        <Form.Label htmlFor="title"> Event title: </Form.Label>
                          <Form.Control 
                            type="text" 
                            name="title" 
                            id="title" 
                            // placeholder="Event Title"
                            value={this.state.title} 
                            onChange={this.handleChange}
                            // size="lg"
                          />
                    </Form.Group>      

                    <Form.Group as={Row}>
                      <Form.Label htmlFor="date">Event date:</Form.Label>
                        <Form.Control 
                            type="date" 
                            name="date" 
                            id="date" 
                            // placeholder="Date of event"
                            value={this.state.date}
                            onChange={this.handleChange}
                              
                          />
                    </Form.Group>

                    <Row>
                      <Col>
                        <Form.Group as={Row}>
                          <Form.Label htmlFor="startTime "> Start time: </Form.Label>
                            <Form.Control 
                              type= "time" 
                              name="startTime" 
                              id="startTime" 
                              value={this.state.startTime}  
                              onChange={this.handleChange}
                            />
                        </Form.Group>
    
                      </Col>
                      <Col></Col>
                      <Col></Col>
                      </Row>

                      <Row>
                      <Col>
                        <Form.Group as={Row}>
                            <Form.Label htmlFor="endTime" > End time: </Form.Label>
                            <Form.Control 
                              type="time"
                              name="endTime"
                              id="endTime"
                              value={this.state.endTime}
                              onChange={this.handleChange}
                              />
                        </Form.Group>
                      </Col>
                      <Col></Col>
                      <Col></Col>
                    </Row>

                    <Row>
                      <Col>
                      	<Form.Group as={Row}>
                      	    <Form.Label htmlFor="maxCapacity"> Maximum capacity: </Form.Label>
                      	      <Form.Control 
                      	        type="number"
                      	        name="maxCapacity" 
                      	        id="maxCapacity"
                      	        value={this.state.maxCapacity}
                      	        onChange={this.handleChange}
                      	      />
                      	    </Form.Group>
                      </Col>
                      <Col></Col>
                      <Col></Col>
                    </Row>

                        {/* <label htmlFor="owner">Hosted by:  </label>
                        <input 
                        type="text" 
                        name="owner" 
                        id="owner"
                        value={this.state.owner}
                        onChange={this.handleChange}/>
                        <br/> */}

                    <Form.Group as={Row}>
                        <Form.Label htmlFor="description">Description: </Form.Label>
                          <Form.Control as="textarea" rows={3}
                            type="text"
                            height="20px"
                            name="description"
                            id="description"
                            value={this.state.description}
                            onChange={this.handleChange}
                          />
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label htmlFor="googleLink">Add Google link: </Form.Label>
                          <Form.Control 
                            type="link"
                            name="googleLink"
                            id="googleLink"
                            value={this.state.googleLink}
                            onChange={this.handleChange} 
                            />
                    </Form.Group>

                    <div className="profileImageUpload">
                      <Form.Group >
                          <Form.Label hmtlFor="image" >Upload an image: </Form.Label>
                          <div class="profileImageUploadContainer">
                              <Form.Control 
                                type="file"
                                name="image"
                                id="image"
                                onChange={this.handleFileUpload}
                                // class="profileImageUpload"
                              />
                            </div>
                      </Form.Group>      
                    </div>
                          <br />
                          <Button type='submit'> 
                            Add your event! 
                          </Button>
                      
                  </Form>
                </div>
              </div>
            </Container>
      </div>
    );
  }
}
    
  



