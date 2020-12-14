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
        index!
        Hello {this.state.username}

      </div>
    )
  }
}