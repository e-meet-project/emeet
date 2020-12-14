const express = require ('express')
const router = express.Router()
const Event = require ('../models/Event')

router.get('/', (req, res, next) => {
  Event.find()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.json(err);
    })

});

// get a specfic project
// to check if id is a valid mongo object id: mongoose.Types.ObjectId.isValid(_id)
router.get('/:id', (req, res, next) => {
  Event.findById(req.params.id)
    .then(event => {
      if (!event) {
        console.log('no project');
        res.status(404).json(project);
      } else {
        res.status(200).json(project);
      }
    })
    .catch(err => {
      res.json(err);
    })
});

// create a project
router.post('/', (req, res) => {
  const {     title,
    date,
    time,
    maxcapacity,
    hostedby,
    description,
    img,
    googlelink } = req.body;
  const owner = req.user._id;
  Event.create({
    title,
    date,
    time,
    maxcapacity,
    hostedby,
    description,
    img,
    googlelink
  })
    .then(event => {
      res.status(201).json(event);
    })
    .catch(err => {
      res.json(err);
    })
})

// update a project
router.put('/:id', (req, res, next) => {
  const { title,date, time, maxcapacity, hostedby, description, img, googlelink } = req.body;
  Event.findByIdAndUpdate(
    req.params.id,
    { title,date, time, maxcapacity, hostedby, description, img, googlelink },
    // this ensures that we are getting the updated document as a return 
    { new: true }
  )
    .then(event => {
      console.log(event);
      res.status(200).json(event);
    })
    .catch(err => {

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