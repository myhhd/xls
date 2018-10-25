$(function(){
    //6张图片获取资源
    $.ajax({
        url:"http://127.0.0.1:3000/index/",
        type:"get",
        dataType:"JSON"
        }).then(products=>{
        //console.log(products);
        new Vue({
            el:"#main>div:nth-child(3)",
            data:{
                products
            }
        })
    });
    //第一个轮播图获取资源
    $.ajax({
        url:"http://127.0.0.1:3000/index/carousel?detail=1",
        type:"get",
        dataType:"JSON"
        }).then(car=>{
        new Vue({
            el:"#slider",
            data:{
                car
            }
        })
    });
    //第二个轮播图获取资源
    $.ajax({
        url:"http://127.0.0.1:3000/index/carousel?detail=2",
        type:"get",
        dataType:"JSON"
        }).then(car1=>{
        new Vue({
            el:"#slider1",
            data:{
                car1
            }
        })
    })
    //第一个轮播图--动效
    function slide(){
        var $imgShow=$("#slider>div:first-child>ul>li.show");
        var $liShow=$("#slider>div:last-child>ul>li.show1");
        $imgShow.removeClass("show");
        $liShow.removeClass("show1");
        if($imgShow.is($("#slider>div:first-child>ul>li:last-child"))){
            $("#slider>div:first-child>ul>li:first-child").addClass("show");
            $("#slider>div:last-child>ul>li:first-child").addClass("show1");
        }else{
            $imgShow.next().addClass("show");
            $liShow.next().addClass("show1");
        }
    }
    setInterval(slide,4000);
    $(document).on("click",".list_li",function(){
        var $btn=$(this);
        $btn.addClass("show1")
            .siblings()
            .removeClass("show1")
        $("#slider>div:first-child>ul>li").eq($btn.index())
            .addClass("show")
            .siblings()
            .removeClass("show")
    })
    //第二个轮播图--动效
    function slide1(){
        var $imgShow=$("#slider1>div:first-child>ul>li.show2");
        var $liShow=$("#slider1>div:last-child>ul>li.show3")
        $imgShow.removeClass("show2");
        $liShow.removeClass("show3")
        if($imgShow.is($("#slider1>div:first-child>ul>li:last-child"))){
            $("#slider1>div:first-child>ul>li:first-child").addClass("show2");
            $("#slider1>div:last-child>ul>li:first-child").addClass("show3");
        }else{
            $imgShow.next().addClass("show2");
            $liShow.next().addClass("show3");
        }
    }
    setInterval(slide1,4000);
    $(document).on("click",".list_li_1",function(){
        var $btn=$(this);
        $btn.addClass("show3")
            .siblings()
            .removeClass("show3")
        $("#slider1>div:first-child>ul>li").eq($btn.index())
            .addClass("show2")
            .siblings()
            .removeClass("show2")
    })
    //楼层电梯--动效
    var $divLift=$("#main>ul:last-child");
    $divLift.addClass("d-none");
    $(window).scroll(function(){
        var $fs=$("#main>div");
        var $f2=$fs.first().next();
        var scrollTop=$("html,body").scrollTop();
        var offsetTop=$f2.offset().top;
        if(innerHeight/2+scrollTop>offsetTop){
            $divLift.removeClass("d-none");
        }else{
            $divLift.addClass("d-none");
        }
        $fs.each((i,f)=>{
            offsetTop=$(f).offset().top;
            if(innerHeight/2+scrollTop>offsetTop){
              $divLift
                .children(`:eq(${i})`)
                .addClass("list_active")
                .siblings()
                .removeClass("list_active")
            }
        })
    })
    $divLift.on("click","li",function(){
        var i=$(this).index();
        var offsetTop=
          $(`#main>div:eq(${i})`)
                    .offset().top;
        $("html").animate({
          scrollTop:offsetTop
        },500);
    })
})

