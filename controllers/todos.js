import { ToDo } from "../models/to-do.js";

function newToDo(req, res) {
  res.render('todos/new')
}

function create(req, res) {
  req.body.done = !!req.body.done
  const todo = new ToDo(req.body)
  todo.save(function(err) {
    if (err) return res.redirect('/todos/new')
    res.redirect('/todos/new')
  })
}

export {
  newToDo as new,
  create,
}