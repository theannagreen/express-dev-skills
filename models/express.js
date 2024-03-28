const todos = [
  { id: 125223, todo: 'Finish Express Skills Lab Pt 1', done: true },
  { id: 127904, todo: 'Finish Express Skills Lab Pt 2', done: false },
  { id: 139608, todo: 'Update GitHub', done: false }
];

module.exports = {
  getAll,
  getOne
};

function getOne(id) {
  // URL params are strings - convert to a number
  id = parseInt(id);
  // The Array.prototype.find iterator method is
  // ideal for finding objects within an array
  return todos.find(todo => todo.id === id);
}

function getAll() {
  console.log(todos);
  return todos;
}