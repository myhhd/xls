$(function(){
  $.ajax({
    url:"http://127.0.0.1:3000/header.html",
    type:"get"
  })
  .then(res=>{
    document.getElementById("header")
        .innerHTML=res;
    //登录验证
    function isLogin(){
      var uid=sessionStorage.getItem("uid");
      $.ajax({
        url:"http://127.0.0.1:3000/user/islogin",
        type:"post",
        data:{uid},
        dataType:"json",
        success: function(data) {
          if(data.code==0){
            $("#sign").children().first().show().next().hide();
          }else{
            $("#sign").children().first().hide().next().show();
            var uname=data.msg.uname;
            var gender=data.msg.gender;
            if(gender==1){
              gender = "先生"
            }else if(gender == 0){
              gender = "女士"
            }
            $("#uname").html(uname);
            $("#gender").html(gender);
          }
        }
      })
    }
    //如果session里存在uid时，调用是否登录
    if(sessionStorage.getItem("uid")!=""){
      isLogin();
    }
    /* 登录按钮跳转 */
    /* 注销 */
    new Vue({
      el:"#header",
      data:{
      },
      methods:{
        login(){
          location.href="http://127.0.0.1:3000/login.html?back="+location.href;
        },
        signout(){
          sessionStorage.removeItem("uid");
          $.ajax({
            url:"http://127.0.0.1:3000/user/signout",
            type:"get",
            success:function(data){
              alert("您已退出！");
              isLogin();
            }
          })
        }
      }
    })
    $("header>div.search_pic").click(function(){
      $("header>div:nth-child(3)").removeClass("search").next().addClass("search");
    })
    $("header>div:nth-child(3) div.close_x").click(function(){
      $("header>div:nth-child(3)").addClass("search").next().removeClass("search");
    })
  })
})