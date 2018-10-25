const express=require("express");
const bodyParser = require('body-parser');
const session = require("express-session");
var index=require("./router/index");
var product=require("./router/product")
var details=require("./router/details")
var user=require("./router/user")
var app=express();
var server=app.listen(3000);
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));
app.use(session({
  secret:"随机字符串",
  cookie:{maxAge:60*1000*30},
  resave:false,
  saveUninitialized:true
}));
app.use("/index",index);
app.use("/product",product);
app.use("/details",details);
app.use("/user",user);