import { ToDo } from "../models/to-do.js";

function newToDo(req, res) {
  res.render('todos/new')
}

function create(req, res) {
  req.body.done = !!req.body.done
  const todo = new ToDo(req.body)
  todo.save(function(err) {
    if (err) return res.redirect('/todos/new')
    res.redirect('/todos')
  })
}

function index(req, res) {
  ToDo.find({}, function (error, todos) {
    console.log(error)
    res.render('todos/index', {
      error: error,
      todos: todos,
      title: 'Your To Dos:',
    })
  })
}

function show(req, res) {
  ToDo.findById(req.params.id, function (err, todo) {
    res.render('todos/show', {
      title: 'To Do Details',
      todo: todo
    })
  })
}

function deleteToDo(req, res) {
  ToDo.findByIdAndDelete(req.params.id, function(err, todo) {
    res.redirect('/todos')
  })
}

function edit(req, res) {
  ToDo.findById(req.params.id, function(err, todo) {
    res.render('todos/edit', {
      todo,
      err, 
      title: "Edit To Do"
    })
  })
}

function update(req, res) {
  req.body.done = !!req.body.done
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  ToDo.findByIdAndUpdate(req.params.id, req.body, function(err, todo) {
    res.redirect(`/todos/${todo._id}`)
  })
}

export {
  newToDo as new,
  create,
  index,
  show,
  deleteToDo as delete,
  edit,
  update,
}