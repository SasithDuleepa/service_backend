const express = require('express');
// const SaveImg = require('../routFunc/ItemFunc/SaveImg');
const SaveItem = require('../routFunc/ItemFunc/SaveItem');
const Imgsave = require('../routFunc/ItemFunc/Imgsave');
const GetItem = require('../routFunc/ItemFunc/GetItem');
const GetAll = require('../routFunc/ItemFunc/GetAll');
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
router.post('/new',SaveItem );

//get an image
router.use(express.static(path.join((__dirname, "uploads/items"))));

router.post('/img', GetItem);

//get all items

router.post('/all',GetAll );

module.exports = router;