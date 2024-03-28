const todos = [
  { id: 125223, todo: 'Finish Express Skills Lab Pt 1', done: true },
  { id: 127904, todo: 'Finish Express Skills Lab Pt 2', done: false },
  { id: 139608, todo: 'Update GitHub', done: false }
];

module.exports = {
  getAll,
  getOne
};

function getAll() {
  return todos;
}

function getOne(id) {
  id = parseInt(id);
  return todos.find(todo => todo.id === id);
}


