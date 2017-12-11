var request=new XMLHttpRequest();
function getNewContent(){
    // var request=getHttpObject();
    if(request){
    //发起get请求
    request.open("GET","elementtest.txt",true);
    //onreadystatechange 事件触发
    request.onreadystatechange=function(){
        if(request.readyState==4){
            var p=document.createElement("p");
            //Cross origin requests are only supported for protocol schemes via Chrome
            var ptest=document.createTextNode(request.responseText);
            p.appendChild(ptest);
            document.getElementsByTagName("body")[0].appendChild(p);
            console.log("request.readyState==4");
            console.log(ptest);
        }
    };
    request.send(null);
    }else{
        alert("sorry");
    }
}