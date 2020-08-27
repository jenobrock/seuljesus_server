const express=require("express")
const router=express.Router()


const controller=require("../controllers/media")
// var cors = require('cors')
// var corsOptions = {
//   origin: 'http://example.com',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

router.post("/addmedia",controller.postMedia)
.get("/getoneMedia",controller.getMedia)
.get("/getMedias",controller.getMedias)

      

  module.exports=router; 