const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  fbID: {
    type: String
  },
  username: {
    type: String
  },
  password: {
    type: String
  },
  email: {
    type: String
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
})

userSchema.pre('save', function (next) {
  console.log(this.password)
  let hash = bcrypt.hashSync(this.password, 10)
  this.password = hash
  console.log('sudah dienkripsi :', this.password)
  next()
})

const User = mongoose.model('Users', userSchema)

module.exports = User