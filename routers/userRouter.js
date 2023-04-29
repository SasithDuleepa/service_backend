const express = require('express');
const Signup = require('../routFunc/signup');
const Signin = require('../routFunc/signin');



const router = express.Router();

//user registration
router.post('/signup', Signup); 

//user login
router.post('/signin', Signin);



module.exports = router;