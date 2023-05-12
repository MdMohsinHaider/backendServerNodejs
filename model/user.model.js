// 2. Model or schema creating 

const mongoose = require('mongoose'); // import mongoose

// creat schema
const UserSchema= new mongoose.Schema({
    name:{type:String,require:true},
    age: Number,
    comments:[{
        user:String,
        rating: Number,
    }],
    date:{type:Date,default:Date.now},
    hidden:{type:Boolean,default:true},
})

const Usermodel= mongoose.model('UserData',UserSchema) // database collection name UserData
module.exports=Usermodel
