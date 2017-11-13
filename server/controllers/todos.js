const Todo = require('../models/todos')

const getAllTodos = (req, res) => {
  Todo.find()
  .populate('user_id')
  .then(data => {
    res.status(200).send(data)
  })
  .catch(err => res.status(400).send(err))
}

module.exports = {
  getAllTodos
}