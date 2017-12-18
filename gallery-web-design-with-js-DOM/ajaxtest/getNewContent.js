var request=new XMLHttpRequest();
function getNewContent(){
    // var request=getHttpObject();
    if(request){
    //发起get请求
    request.open("GET","elementtest.txt",true);
    //在xmlhttprequest对象 即request，收到请求的回复后，onreadystatechange 事件触发
    console.log("request sent");
    request.onreadystatechange=function(){
        //4完成 3正在交互 2加载完毕 1正在加载 0未初始化
        if(request.readyState==4){
            console.log("request.readyState==4");
            var p=document.createElement("p");
            //Cross origin requests are only supported for protocol schemes via Chrome
            var ptest=document.createTextNode(request.responseText);
            p.appendChild(ptest);
            document.getElementsByTagName("body")[0].appendChild(p);
            console.log(ptest);
        }
    };
    request.send(null);
    console.log("request complete");
    }else{
        alert("sorry");
    }
}