const express=require("express")
const router=express.Router()
const controller=require("../controllers/media")

router.post("/addmedia",controller.postMedia)
.get("/getoneMedia",controller.getMedia)
.get("/getMedias",controller.getMedias)

      

  module.exports=router; 