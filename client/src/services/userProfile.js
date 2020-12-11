//userprofile example - added dec 11 EOD
import axios from 'axios';

<<<<<<< HEAD

=======
>>>>>>> 36f7e265a7aaf7a5e18e1edd082dffb28ccaec57
const userProfileData = (event ) => {
  return axios
    .get('/api/user', { event,})
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err.response.data;
    });
};

export { userProfileData };

<<<<<<< HEAD
//on the component - import { userProfileData } from '../../services/userProfile' 
=======
//on the component - import { userProfileData } from '../../services/userProfile'
>>>>>>> 36f7e265a7aaf7a5e18e1edd082dffb28ccaec57
