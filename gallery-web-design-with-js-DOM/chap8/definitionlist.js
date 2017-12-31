//自己写的获取abbr的方法
function mydefinitionlist(){
    if(!document.getElementsByTagName){return false;}
    else{
        var list=document.getElementsByTagName("abbr");
        if(list.length<1){return false;}
        else{
            var dl=document.createElement("dl");
            for(var i=0;i<list.length;i++){
                var dt=document.createElement("dt");
                var abbrtext=list[i].firstChild.nodeValue;
                var dtcontext=document.createTextNode(abbrtext);
                dt.appendChild(dtcontext);
                var dd=document.createElement("dd");
                var fulltext=list[i].getAttribute("title");
                var ddcontext=document.createTextNode(fulltext);
                dd.appendChild(ddcontext);
                dl.appendChild(dt);
                dl.appendChild(dd);
            }
        }
    }
    document.body.appendChild(dl);
}
//书上方法
function displayAbbreviations(){
    //检查兼容性
    if(!document.getElementsByTagName||!document.createElement||!document.createElement){
        return false;
    }
    //检查有无abbreviation
    var list=document.getElementsByTagName("abbr");
        if(list.length<1){return false;}
    //建立一个键值对数组，把abbr的文字节点作为key，把title属性值作为值
    var defs=new Array();
    for(var i=0;i<list.length;i++){
        var key=list[i].firstChild.nodeValue;
        var definition=list[i].getAttribute("title");
        defs[key]=definition;
    }
    //创建文档标记，添加值
    var abbrhead=document.createElement("h2");
    var headtext=document.createTextNode("Abbrevations");
    abbrhead.appendChild(headtext);

    var dl=document.createElement("dl");
    // for(var i=0;i<defs.length;i++){
    //这样遍历键值对数组
    for(key in defs){
        var dt=document.createElement("dt");
        var dttext=document.createTextNode(key);
        dt.appendChild(dttext);
        var dd=document.createElement("dd");
        var ddtext=document.createTextNode(defs[key]);
        dd.appendChild(ddtext);
        dl.appendChild(dt);
        dl.appendChild(dd);
    }
    document.body.appendChild(abbrhead);
    document.body.appendChild(dl);


}

window.onload=displayAbbreviations;