const express=require("express");
const app=express();
const user=require("./user");
const media =require("./media")
const contact =require('./contact')
const livre =require('./livre')

app.use(user);
app.use(media);
app.use(contact);
app.use(livre);
module.exports=app;