require('dotenv').config()
const User = require('../models/users')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const FB = require('fb')
const key =  process.env.JWT_SECRET

const getAllUsers = (req, res) => {
  User.find()
  .then(userData => {
    res.status(200).send(userData)
  })
  .catch(err => res.status(500).send(err))
}

const findOneUser = (req, res) => {
  User.findById(req.params.id)
  .then(user => {
    res.status(200).send({
      message: 'This is what you want?',
      user
    })
  })
  .catch(err => res.status(500).send(err))
}

const signUpUser = (req, res) => {
  let user = new User({
    name: req.body.name,
    username: req.body.username,
    password: req.body.password
  })
  user.save()
  .then(newUser => {
    res.status(200).send({
      message: 'New User is coming',
      newUser
    })
  })
  .catch(err=> res.status(500).send(err))
}

const signInUser = (req, res) => {
  User.findOne({username: req.body.username})
  .then(userData => {
    if (bcrypt.compareSync(req.body.password, userData.password)) {
      let payload = {
        id: userData._id,
        name: userData.name,
        username: userData.username,
        isAdmin: userData.isAdmin
      }
      let token = jwt.sign(payload, key)
      console.log('Sukses login');
      res.status(201).send({message: 'User has succesfully login', token})
    } else {
      console.log('gagal login');
      res.status(401).send({message: 'password or username not valid'})
    }
  })
  .catch(err=> {
    console.log('belum daftar');
    res.status(500).send(err)
  })
}

const setFBAccessToken = (req, res, next) => {
  console.log('====================================');
  console.log(req.headers.fb_accesstoken);
  console.log('====================================');
  FB.setAccessToken(req.headers.fb_accesstoken)
  next()
}

const signInFB = (req, res) => {
  console.log('masuk signin FB gak?')
  FB.api('/me', { fields: ['id', 'name', 'email']}, function (response) {
    console.log(response)
    User.findOne({email: response.email})
    .then(result => {
      console.log('jadi sukses dicari gak? ',result);
      if (!result) {
        let user = new User({
          fbID: response.id,
          name: response.name,
          username: '',
          password: '',
          email: response.email
        })
        user.save()
        .then(newUser => {
          console.log('masuk sini gak? ',newUser);
          let token = jwt.sign({
            _id: newUser._id,
            fbID: newUser.fbID,
            name: newUser.name,
            email: newUser.email
          }, key)
          res.status(200).send({
            message: 'User use FB Login',
            token
          })
        })
      } else {
        let token = jwt.sign({
          _id: result._id,
          fbID: result.fbID,
          name: result.name,
          email: result.email
        }, key)
        res.status(200).send({
          message: 'This user has sign in before',
          token
        })
      }
    })
    .catch(err => {
      console.log('masuk error ya? ', err);
      res.status(500).send(err)
    })
  })
}

const updateUser = (req, res) => {
  User.findByIdAndUpdate(req.params.id,
    {
      $set:{
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
        isAdmin: req.body.isAdmin
      }
    }
  )
  .then(newData => {
    res.status(200).send({
      message: 'An user has been updated',
      newData
    })
  })
  .catch(err => res.status(500).send(err))
}

const deleteUser = (req, res) => {
  User.findByIdAndRemove(req.params.id)
  .then(removeUser => {
    res.status(200).send({
      message: 'One user has been remove',
      removeUser
    })
  })
  .catch(err => res.status(500).send(err))
}

module.exports = {
  getAllUsers,
  signUpUser,
  signInUser,
  updateUser,
  deleteUser,
  findOneUser,
  setFBAccessToken,
  signInFB
}
