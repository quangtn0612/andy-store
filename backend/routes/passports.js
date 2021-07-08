const router = require('express').Router();

let Passport = require('../models/passport.model');

router.route('/').get((req,res) => {
  Passport.find()
    .then(passport=>res.json(passport))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Passport.findByIdAndDelete(req.params.id)
    .then(passport => res.json('Exercise Delete'))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req,res)=>{
  const newPassport = req.body;
  Passport.create(newPassport,(err,data)=>{
    if(err){
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  })
});

module.exports = router;