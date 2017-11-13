require('dotenv').config()
const jwt = require('jsonwebtoken')
const key = process.env.JWT_SECRET

const hasLogin = (req, res, next) => {
  jwt.verify(req.headers.token, key, (err, decoded) => {
    if (err) {
      console.log('ini error lho ', err)
    } else {
      req.headers = decoded
      console.log('ini terauthentikasi ', req.headers)
      next()
    }
  })
}

const isAdmin = (req, res, next) => {
  if (req.headers.isAdmin) {
    next()
  } else {
    res.send({message: 'User is not Admin'})
  }
}

module.exports = {
  hasLogin,
  isAdmin
}