//authentication - added dec 11 @ 11
import axios from 'axios';

const signup = (username, password, profileImage) => {
  return axios
    .post('/api/auth/signup', { username, password, profileImage })
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err.response.data;
    });
};

<<<<<<< HEAD
const login = (username, password, profileImage) => {
  return axios
    .post('/api/auth/login', { username, password, profileImage })
    .then(response => {
      return response.data;
    })
    .catch(err => {
=======
const login = (username, password) => {
  return axios
    .post('/api/auth/login', { username, password })
    .then(response => {
      console.log( `services`,response.data)
      return response.data;
    })
    .catch(err => {
      console.log(`service err`, err.response.data)
>>>>>>> 36f7e265a7aaf7a5e18e1edd082dffb28ccaec57
      return err.response.data;
    });
};

const logout = () => {
  return axios
    .delete('/api/auth/logout')
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err.response.data;
    });
};

export { signup, login, logout };