const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
var mysql = require('mysql');

const GetItem = require('./routFunc/ItemFunc/GetItem')


require('dotenv').config();


const DB = require('./config/database');
const userRouter = require('./routers/userRouter');//user routs
const itemRouter = require('./routers/itemRouter');//item routs

const authMiddleware = require('./auth/middleware');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

DB.connect();




app.use('/user', userRouter);//user routs  
app.use('/item', itemRouter);//item routs 


app.listen(process.env.PORT, () => {(
console.log(`Server started on port ${process.env.PORT}`)
    )}
    );