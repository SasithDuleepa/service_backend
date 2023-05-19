const DB = require('../../config/database');
const express = require('express');

const router = express.Router();



const Imgsave = async(req,res)=>{
    
    // res.send('Files uploaded successfully');

    const image = req.files[0].filename;
    const postid= req.headers.postid;
    console.log(postid);
    const sql = "INSERT INTO item (image,post_id) VALUES ('"+image+"','"+postid+"')";
    DB.connection.query(sql, (err, result) => {
        if(result){
            res.status(200).json({
                message: "Image saved successfully"
                });
            
        }else{
            res.send("image save failed")
            console.log(err);
        }
    });
}


module.exports = Imgsave;