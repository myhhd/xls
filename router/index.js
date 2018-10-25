const express=require("express");
var router=express.Router();
var pool=require("../pool");
router.get('/',(req,res)=>{
  var sql=`SELECT lid,family_name,name,img_url,detail_href FROM OM_laptop_index`;
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
});
router.get('/carousel',(req,res)=>{
  var detail=req.query.detail;
  var sql=`SELECT cid,img_url,detail,href FROM om_index_carousel WHERE detail=?`;
  pool.query(sql,[detail],(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
});

module.exports=router;
