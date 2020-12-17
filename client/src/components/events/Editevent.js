import React, { Component } from 'react'
import '../../components/auth/auth.css'
import { Form, Button, Alert, Container, Row, Col } from 'react-bootstrap';

export default class Editevent extends Component {
  

  render() {
    return (
      
      <div class="centerAuth">

        <Container>
        
            <div class="boxOn">
              <h2> Edit your event </h2>

              <Form onSubmit={this.props.handleSubmit}>
                <Form.Group as={Row}>
                  <Form.Label htmlFor="title"> Event title: </Form.Label>
                  <Form.Control  
                      type="text" 
                      name="title" 
                      id="title" 
                    
                      value={this.props.title} 
                      onChange={this.props.handleChange}  
                    />
                </Form.Group>

 
                <Form.Group as={Row}>
                  <Form.Label htmlFor="date">Event date:</Form.Label>
                    <Form.Control 
                      type="date" 
                      name="date" 
                      id="date" 
                      value={this.props.date}
                      onChange={this.props.handleChange}
                        
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
                            value={this.props.startTime}  
                            onChange={this.props.handleChange}
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
                          value={this.props.endTime}
                          onChange={this.props.handleChange}
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
                            value={this.props.maxCapacity}
                            onChange={this.props.handleChange}
                          />
                        </Form.Group>
                  </Col>
                  <Col></Col>
                  <Col></Col>
                </Row>

                <Form.Group as={Row}>
                  <Form.Label htmlFor="description">Description: </Form.Label>
                    <Form.Control as="textarea" rows={3}
                      type="text"
                      height="20px"
                      name="description"
                      id="description"
                      value={this.props.description}
                      onChange={this.props.handleChange}
                    />
                </Form.Group>

                <Form.Group as={Row}>
                  <Form.Label htmlFor="googleLink">Add Google link: </Form.Label>
                    <Form.Control 
                      type="link"
                      name="googleLink"
                      id="googleLink"
                      value={this.props.googleLink}
                      onChange={this.props.handleChange}
                      />
                </Form.Group>

                <div className="profileImageUpload">
                  <Form.Group >
                      <Form.Label hmtlFor="image" >Upload an image: </Form.Label>
                        <div class="profileImageUploadContainer">
                            <Form.Control 
                              type= "file"
                              name="image"
                              id="image"
                              accept="image/*"
                              class="profileImageUpload"
                            />
                          </div>
                  </Form.Group>      
                </div>
                  <br />
                  <Button type='submit'> 
                    Edit your event 
                  </Button>
                
              </Form>
            </div>
        </Container>
      </div>
    );
  }
}
    
  




