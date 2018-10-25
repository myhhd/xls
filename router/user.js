const express=require("express");
var pool=require("../pool");
var router=express.Router();
router.post("/signin",(req,res)=>{
  var {uemail,upwd}=req.body;
  var sql=`SELECT * FROM OM_user WHERE uemail=? AND upwd=?`;
  pool.query(sql,[uemail,upwd],(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      res.send({code:1,msg:result[0]});
    }else{
      res.send({code:0,msg:"邮箱账号或密码错误"});
    }
  })
});
router.post("/islogin",(req,res)=>{
  var uid=req.body.uid || -1;
  //var uid =-1;
  if(uid== -1){
    res.send({code:0,msg:"登录异常"})
  }else{
    var sql=`SELECT * FROM OM_user WHERE uid=?`;
    pool.query(sql,[uid],(err,result)=>{
      if(err) throw err;
      res.send({code:1,msg:result[0]});
    })
  }
});
router.get("/signout",(req,res)=>{
  res.send("bey");
})
router.post("/register",(req,res)=>{
  var gender=req.body.gender;
  var uname=req.body.uname;
  var uemail=req.body.uemail;
  var upwd=req.body.upwd;
  var sql=`INSERT INTO OM_user VALUE(null,?,?,?,?)`;
  pool.query(sql,[uname,upwd,uemail,gender],(err,result)=>{
    if(err) throw err;
    res.send({code:1,msg:"注册成功"});
  })
})
router.get("/user",(req,res)=>{
  var uemail=req.query.uemail;
  var sql=`SELECT * FROM OM_user WHERE uemail=?`;
  pool.query(sql,[uemail],(err,result)=>{
    if(result.length>0){
      res.send({code:1,msg:"该邮箱已注册"});
    }else{
      res.send({code:0,msg:"可以注册"});
    }
  })
})
module.exports=router;