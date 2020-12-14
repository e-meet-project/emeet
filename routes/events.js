const express = require ('express')
const router = express.Router()
const Event = require ('../models/Event');
const User = require('../models/User');

// console.log(`kevin says hi`)

router.get('/', (req, res, next) => {

  Event.find()
  
  .then( event => {
      console.log(event)
      res.status(200).json(event);
    })
    .catch(err => {
      res.json(err);
    })

});

// get a specfic project
// to check if id is a valid mongo object id: mongoose.Types.ObjectId.isValid(_id)
router.get('/:id', (req, res, next) => {
  Event.findById(req.params.id)
    .then( event => {
      if ( !event ) {
        console.log('no project');
        res.status(404).json(event);
      } else {
        res.status(200).json(event);
      }
    })
    .catch(err => {
      res.json(err);
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
    googleLink
  })
    .then(events => {
      User.findByIdAndUpdate (owner, {$push:{eventsCreated:events._id}}).then (user => {
      console.log(event, "this is db")
      res.status(201).json(events);
      });
    })
    .catch(err => {
      res.json(err);
    })
})

// update a project
router.put('/:id', (req, res, next) => {
  const { title,date, startTime,endTime, description, image, googleLink } = req.body;
  Event.findByIdAndUpdate(
    req.params.id,
    { title,date, startTime, endTime, description, image, googleLink },
    // this ensures that we are getting the updated document as a return 
    { new: true }
  )
    .then(events => {
      console.log(events);
      res.status(200).json(events);
    })
    .catch(err => {

    })
});

router.delete('/:id', (req, res, next) => {
  Event.findByIdAndDelete(req.params.id)
    .then(events => {
      res.status(200).json({ message: 'ok' })
    })
    .catch(err => {
      res.json(err);
    })
});




module.exports = router;
