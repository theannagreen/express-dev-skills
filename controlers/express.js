// controllers/express.js
const Todo = require('../models/express');

module.exports = {
  index
};

function index(req, res) {
  res.render('express/index', {
    todos: Todo.getAll()
  });
}
