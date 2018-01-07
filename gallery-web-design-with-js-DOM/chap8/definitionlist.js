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
    //IMPORTANT：这样遍历键值对数组
    for(key in defs){
        var dt=document.createElement("dt");
        //key和defs[key]在构建时是string类型，还是要转成textNode类型
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
function getLastElementChild(node){
    var nodelist=node.getElementsByTagName("*");
    return nodelist[nodelist.length-1];
    
}
function displayQuote(){
    //获取blockquote
    var quoteList=document.getElementsByTagName("blockquote");
    //有无cite属性
    for(var i=0;i<quoteList.length;i++){
        var cite =quoteList[i].getAttribute("cite");
        if(!cite){continue;}
        else{
            //建立source节点添加在对应cite中那个blockquote的后面
            var source=document.createElement("a");
            source.setAttribute("href",cite);
            var sourcetext=document.createTextNode("source");
            source.appendChild(sourcetext);
            console.log(quoteList[i].lastChild.nodeType);//quoteList最后一个不是element而是个textnode类型的节点
            getLastElementChild(quoteList[i]).appendChild(source);
        }
    }
}


function onLoadEvent(func){
    var oldLoadEvent=window.onload;
    if(typeof oldLoadEvent !="function"){
        window.onload=func;
    }
    else{
        window.onload=function(){
            oldLoadEvent();
            func();
        }
    }   
}
onLoadEvent(displayAbbreviations);
onLoadEvent(displayQuote);