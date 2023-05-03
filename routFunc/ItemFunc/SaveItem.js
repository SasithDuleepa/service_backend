const jwt = require('jsonwebtoken');
const DB = require('../../config/database')
require('dotenv').config();

const SaveItem =(req,res)=>{
    const{title,category,cantact,location,description}=req.body;//get api data
    const Token = req.headers.authorization;//get token
    const DecodedToken =jwt.verify(Token, process.env.TOKEN_SECRET, (err, DecodedToken) => {
        return DecodedToken;
    });
    const userId = DecodedToken.id;//find user id
    // console.log(DecodedToken);
    if(title=="" || category=="" || cantact=="" || location=="" || description==""){  //check if all fiels 
        res.send("Please fill all the fields")
    }
    else{
        const sql = "INSERT INTO `post`(`title`, `user_id`,`category`, `contact`, `location`, `description`) VALUES ('"+title+"','"+userId+"','"+category+"','"+cantact+"','"+location+"','"+description+"')";
        DB.connection.query(sql, function (err, result) {   //save post on db
            if(result){
                const selectQuery = `SELECT * FROM post WHERE post_id=${result.insertId}`;
                DB.connection.query(selectQuery, function (err, Result) {
                    if(Result){
                        console.log(Result);
                        const postId = Result[0].post_id;
                        res.send({
                            postId:postId,
                            message:"Item Saved"
                        });
                        console.log( "post saved, id is", postId);
                      
                    
                    }else{}
                });
                // res.send("Item Saved")
                // console.log(result);
            }else{
                res.send("Error")
                console.log(err);
            
            }
        });
    }
    

}

module.exports = SaveItem;