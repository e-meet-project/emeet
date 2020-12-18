import axios from 'axios';

const errorHandler = err => {
  // console.error(err);
  throw err;
};
const Axios = axios.create({
  baseURL: 'http://localhost:3000',
  /* other custom settings */
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  handleUpload(file) {
    console.log('file to be handled: ', file);
    return Axios.post('api/upload', file)
      .then(res => res.data)
      .catch(errorHandler);
  }
}