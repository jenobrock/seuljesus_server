const express=require("express")
const router=express.Router()
const controller=require("../controllers/user")

router.get("/login",controller.getLogin)


      

  module.exports=router; 