var express = require('express');
var router = express.Router();
// require the controller that exports express CRUD functions 
var expressCtrl = require('../controlers/express');
// all actual paths start with "/express"

router.get('/', expressCtrl.index);

module.exports = router;

