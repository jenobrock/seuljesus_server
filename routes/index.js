const express=require("express");
const app=express();
const user=require("./user");
const media =require("./media")
const contact =require('./contact')

app.use(user);
app.use(media);
app.use(contact);
module.exports=app;