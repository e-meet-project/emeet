const express = require ('express')
const router = express.Router()
const Event = require ('../models/Event')

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


module.exports = router;