const DB = require ('../../config/database');


const ImageName = async(req,res)=>{
    // const post_id = 20;
    const post_id = req.body.post_id;

    const sql ="SELECT image FROM item WHERE post_id = '"+post_id+"'";
    DB.connection.query(sql, function(err,result){
        //set image names in to a array
        if(err){
            console.log(err)
        }else{
            console.log(result)
            res.send(result)
        }
        
    })
}

module.exports = ImageName;