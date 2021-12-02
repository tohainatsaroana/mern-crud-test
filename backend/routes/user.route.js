let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();


let userSchema = require('../models/User');

// Micreer USER
router.route('/create-user').post((req, res, next) => {
  userSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// miREAD USER
router.route('/').get((req, res) => {
  userSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// 
router.route('/edit-user/:id').get((req, res) => {
  const idTypeOj = mongoose.Types.ObjectId(req.params.id)
  userSchema.findById(idTypeOj, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// MODIFIER USER iray 
router.route('/update-user/:id').put((req, res, next) => {
  const idTypeOj = mongoose.Types.ObjectId(req.params.id)
  userSchema.findByIdAndUpdate(idTypeOj, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('User modifier !')
    }
  })
})

// MAMAFA USER
router.route('/delete-user/:id').delete((req, res, next) => {

  console.log("testa")
  userSchema.findByIdAndRemove(req.params.id, (error, data) => {

    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;