const Todo = require('../models/property');

module.exports = {
    show,
    new: newTodo,
    create,
    delete: deleteTodo,
    edit,
  };
  
async function newTodo(req, res){
  try {
    const todos = await Todo.findById(req.params.id);
    res.redirect(`/todos/${todos._id}`);
  } catch (err) {
    console.log(err);
    res.render('todos/new', { errorMsg: err.message });
  }
}
async function create(req, res) {
  try {
    const todos = await Todo.findById(req.params.id);
    res.redirect(`/todos/${todos._id}`);
  } catch (err) {
    console.log(err);
    res.render('todos/new', { errorMsg: err.message });
  }
}

async function edit(req, res) {
  const todo = Todo.getOne(req.params.id);
  res.render("todos/edit", {
    title: "Edit todo",
    todo,
  });
}

async function create(req, res) {
  try {
    const todos = await Todo.findById(req.params.id);
    res.redirect(`/todos/${todos._id}`);
  } catch (err) {
    console.log(err);
    res.render('todos/new', { errorMsg: err.message });
  }
}

async function show(req, res) {
  const todos = await Todo.findById(req.params.id);
  res.render('todos/show', { todos });
}

async function update(req, res) {
  req.body.done = !!req.body.done;
  Todo.update(req.params.id, req.body);
  res.redirect(`/properties/${req.params.id}`);
}

async function deleteTodo(req, res){
  Todo.deleteOne(req.params.id);
  res.redirect(`/todos/${id}`);
};

// async function create(req, res) {
//   try {
//       const todos = await Todo.findById(req.params.id)
//       res.render({todos})
//       res.redirect(`todos/${todos._id}`);  
//     } catch (err) {
//       console.log(err);
//       res.render('to-dos/new', { errorMsg: err.message });
//     }
//   }
