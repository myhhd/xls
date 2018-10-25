const express=require("express");
var pool=require("../pool")
var router=express.Router();
router.get("/list",(req,res)=>{
  var sql=`SELECT lid,title,subtitle,img_url,detail_href FROM OM_bs_laptop`;
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
})
module.exports=router;