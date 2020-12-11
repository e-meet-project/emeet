import React, { Component } from 'react'
// import Navbar from './navbar/Navbar'
import App from '../App'; 

// export default function Homepage (props) {


//   console.log(`props's`, props)
//   return (
//     <div>
//       <div>

//         index!
//         {/* {user.username} */}
//         {/* Hello {props} */}

//       </div>
//     </div>
//   )
// }

export default class Index extends React.Component {

  state = {
    user : this.props
  }

  render() {
    console.log( `homepage props:`, this.state.user)
    return (
      <div>
        index!
        Hello {this.state.username}

      </div>
    )
  }
}
<<<<<<< HEAD

// import React from 'react'

=======
>>>>>>> 36f7e265a7aaf7a5e18e1edd082dffb28ccaec57
