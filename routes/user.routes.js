// 3. Routes 

const express=require('express');// import express
const router=express.Router();
const UserControllers=require('../controllers/user.controllers')


router.get('/create',UserControllers.CreatUser)




module.exports=router;