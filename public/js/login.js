$(function(){
  //登录
  $(".loginin").click(function(){
    var uemail=$(".uemail").val();
    var upwd=$(".upwd").val();
    $.ajax({
      url:"http://127.0.0.1:3000/user/signin",
      type:"post",
      data:{uemail,upwd},
      dataType:"json",
      success: function(data) {
        if(data.code==0){
          $(".hint").text(data.msg);
        }else{
          var back=location.search.slice(6);
          location.href=back;
          var uid=data.msg.uid
          console.log(uid);
          sessionStorage.setItem("uid",uid);
          alert("登录成功！");
        }
      }
    })
  })
  //注册时，复选框必须勾选才能提交表单
  $(":checkbox").click(function(){
    var $chb=$(this);
    $(".refer").prop("disabled",!$chb.is(":checked"));
  })
  //注册前填写表单时，获取焦点及失去焦点的效果
  $("input[name='uname']").focus(function(){
    $("#showuname").html("请输入1~12位的中文或英文用户名");
  })
  $("input[name='uname']").blur(function(){
    var uname=$("input[name='uname']").val()
    if(uname == ""){
      $("#showuname").html("用户名不能为空");
    }else{
      $("#showuname").html("");
    }
  })
  $("#uemail").focus(function(){
    $("#showuemail").html("请输入正确的邮箱地址");
  })
  $("#uemail").blur(function(){
    var uemail=$("#uemail").val();
    if(uemail == ""){
      $("#showuemail").html("邮箱地址不能为空");
    }else{
      $("#showuemail").html("");
    }
  })
  $("#upwd").focus(function(){
    $("#showupwd").html("请输入6~12位密码");
  })
  $("#upwd").blur(function(){
    var reg=/^\w{6,12}$/;
    var upwd=$("#upwd").val();
    if(upwd == ""){
      $("#showupwd").html("密码不能为空");
    }
    if(reg.test(upwd)){
      $("#showupwd").html("");
    }else{
      $("#showupwd").html("密码至少6个字符");
    }
  })
  $("input[name='rupwd']").blur(function(){
    var rupwd=$("input[name='rupwd']").val();
    var upwd=$("#upwd").val();
    if(rupwd !==upwd){
      $("#showrupwd").html("密码不一致，请重新输入!")
    }else{
      $("#showrupwd").html("")
    }
  })
  //注册
  $(".refer").click(function(){
    var uname=$("input[name='uname']").val();
    var upwd=$("#upwd").val();
    var uemail=$("#uemail").val();
    var gender=$("input[name='gender']:checked").val();
    var rupwd=$("input[name='rupwd']").val();
    //验证表单不能为空
    if(uname == ""){
      $("#showuname").html("用户名不能为空");
      return
    }else if(uemail == ""){
      $("#showuemail").html("邮箱地址不能为空");
      return
    }else if(upwd == ""){
      $("#showupwd").html("密码不能为空");
      return
    }else if(rupwd == ""){
      $("#showupwd").html("重复密码不能为空");
      return
    }else{
      //验证邮箱不能与数据库中重复
      $.ajax({
        url:"http://127.0.0.1:3000/user/user",
        data:{uemail},
        success:function(data){
          if(data.code==1){
            $("#showuemail").html(data.msg);
            return;
          }else{
            addUser();
          }
        }
      })
    }
  })
  //封装注册请求
  function addUser(){
    var uname=$("input[name='uname']").val();
    var upwd=$("#upwd").val();
    var uemail=$("#uemail").val();
    var gender=$("input[name='gender']:checked").val();
    var rupwd=$("input[name='rupwd']").val();
    $.ajax({
      url:"http://127.0.0.1:3000/user/register",
      type:"post",
      data:{gender,uname,uemail,upwd},
      dataType:"json",
      success:function(data){
        alert(data.msg+"请登录");
        $("#login").addClass("active_lg").siblings().removeClass("active_lg");
      }
    })
  }
  //注册表单单选男女样式
  $(document).on("click","label",function(){
    var $btn=$(this);
    $btn.addClass("btn-dark")
        .siblings()
        .removeClass("btn-dark")
  })
  //登录，注册切换按钮
  $(document).on("click","[data-toggle=tab]",function(e){
    e.preventDefault();
    var $tar=$(this);
    if(!$tar.parent().is(".active_login")){
      $tar.parent().addClass("active_login")
        .siblings().removeClass("active_login");
      var id=$tar.attr("href");
      $(id).addClass("active_lg")
        .siblings().removeClass("active_lg");
    }
  })
})