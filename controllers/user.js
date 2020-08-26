var bodyParser = require("body-parser");
const express = require("express")
User = require("../models/usermodel");
const nodemailer = require("nodemailer");
const sendGrid = require("nodemailer-sendgrid-transport");
const bcrypt = require("bcryptjs");

const transporter = nodemailer.createTransport(
  sendGrid({
    auth: {
      api_key:
        "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",
    },
  })
);
const app = express();
app.use(bodyParser.json());

const getLogin = (req, res) => {
  res.json({ 'hello': "okay" });
}

const signUpUser = (req, res) => {
  const nom = req.body.nom;
  const prenom = req.body.prenom;
  const phone = req.body.phone;
  const mail = req.body.mail;
  const pass1 = req.body.password;
  const pass2 = req.body.password2;
  if (pass1 !== pass2) {
    console.log('erreur password')
    return res.json('100');
  } else {

    User.findOne({ phone: phone })
      .then(user => {
        if (user) {
          console.log("numero deja utilisé");
          return res.json('101')
        }
        return bcrypt
          .hash(pass1, 12).then((hashed) => {
            const user = new User({

              nom: nom, prenom: prenom, phone: phone, password: hashed, mail: mail
            }
            );
            transporter.sendMail({
              to: 'jenovicnginamaut@gmail.com',
              from: 'ezechielsums001@gmail.com',
              subject: 'Une commande a été passé',
              html: "<h1>Nouveau Inscrits</h1><br>" + nom + " " + prenom + "<br><p>Telephone " + phone + "<p/><br>"
            });
            user.save()
              .then((result) => {
                console.log(result);
                return res.json('200');
              })

          })
      })
      .catch((err) => {
        console.log(err);
      });


  }
}

const signInUser = (req, res) => {

  const mail = req.body.mail;
  const pass = req.body.password;

  User.findOne({ mail: mail }).then(user1 => {
    if (!user1) {
      console.log("no user found");
      res.json('102');
    }
    console.log(user1.password);
   return bcrypt.compare(pass,user1.password).then(data => {
      console.log(data);
      if (data) {
        // req.session.user=user1;
        console.log(user1.nom +" s'est connecté");
        // return req.session.save(err => {
        //   console.log(err);
        //   res.redirect('/');
        // });
        res.json('201');
      } else {
        console.log("password incorrect");
        res.json('103')
      }
    })
  }).catch(err=>{
    console.log(err);
  })

}

exports.signUpUser = signUpUser;
exports.getLogin = getLogin;
exports.signInUser = signInUser;


//100 mot de passe pas egal
//101 mail deja utilisé
//102 compte n'existe pas
//103 mot de passe incorrects
//200 enregistrement reussi
//201 connexion reussi