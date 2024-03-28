const Todo = require('../models/todos');

function index(req, res) {
  let todos = Todo.getAll()
  console.log(todos)
  res.render('todos/index', {
    todos: todos
  });
}

function show(req, res) {
  res.render('todos/show', {
    todo: Todo.getOne(req.params.id),
  });
}

module.exports = {
  index,
  show
};

