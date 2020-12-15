const express = require('express');
const router  = express.Router();
const User = require('../models/User');


router.get('/:id', (req, res, next) => {
  
    User.findById(req.params.id)
    .populate('eventsAttended')
    .populate('eventsCreated')
      .then( user => {
        if ( !user ) {
          console.log('no user');
          return res.status(404);
        } else {
          return res.status(200).json(user);
        }
      })
      .catch(err => {
        return res.status(500).json(err);
      })
  });

module.exports = router;
