function definitionlist(){
    if(!document.getElementsByTagName){return false;}
    else{
        var list=document.getElementsByTagName("abbr");
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
    document.lastChild.appendChild(dl);
}

window.onload=definitionlist;