const DB = require('../../config/database');
const express = require('express');
const router = express.Router();

const Signup = async(req,res)=>{
    
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    if(name && email && password){
        
        const sql = "SELECT * FROM users WHERE email='"+email+"'";
        DB.connection.query(sql, (err,result)=>{
            console.log(result.length);
            if(result.length>0){
                console.log('user already exists');
                res.status(400).json({
                    message: "user already exists"
                    });
                }else{
                console.log('user does not exist');
                const Sql = "INSERT INTO users (name,email,password) VALUES ('"+name+"','"+email+"','"+password+"')";
                DB.connection.query(Sql, (err,result)=>{
                    if(result){
                        console.log('user created successfully');
                        res.status(200).json({
                            message: "user created successfully"
                            });
                    }else{
                        console.log('user creation failed');
                        res.status(400).json({
                            message: "user creation failed"
                            });
                    }                    
                });
            }
        });
    }else{
        res.status(400).json({
            message: "please fill all the fields"
            });
        console.log('please fill all the fields');
    }
}

module.exports = Signup;