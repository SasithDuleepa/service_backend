const DB = require('../../config/database')
const jwt = require('jsonwebtoken');

require('dotenv').config();

const Signin = (req, res) => {
   
    const { email, password } = req.body;

    if(email){
        // console.log(email);
        var sql = "SELECT * FROM users WHERE email = '"+email+"'";
        DB.connection.query(sql, function (err, result) {
            if(result.length === 0){
                res.status(400).json({
                    message:"email incorrect"
                })
            }
           
            else if(result.length > 0){  
                    if(password === result[0].password){
                    // res.status(200).json({
                    //     message:"login success"
                    // })
                    // console.log(result[0]);

                    //generate token
                    const user = {
                        token:"Bearer",
                        id: result[0].id,
                        email: result[0].email,
                        name: result[0].name
                        };
                    const token = jwt.sign(user, process.env.TOKEN_SECRET,{expiresIn: '1h'});
                    

                   
                    

                    // console.log(token);
                    res.status(200).json({
                        token: token,
                        name: result[0].name,
                        id:result[0].id,
                        message:"login success"
                        });



                }
                else{
                    res.status(400).json({
                        message:"password incorrect"
                    })
                }
            }
        });
    }
    else{
        res.status(400).json({
            message:"please enter email"
        })
        
    
        
    }
}

module.exports = Signin;