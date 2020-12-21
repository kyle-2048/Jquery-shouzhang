//用户名输入框失去焦点时，如果为空则提示用户不能为空
$("input:first").blur(function(){
    if(this.value.length===0){
       $("input:first").css({'color':"red"}).val("用户名不能为空")
    }
})
//用户名输入框获取焦点时，将输入框内容清空
$("input:first").focus(function(){
    if($("input:first").val()==="用户名不能为空")
    $("input:first").css({'color':"black"}).val("")
})

//密码输入框失去焦点时，如果为空则提示用户不能为空
$("input:nth-of-type(2)").blur(function(){
    if(this.value.length===0){
        $("input:nth-of-type(2)").css({'color':"red"}).val("密码不能为空")
    }
})

//密码输入框获取焦点时，将输入框内容清空
$("input:nth-of-type(2)").focus(function(){
    if($("input:nth-of-type(2)").val()==="密码不能为空")
        $("input:nth-of-type(2)").css({'color':"black"}).val("")
})

//登录按钮：如果用户名密码输入正确，则允许跳转页面，否则alert
$("button").on("click",function(){
    if($("input:first").val()==="kyle" && $("input:nth-of-type(2)").val()==="123456"){
        window.open("index1.html")
    }else{
        alert("用户名或密码有误，请重新输入")
    }
})
$("span").click(function(){
    window.open("index1.html")
})
