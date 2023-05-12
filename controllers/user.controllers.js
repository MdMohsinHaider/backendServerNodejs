// 4. Controllers
const express=require('express');// import express
const UserModel=require('../model/user.model') // requare modeles
const UserData=require('../db/data')

const CreatUser=(req,res)=>{
    // res.json({
    //     message:"Its working",
    //     status:2000        
    // })

    UserModel.create(UserData)


}
module.exports={CreatUser}


// Usermodel.create()
// Usermodel.find()
// Usermodel.deleteMany()
// Usermodel.deleteOne()