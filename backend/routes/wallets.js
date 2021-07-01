const router = require('express').Router();

let Wallet = require('../models/wallet.model');

router.route('/').get((req,res) => {
  Wallet.find()
    .then(wallets=>res.json(wallets))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Wallet.findByIdAndDelete(req.params.id)
    .then(wallet => res.json('Exercise Delete'))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req,res)=>{
  // const src = req.body.src;
  // const newWallet = new Wallet({src});
  // newWallet.save()
  // .then(()=>res.json('User add!'))
  // .catch(err=>res.status(400).json('Error: ' + err))
  const newWallet = req.body;
  Wallet.create(newWallet,(err,data)=>{
    if(err){
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  })
});



module.exports = router;