const express= require('express');
const app=express();
const dotev = require('dotenv');
const path = require('path');
dotev.config({path: path.join(__dirname, 'config', 'config.env')});

const product=require('./routes/product');
const order = require('./routes/order');
app.use('/api/v1',product);
app.use('/api/v1',order);




app.listen(process.env.PORT,()=>{
    console.log(`listening on ${process.env.PORT} in ${process.env.NODE_ENV} mode`)
});