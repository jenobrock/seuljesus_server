var bodyParser = require("body-parser");
const express=require("express")
const app=express();
app.use(bodyParser.json());

const getLogin=(req,res)=>{
    res.json({'hello':"okay"});
    }  

const addUser=(req,res)=>{
    const nom = req.body.nom;
  const prenom = req.body.prenom;
  const phone = req.body.phone;
  const mail = req.body.mail;
  const pass1 = req.body.password;
  const pass2 = req.body.password2;
  if(pass1!=pass2){
    console.log('erreur password')
   return res.json('100');
  }

  
    res.json({'hello':"okay"});
    }  

    exports.getLogin=getLogin;
 
//100 mot de passe pas egal