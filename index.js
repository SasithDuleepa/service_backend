const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();


const userRouter = require('./routers/userRouter');//user routs
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/user', userRouter);//user routs   

app.listen(process.env.PORT, () => {(
console.log(`Server started on port ${process.env.PORT}`)
    )}
    );