$(function(){
  $.ajax({
    url:"http://127.0.0.1:3000/product/list",
    type:"get",
    dataType:"json"
  }).then(result=>{
    new Vue({
      el:"#main",
      data:{
        result
      }
    })
  })
})