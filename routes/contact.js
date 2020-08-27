const express=require("express")
const router=express.Router()
const controller=require("../controllers/contact")

router.post("/sendMail",controller.setMail)


      

  module.exports=router; 