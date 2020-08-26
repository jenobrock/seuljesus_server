const express=require("express");
const app=express();
const user=require("./user");
const media =require("./media")

app.use(user);
app.use(media);

module.exports=app;