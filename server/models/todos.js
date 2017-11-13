const mongoose = require('mongoose');
const Schema = mongoose.Schema

const todoSchema = new Schema({
  user_id : {
    type: Schema.Types.ObjectId,
    ref: 'Users'
  },
  todo_name : {
    type: String,
    required: [true, 'input your todo']
  },
  isfinished : {
    type: Boolean,
    default: false
  }
})

const Todo = mongoose.model('Todos', todoSchema)

module.exports = Todo