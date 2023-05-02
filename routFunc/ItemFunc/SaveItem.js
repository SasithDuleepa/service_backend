const DB = require('../../config/database');
const express = require('express');

const router = express.Router();



const SaveItem = async(req,res)=>{
    
    // res.send('Files uploaded successfully');

    const image = req.files[0].filename;
    const sql = "INSERT INTO item (image) VALUES ('"+image+"')";
    DB.connection.query(sql, (err, result) => {
        if(result){
            res.send(result);
            console.log(result);
        }else{
            res.send("image save failed")
            console.log(err);
        }
    });
}


module.exports = SaveItem;