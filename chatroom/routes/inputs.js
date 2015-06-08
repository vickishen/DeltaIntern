var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var inputMsg = require('../models/inputMsg.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  inputMsg.find(function (err, inputs) {
    if (err) return next(err);
    res.json(inputs);
  });  
});

/* POST /todos */
router.post('/', function(req, res, next) {
  inputMsg.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /todos/:id 某個id的服務 */
router.get('/:id', function(req, res, next) {
  inputMsg.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /todos/:id */
router.put('/:id', function(req, res, next) {
  inputMsg.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /todos/:id */
router.delete('/:id', function(req, res, next) {
  inputMsg.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
