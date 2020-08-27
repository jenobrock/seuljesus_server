var bodyParser = require("body-parser");
const express = require("express")
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

const setMail = (req, res) => {
    const name=req.body.name;
    const mail = req.body.mail;
    const subject=req.body.subject;
    const message=req.body.message;
    transporter.sendMail({
        to: 'jenovicnginamaut@gmail.com',
        from: 'ezechielsums001@gmail.com',
        subject: subject,
        html: "<h1>Nouveau Inscrits</h1><br>" + name + " " + mail + "<br><p>Message " + message + "<p/><br>"
      }).then(re=>{
console.log(re)
res.json({ 'hello': re });
      }).catch(err=>{
        console.log(err)
        res.json({ 'hello': err });
      })
//   res.json({ 'hello': "okay" });
}

exports.setMail = setMail;