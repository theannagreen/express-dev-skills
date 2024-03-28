var express = require('express');
var router = express.Router();
var expressCtrl = require('../controlers/express');

/* GET home page. */
router.get('/', function(req, res, next) {
  var todos = expressCtrl.getAll();
  res.render('index', { title: 'Express To-Dos' });
});

module.exports = router;
