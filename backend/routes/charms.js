const router = require('express').Router();

let Charm = require('../models/charm.model');

router.route('/').get((req,res) => {
  Charm.find()
    .then(charm=>res.json(charm))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Charm.findByIdAndDelete(req.params.id)
    .then(charm => res.json('Exercise Delete'))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req,res)=>{
  const newCharm = req.body;
  Charm.create(newCharm,(err,data)=>{
    if(err){
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  })
});



module.exports = router;