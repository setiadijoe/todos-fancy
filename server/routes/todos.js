const express = require('express')
const router = express.Router()
const Todo = require('../controllers/todos')
const Auth = require('../helpers/auth')

router.get('/', Auth.hasLogin, Todo.getAllTodos)
router.post('/', Auth.hasLogin, Todo.createTodo)
router.put('/:id', Auth.hasLogin, Todo.updateTodo)
router.delete('/:id', Auth.hasLogin, Todo.removeTodo)

module.exports = router