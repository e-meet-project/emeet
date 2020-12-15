const express = require ('express')
const router = express.Router()
const Event = require ('../models/Event');
const User = require('../models/User');

// console.log(`kevin says hi`)

router.get('/', (req, res, next) => {

  Event.find()
  
  .then( events => {
      console.log(events);
      return res.status(200).json(events);
    })
    .catch(err => {
      return res.status(500).json(err);
    })

});

// get a specfic project
// to check if id is a valid mongo object id: mongoose.Types.ObjectId.isValid(_id)
router.get('/:id', (req, res, next) => {
  Event.findById(req.params.id)
    .then( event => {
      if ( !event ) {
        console.log('no project');
        return res.status(404).json(event);
      } else {
        return res.status(200).json(event);
      }
    })
    .catch(err => {
      return res.status(500).json(err);
    })
});

// create a project
router.post('/', (req, res) => {
  const {    
    title,
    date,
    owner,
    startTime,
    endTime,
    description,
    image,
    maxCapacity,
    googleLink } = req.body;
    console.log(req.body, "this is from backend");
  // const owner = req.user._id;
  Event.create({
    title,
    date,
    startTime,
    owner,
    endTime,
    description,
    image,
    googleLink,
    maxCapacity
  })
    .then(event => {
      User.findByIdAndUpdate (owner, {$push:{eventsCreated:event._id}}).then (user => {
      console.log(event, "this is db")
      return res.status(201).json(event);
      });
    })
    .catch(err => {
      return res.status(500).json(err);
    })
})

// update a project
router.put('/:id', (req, res, next) => {
  const { title,date, startTime,endTime, description, image, googleLink, maxCapacity } = req.body;
  Event.findByIdAndUpdate(
    req.params.id,
    { title,date, startTime, endTime, description, image, googleLink, maxCapacity },
    // this ensures that we are getting the updated document as a return 
    { new: true }
  )
    .then(event => {
      console.log(events);
      return res.status(200).json(event);
    })
    .catch(err => {
      return res.status(500).json(err);
    })
});

router.delete('/:id', (req, res, next) => {
  Event.findByIdAndDelete(req.params.id)
    .then(event => {
      res.status(200).json({ message: 'ok' })
    })
    .catch(err => {
      res.json(err);
    })
});




module.exports = router;
