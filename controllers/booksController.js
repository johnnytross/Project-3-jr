const db = require('../models');

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    if (!req.headers.authorization) {
      res.send({ authorized: false });
    }
    db.Recipe.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => {
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    console.log('route hit')
    console.log(req.params.id)
    db.Recipe.find({userName: req.params.id})
      .then(dbModel => {
      console.log('log')
      console.log(dbModel)
      res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  findByuserName: function(req, res) {
    db.Recipe.findByuserName(req.params.userName)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log('post route')
    db.Recipe.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Recipe.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Recipe.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
