import React from 'react'
// import Navbar from './navbar/Navbar'
// import App from '../App'; 

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

export default class Homepage extends React.Component {

  state = {
    user : this.props
  }

  render() {
    // console.log( `homepage props:`, this.state.user)
    return (
      <div>
        index, now called homepage!
        <p>
          <a href="/events">See all events</a>
        </p>
        <p>
          <button><a href="/signup"> Signup</a></button> <button><a href="/login"> Login</a></button>
        </p>
        
        <p>
          Welcome {this.props.username} !
        </p>

      </div>
    )
  }
}
