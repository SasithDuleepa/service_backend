const express = require('express');
const Signup = require('../routFunc/UserFunc/signup');
const Signin = require('../routFunc/UserFunc/signin');
const User = require('../routFunc/UserFunc/user');


const router = express.Router();

//user registration
router.post('/signup', Signup); 

//user login
router.post('/signin', Signin);

//review a user
router.get('/user', User);


module.exports = router;