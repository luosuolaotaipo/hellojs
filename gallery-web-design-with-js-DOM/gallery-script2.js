function selectAPic(){
    //check:the browser can read JS
    if(!document.getElementById){
        return false;
    }
    if(!document.getElementsByName){
        return false;
    }
    //check :the html has those signals
    var picul=document.getElementsByClassName("imglists");
    var picholder=document.getElementById("placeholder");
    if(picholder===null){return false;}
    var description=document.getElementById("discription");
    if(description===null){return false;}
    var pica=picul.item(0).getElementsByTagName("a");
    for(var i=0;i<pica.length;i++){
        pica[i].onclick=function(){
            picholder.setAttribute("src",this.getAttribute("href"));
            description.childNodes[0].nodeValue=this.getAttribute("title");
            return false;
        }
        //设置按键事件
        // pica[i].onkeypress=pica[i].onclick;
    }
    
}

function addOnLoadEvent(func){
    var oldonload=window.onload;
    if(typeof oldonload!='function'){
        window.onload=func;
    }
    else{
        window.onload=function(){
            oldonload();//这样传值？真的可以么
            func();
        }
    }
}
window.onload=addOnLoadEvent(selectAPic());
