const router = require('express').Router();
let Item = require('../models/item.model');

router.route('/:id').get((req, res) => {
  item.find()
    .then( item => res.json(req.body.item))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/list').post((req, res) => {


  const item = req.body;

  const newItem = new Item({item});

  newItem.save()
    .then(() => res.json(item))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;