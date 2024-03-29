var express = require('express');
var router = express.Router();

// require the controller that exports express CRUD functions 
var todosCtrl = require('../controllers/todos');
// const todosCtrl = require('../controllers/todos');

// get /todos
router.get('/', todosCtrl.index);

// get /todos/new -- define before SHOW 
router.get('/new', todosCtrl.new);

// get /todos/:id
router.get('/:id', todosCtrl.show);

//get /todos/:id/edit
router.get('/:id/edit', todosCtrl.edit);

// post /todos
router.post('/', todosCtrl.create); 

// delete /todos/:id
router.delete('/:id', todosCtrl.delete);

//put /skills/:id
router.put('/:id, todosCtrl.update')

module.exports = router;

