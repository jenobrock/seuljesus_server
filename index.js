const mongoose=require('mongoose');
// const multer=require('multer');
var cors = require('cors');
var express = require("express");
var bodyParser = require("body-parser");
const index=require('./routes/index');
// const session=require('express-session');
// const MongoDBStore=require('connect-mongodb-session')(session);
var app = express();
// const index=require("./routes/index")
//const uri="mongodb://localhost/test3";
const uri="mongodb+srv://jeno:tshimwana@vivrex.klvrq.mongodb.net/yesu?retryWrites=true&w=majority";



// app.set('views',  'views');
// app.set('view engine', 'ejs');

// const fileStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'public/images');
//   },
//   filename: (req, file, cb) => {
//     cb(null, new Date().toDateString() + '-' + file.originalname);
//   }
// });

// const fileFilter = (req, file, cb) => {
//   if (
//     file.mimetype === 'image/png' ||
//     file.mimetype === 'image/jpg' ||
//     file.mimetype === 'image/jpeg'
//   ) {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };
// app.use(
//   multer({ fileFilter: fileFilter,storage:fileStorage }).single('file')
// );
// const store=new MongoDBStore({
//   uri:uri,
//   collection:'sessions'
// });
// app.use(
//   session({secret:"une session", resave:false, saveUninitialized:false, store:store })
// );
// app.use((req, res, next) => {
//   if (!req.session.user) {
    
//     console.log("pas de session"+req.session);
//     return next();
//   }
//   console.log("Session existe")
//   User.findById(req.session.user._id)
//     .then(user => {
//       if(user){
//         req.user = user;
//       }
//       next();
//     })
//     .catch(err => console.log(err));
// });
var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(cors(corsOptions));
app.use(index);
// app.use((req,res)=>{
//   res.status(404).render("404",{path:"",user:req.user});
// })

 
mongoose.connect("mongodb+srv://jeno:tshimwana@vivrex.klvrq.mongodb.net/yesu?retryWrites=true&w=majority").then(
  result=>{
      app.listen(process.env.PORT || 3000);
     //console.log(req.user);
  }
).catch(
  err=>{
      console.log(err);
  }
);
// app.listen(process.env.PORT || 3000);