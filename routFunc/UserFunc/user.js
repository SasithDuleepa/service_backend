const DB =  require('../../config/database');
const url = require('url')
const querystring = require('querystring');

const User =(req,res)=>{
    

    const urlString = req.url;
const parsedUrl = url.parse(urlString);
const queryParams = querystring.parse(parsedUrl.query);
const parameter = queryParams.id;



    const sql= `SELECT * FROM users WHERE id = ${parameter} `;
    DB.connection.query(sql,(err,result)=>{
    if(err){
        return res.status(500).send(err);
    }else{
        res.status(200).send(result);
    }
})
    
};

module.exports = User;