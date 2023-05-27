const DB =  require('../../config/database');
const url = require('url')
const querystring = require('querystring');

const Item = (req,res)=>{
    const urlString = req.url;
const parsedUrl = url.parse(urlString);
const queryParams = querystring.parse(parsedUrl.query);
const parameter = queryParams.id;

   const sql = `SELECT * FROM post WHERE post_id = ${parameter}`;
   DB.connection.query(sql, (err, result) => {
    if(err){
        res.status(500).send(err);
    
    }else{
        res.status(200).send(result);}
})
};

module.exports= Item;