const express = require('express');
const  path = require('path');
const multer = require('multer');

const SaveItem = require('../routFunc/ItemFunc/SaveItem');
const GetItem = require('../routFunc/ItemFunc/GetItem');
const GetAll = require('../routFunc/ItemFunc/GetAll');
const LatestPosts = require('../routFunc/ItemFunc/latest_posts');
const GetRandom = require('../routFunc/ItemFunc/GetRandom');
const Item = require('../routFunc/ItemFunc/Item');
const Catergorylist = require('../routFunc/ItemFunc/GetCatergorylist');

const Upload = require('../config/multer')  //multer config


const router = express.Router();

//save new post
router.post('/new',Upload.array("images"),SaveItem );

//get an image
router.use(express.static(path.join((__dirname, "uploads/items"))));

//get an image
router.post('/img', GetItem);

//get all posts
router.post('/all',GetAll );

//get latest posts
router.get('/latest',LatestPosts );

//get random posts
router.get('/random',GetRandom );

//used to review a post
router.get('/item',Item );

//catergory list
router.get('/catergorylist', Catergorylist)

module.exports = router;