import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';

//authentication - added dec 11 @ 11
// import * as serviceWorker from './serviceWorker';
import axios from 'axios'

axios.get('/api/auth/loggedin')

  .then(response => {

    const user = response.data;
    console.log(user)
    
    ReactDOM.render(
      <Router>
        <App user={user} />
      </Router>,
      document.getElementById('root')
    );
  });
//==========================================================

// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//       <App />
//     </Router>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
