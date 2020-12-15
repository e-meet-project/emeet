//userprofile example - added dec 11 EOD
import axios from 'axios';

const userProfileData = (event ) => {
  return axios
    .get('/api/user', { event})
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err.response.data;
    });
};

// export { userProfileData };

//on the component - import { userProfileData } from '../../services/userProfile'
