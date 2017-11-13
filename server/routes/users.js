var express = require('express');
var router = express.Router();
const User = require('../controllers/users')
const Auth = require('../helpers/auth')

router.get('/', Auth.hasLogin, Auth.isAdmin, User.getAllUsers)
router.post('/signup', User.signUpUser)
router.post('/signin', User.signInUser)
router.put('/:id', Auth.hasLogin, User.updateUser)

module.exports = router;
