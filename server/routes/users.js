var express = require('express');
var router = express.Router();
const User = require('../controllers/users')
const Auth = require('../helpers/auth')

router.get('/', Auth.hasLogin, Auth.isAdmin, User.getAllUsers)
router.get('/:id', Auth.hasLogin, User.findOneUser)
router.post('/', Auth.hasLogin, Auth.isAdmin, User.signUpUser)
router.post('/signup', User.signUpUser)
router.post('/signin', User.signInUser)
router.put('/:id', Auth.hasLogin, User.updateUser)
router.delete('/:id', Auth.hasLogin, Auth.isAdmin, User.deleteUser)

module.exports = router;
