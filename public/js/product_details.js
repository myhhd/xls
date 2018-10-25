$(function(){
  //获取手表说明
  var nid=location.search.split("=")[1];
  $.ajax({
    url:"http://127.0.0.1:3000/details?nid="+nid,
    type:"get",
    dataType:"json"
    }).then(result=>{
      var list=result[0];
      new Vue({
        el:"#hm",
        data:{
          list,
        }
      })
  });
  //获取轮播详情
  $.ajax({
    url:"http://127.0.0.1:3000/details/list?nid="+nid,
    type:"get",
    dataType:"json"
    }).then(details=>{
      new Vue({
        el:"#product_sell",
        data:{
          details,
        }
      })
  })
  //产品展示手风琴动画
  $(document).on("click",".title",function(){
    $(this)
    .next(".content").toggleClass("in")
    .siblings(".content").removeClass("in");
  });
  //产品展示切换上一张
  $(document).on("click",".hover-prev",function(){
    var $li=$("#product_sell>div:first-child>ul>li.active1");
    var $yLi=$("#product_sell>div:first-child>div:last-child>ul>li.active2");
    var $dLi=$("#my_accordion>div.active3");
    if($li.is($("#product_sell>div:first-child>ul>li:first-child"))){
      $("#product_sell>div:first-child>ul>li:last-child")
                    .addClass("active1")
                    .siblings()
                    .removeClass("active1")
      $("#product_sell>div:first-child>div:last-child>ul>li:last-child")
                    .addClass("active2")
                    .siblings()
                    .removeClass("active2")
      $("#my_accordion>div:last-child")
                    .addClass("active3")
                    .siblings()
                    .removeClass("active3")
    }else{
      $li.prev()
        .addClass("active1")
        .siblings()
        .removeClass("active1")
      $yLi.prev()
          .addClass("active2")
          .siblings()
          .removeClass("active2")
      $dLi.prev()
          .addClass("active3")
          .siblings()
          .removeClass("active3")
    }
  })
  //产品展示切换下一张
  $(document).on("click",".hover-next",function(){
    var $li=$("#product_sell>div:first-child>ul>li.active1");
    var $yLi=$("#product_sell>div:first-child>div:last-child>ul>li.active2");
    var $dLi=$("#my_accordion>div.active3");
    if($li.is($("#product_sell>div:first-child>ul>li:last-child"))){
      $("#product_sell>div:first-child>ul>li:first-child")
                    .addClass("active1")
                    .siblings()
                    .removeClass("active1")
      $("#product_sell>div:first-child>div:last-child>ul>li:first-child")
                    .addClass("active2")
                    .siblings()
                    .removeClass("active2")
      $("#my_accordion>div:first-child")
                    .addClass("active3")
                    .siblings()
                    .removeClass("active3")
    }else{
      $li.next()
        .addClass("active1")
        .siblings()
        .removeClass("active1")
      $yLi.next()
        .addClass("active2")
        .siblings()
        .removeClass("active2")
      $dLi.next()
        .addClass("active3")
        .siblings()
        .removeClass("active3")
    }
  })
  ////产品展示小按钮切换图片及手风琴
  $(document).on("click",".list_li",function(){
    var $btn=$(this);
    $btn.addClass("active2")
        .siblings()
        .removeClass("active2")
    $("#product_sell>div:first-child>ul>li").eq($btn.index())
        .addClass("active1")
        .siblings()
        .removeClass("active1")
    $("#my_accordion>div").eq($btn.index())
        .addClass("active3")
        .siblings()
        .removeClass("active3")
  })
})