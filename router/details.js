const express=require("express");
var pool=require("../pool");
var router=express.Router();
router.get("/",(req,res)=>{
  var nid=req.query.nid;
  var sql=`SELECT * FROM OM_laptop_family WHERE nid=?`;
  pool.query(sql,[nid],(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
});
router.get("/list",(req,res)=>{
  var nid=req.query.nid;
  var sql=`SELECT * FROM OM_laptop_details WHERE nid=?`;
  pool.query(sql,[nid],(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
})
module.exports=router;