function setRem(){
    let clientwidth=document.body.clientWidth;
    if(clientwidth<768){
        document.documentElement.style.fontSize=clientwidth/700*100+"px";
    }else{
        document.documentElement.style.fontSize=100+'px'
    }
}
window.onresize=setRem;
window.onload=setRem


