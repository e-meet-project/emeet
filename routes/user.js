const express = require('express');
const router  = express.Router();
const User = require('../models/User');


router.get('/:id', (req, res, next) => {
  
    User.findById(req.params.id)
    .populate('eventsAttended')
      .then( user => {
        if ( !user ) {
          console.log('no project');
          res.status(404).json(user);
        } else {
          res.status(200).json(user);
        }
      })
      .catch(err => {
        res.json(err);
      })
  });

module.exports = router;
