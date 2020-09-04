const express=require("express")
const router=express.Router()
const controller=require("../controllers/user")

router.get("/login",controller.getLogin)
.post("/signup",controller.signUpUser)
.post("/signin",controller.signInUser)
.get("/",(req, res) => {
  res.json({ 'hello': "okay" });
})
      

  module.exports=router; 