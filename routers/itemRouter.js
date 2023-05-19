const express = require('express');
// const SaveImg = require('../routFunc/ItemFunc/SaveImg');
const SaveItem = require('../routFunc/ItemFunc/SaveItem');
const Imgsave = require('../routFunc/ItemFunc/Imgsave');
const GetItem = require('../routFunc/ItemFunc/GetItem');
const GetAll = require('../routFunc/ItemFunc/GetAll');
const LatestPosts = require('../routFunc/ItemFunc/latest_posts');
const ImageName = require('../routFunc/ItemFunc/GetImgName')
const GetRandom = require('../routFunc/ItemFunc/GetRandom');
const  path = require('path');

const multer = require('multer');

//multer config
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'./uploads/items');
    },
    filename: function(req,file,cb){
        cb(null,`${file.fieldname}-${Date.now()}-${file.originalname}`);}
        
});

const upload = multer({storage:storage});

const router = express.Router();

//save a new image
router.post('/save',upload.array("images"),Imgsave ); 

//save new item
router.post('/new',upload.array("images"),SaveItem );

//get post image names
router.post('/ImgName', ImageName)

//get an image
router.use(express.static(path.join((__dirname, "uploads/items"))));

router.post('/img', GetItem);

//get all items

router.post('/all',GetAll );

router.get('/latest',LatestPosts );

router.get('/random',GetRandom );

module.exports = router;