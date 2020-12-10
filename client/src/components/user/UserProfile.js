import React, { Component } from 'react';
import './UserProfile.css';

export default class UserProfile extends Component {
  render() {
    return (
      <div class="userProfile">
        its-a me!
        <p>
          <img src="https://cdn.vox-cdn.com/thumbor/6ur6WKC8RG9cOP-ZA6rbkwfeaPU=/0x0:1700x960/920x518/filters:focal(714x344:986x616):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/57514059/mario.0.jpg" alt="mario"/>
        </p>
      </div>
    )
  }
}
