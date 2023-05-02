const express = require('express');
const SaveItem = require('../routFunc/ItemFunc/SaveItem');
const GetItem = require('../routFunc/ItemFunc/GetItem');
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

//save a new item
router.post('/save',upload.array("images"),SaveItem ); 

//get an image
router.use(express.static(path.join((__dirname, "uploads/items"))));

router.post('/img', GetItem);



module.exports = router;