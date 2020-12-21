var dianzanBoolean=false;
let dianzanAmount=null;

//点击菜单栏样式变化
$(".navbar_right div").click(function(){
    $(this).addClass("Hover")
    $(this).siblings().removeClass("Hover")
})
//点击点赞按钮，显示动画，增加点赞数，并同步到localstore
$("#IMG").click(function(){
    if(!dianzanBoolean){
        //添加点赞效果（图片）
        $("#IMG").html("<img src='img/zan.png' />")
        dianzanBoolean=true;
    }
    //添加点赞动画
    $(this).addClass("dianzan");
    setTimeout(()=>{
        $(this).removeClass("dianzan")
    },500)  //进行异步操作，去除这个动画
    //增加点赞数
    parseInt($(this).siblings().text(parseInt($(this).siblings().text())+1));  //text里面放的是修改后的值
    //将点赞数赋给变量
    dianzanAmount=$(this).siblings().text();
})

//点击返回按钮返回到页面顶部
$(".back").click(()=>{
    $("html,body").animate({scrollTop:"0px"},500)
})

//根据scrolltop判断返回按钮是否显示
$(window).scroll(function(){
    // console.log(document.documentElement.scrollHeight)
    // $(".back").show();
    var height=document.documentElement.scrollHeight
    if($(window).scrollTop()>height*0.35){
        $(".back").show()
    }
    else{
        $(".back").hide()
    }
})

//点击跳转到登录页面
function goLogin(){
    window.location.href="login.html"
}
//根据所点击的元素的index值来跳转到不同页面
//跳转会闪动，还没解决
$(".navbar_right").children().click(function(){
    let navBarRight=document.querySelectorAll(".navbar_right>div");
    let navBarRightArray=Array.prototype.slice.call(navBarRight);
    //获取所点击的元素是在父元素中的index值，根据index值不同来进行不同页面的跳转
    switch (navBarRightArray.indexOf(this)) {
        case 0:
            window.location.href="index1.html";
            StoreDianZan();
            break;
        case 1:
            window.location.href="index2.html";
            StoreDianZan();
            break;
        case 2:
            window.location.href="index3.html";
            StoreDianZan();
            break;
    }
})
//跳转页面时，把当前页面的点赞数同步到localstore
function StoreDianZan(){
    dianzanAmount=$(".navbar_left span:nth-of-type(2)").text();
    //获取时间戳，将时间戳和点赞数一起存到到localstore
    let thisTime=new Date().getTime();
    console.log(thisTime)
    let DianZanInfo={amount:dianzanAmount,time:thisTime}
    window.localStorage.setItem("dianZan",JSON.stringify(DianZanInfo))
}
//跳转页面后，从localstore中获取点赞数，同步到当前页面的点赞数
function getDianZan(){
    //如果localstore有点赞数的记录
    if(window.localStorage.getItem("dianZan")){
        //将现在的时间戳和上一次的时间戳比较，如果差值大于一定值，不在当前页面同步点赞数，并删除上次localstore记录的点赞数，
        let thisTime=new Date().getTime();
        let dianzanInfo=JSON.parse(window.localStorage.getItem("dianZan"));
        if(thisTime-dianzanInfo.time<3000){  //如果差值较小，同步点赞数
            console.log('已同步点赞数')
            $(".navbar_left span:last").text(dianzanInfo.amount)
        }
        //差值较大，删除localstore点赞数
        else{
            console.log('已重置点赞数')
            window.localStorage.removeItem("dianZan")
        }
    }
    //没有记录直接return
    else{
        return;
    }
}
getDianZan();  //刷新页面时执行此函数，更新点赞数




