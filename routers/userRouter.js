const express = require('express');
const Signup = require('../routFunc/signup');



const router = express.Router();

//user registration
router.post('/signup', Signup); 

//user login
router.get('/', (req, res) => {
    
});




module.exports = router;