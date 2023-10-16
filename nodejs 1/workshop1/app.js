const express = require('express');
const userRoute = require('../routers/user');

const app = express();

app.use (express.json());

app.use('/',(req,res)=>{
    res.send("i am working");
})

app.use('/user', userRoute);

app.listen(3000);