const Todo = require('../models/todos');

function index(req, res) {
  let todos = Todo.getAll()
  console.log(todos)
  res.render('todos/index', {
    todos: todos,
    title: 'All To-Dos'
  });
}

function newTodo(req, res) {
  res.render('todos/new', { title: 'New Todo'});
}

function show(req, res) {
  res.render('todos/show', {
    todo: Todo.getOne(req.params.id),
    title: 'To-Do Details'
  });
}
function create(req, res) {
  console.log(req.body);
  Todo.create(req.body);
  res.redirect('/todos');
}

function deleteTodo(req, res) {
  Todo.deleteOne(req.params.id);
  res.redirect('/todos');
}

function edit(req, res) {
  const todo = Todo.getOne(req.params.id);
  res.render('todos/edit', { todo, title: 'Edit Todo', id: req.params.id});
}

function update(req, res) {
  req.body.level = !!req.body.level ? 'Done' : 'Almost Done';
  Todo.update(req.params.id, req.body);
  res.redirect('/todos/${req.params.id}');
}

module.exports = {
  index,
  show,
  new: newTodo,
  create,
  delete: deleteTodo,
  edit,
  update
};

