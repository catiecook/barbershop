var express = require('express');
var router = express.Router();
var request = require('request');
require('dotenv').config();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

exports.partials = function(req,res) {
  res.render('partials/' + req.params.name);
};

module.exports = router;
