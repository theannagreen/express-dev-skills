// controllers/express.js
const Todo = require('../models/express');

module.exports = {
  index,
  show
};

function show(req, res) {
  res.render('express/show', {
    todo: Todo.getOne(req.params.id),
  });
}

function index(req, res) {
  res.render('express/index', {
    todos: Todo.getAll()
  });
}
