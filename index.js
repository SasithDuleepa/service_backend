const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var mysql = require('mysql');


require('dotenv').config();

// const connection = require('./model/dbconnection')
const DB = require('./config/database');
const userRouter = require('./routers/userRouter');//user routs
const app = express();

app.use(bodyParser.json());
app.use(cors());

DB.connect();




app.use('/user', userRouter);//user routs   

app.listen(process.env.PORT, () => {(
console.log(`Server started on port ${process.env.PORT}`)
    )}
    );