const express=require("express")
const router=express.Router()


const controller=require("../controllers/livre")
// var cors = require('cors')
// var corsOptions = {
//   origin: 'http://example.com',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

router.post("/addlivre",controller.postLivre)
.get("/getoneLivre",controller.getLivre)
.get("/getLivres",controller.getLivres)

      

  module.exports=router; 