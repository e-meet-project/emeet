import React, { Component } from 'react'


export default class createEvent extends Component {

  render() {
    return (
        <div>
            <form>
                <label htmlFor="title"> Event title </label>
                <input type="text" title="title" id="title"/>
                <br/>
                <label htmlFor="date">Event date</label>
                <input type="text" name="date" id="date"/>
                <br/>
                <label htmlFor="time">Event time </label>
                <input type= "number" name="time" id="time"/>
                <br/>
                <label htmlFor="maxcapacity"> Maximum capacity </label>
                <input type="number" name="maxcapacity" id="maxcapacity"/>
                <br/>
                <label htmlFor="hostedby">Hosted by: </label>
                <input type="text" name="hostedby" id="hostedby"/>
                <br/>
                <label htmlFor="description">Description</label>
                <input type="text" name="description" id="description"/>
                <br/>
                <label hmtlFor="img" >Upload an image </label>
                <input type= "file" name="img" id="img" accept="image/*"></input>
                <label htmlFor="googlelink">Add Google link</label>
                <input type="link" name="googlelink" id="googlelink"/>
                <br/>
                <button type='submit'> Add your event! </button>
            </form>
        </div>
    )
}

}

