const DB = require('../config/database')

const Signin = (req, res) => {
   
    const { email, password } = req.body;

    if(email){
        console.log(email);
        var sql = "SELECT * FROM users WHERE email = '"+email+"'";
        DB.connection.query(sql, function (err, result) {
            if(result.length === 0){
                res.status(400).json({
                    message:"email incorrect"
                })
            }
           
            else if(result.length > 0){  
                    if(password === result[0].password){
                    res.status(200).json({
                        message:"login success"
                    })
                    console.log(result[0]);
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