const Todo = require('../models/todos')

const getAllUsersTodos = (req, res) => {
  Todo.find()
  .populate('user_id')
  .then(data => {
    res.status(200).send(data)
  })
  .catch(err => res.status(500).send(err))
}

const getAllTodos = (req, res) => {
  Todo.find({user_id: req.headers.id})
  .populate('user_id')
  .then(data => {
    res.status(200).send(data)
  })
  .catch(err => res.status(500).send(err))
}

const createTodo = (req, res) => {
  console.log('=============INI BODY nya ==========');
  console.log(req.body);
  console.log('====================================');
  let todo = new Todo({
    user_id: req.headers.id,
    todo_name: req.body.todo_name
  })
  todo.save()
  .then(newTodo => {
    res.status(200).send({
      message: 'New Todo has been added',
      newTodo
    })
  })
  .catch(err => {
    console.error(err)
    res.status(500).send(err)
  })
}

const updateTodo = (req, res) => {
  Todo.findByIdAndUpdate(req.params.id, {
    $set: {
      isfinished: req.body.isfinished,
      updatedAt: req.body.updatedAt
    }
  }, { new: true })
  .then(todosData => {
    res.status(201).send({
      message: 'todo has been update',
      todosData
    })
  })
  .catch(err =>{
    console.log('salah yang ini?'); 
    res.status(500).send(err)
  })
}

const removeTodo = (req, res) => {
  Todo.findByIdAndRemove(req.params.id)
  .then(deletedTodo => {
    res.status(200).send({
      message: 'This todo has been deleted',
      deletedTodo
    })
  })
  .catch(err => res.status(500).send(err))
}

module.exports = {
  getAllTodos,
  createTodo,
  updateTodo,
  removeTodo
}