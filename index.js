// 1. Index.js

const express=require('express');// import express
const mongoose = require('mongoose');// import mongoose
const UserRouter=require('./routes/user.routes')

// const app=express();
const app = express();

// use router in Index.js so create middlewear
app.use('/user',UserRouter)

// conncect to MongoDB
mongoose.connect("mongodb://0.0.0.0:27017/mongooseDatabase",{
    useNewUrlParser: true,
    useUnifiedTopology: true
},).then(()=>console.log("Successful connected MongoDb")).catch((err)=>{console.error("err");});

// listent port of server for running
app.listen(5000,()=>{
    console.log("Server in running");
})