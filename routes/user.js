const express=require("express")
const router=express.Router()
const controller=require("../controllers/user")

router.get("/login",controller.getLogin)
.post("/signup",controller.signUpUser)
.post("/signin",controller.signInUser)

      

  module.exports=router; 