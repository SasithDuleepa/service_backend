const DB = require('../config/database');
const express = require('express');
const router = express.Router();

const Signup = (req,res)=>{
    
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    if(name && email && password){
        console.log(name + email + password);
        var findmail  = "SELECT * FROM users WHERE email = '" + email + "'";
        DB.connection.query(findmail, function (err, result) {
           
            if (err) {}
            else if(result[0].email===email){
                res.status(400).json({
                    message: "email already exists"
                });
                console.log('email already exists');
            }else{
                var sql = "INSERT INTO users (name, email, password) VALUES   ('" + name + "', '" + email + "', '" + password + "')";
            DB.connection.query(sql, function (err, result) {
            if (err) throw err;
            res.status(200).json({
                message: "user created successfully"
            });
    
          });
        }
        });



        
        
      


    }
    else{
        res.status(400).json({
            message: "please fill all the fields"
            
        });
        console.log('please fill all the fields');
    }
    

}

    


module.exports = Signup;