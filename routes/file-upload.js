const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Event = require('../models/Event');

const { uploader } = require('../configs/cloudinary');

router.post('/', uploader.single("image"), (req, res, next) => {
  console.log('file is: ', req.file)
  console.log('public id: ', req.file.filename);
  if (!req.file) {
    next(new Error('No file uploaded!'));
    return;
  }

  res.json({ secure_url: req.file.path, public_id: req.file.filename });
})

module.exports = router;