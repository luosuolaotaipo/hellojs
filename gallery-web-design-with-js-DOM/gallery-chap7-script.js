function addelements(){
    //PlaceHolder
    var placeholder=document.createElement("img");
    placeholder.setAttribute("id","placeholder");
    //Description
    var description=document.createElement("p");
    description.setAttribute("id","description");
    var desctext=document.createTextNode("choose a pic");
    description.appendChild(desctext);
    //add to the html
    document.getElementsByTagName("body")[0].appendChild(placeholder);//after a node
    // document.getElementsByTagName("body")[0].appendChild(description);
    var descriptionlocation=document.getElementsByClassName("imglists")[0];
    descriptionlocation.parentNode.insertBefore(description,descriptionlocation);//before a node

}

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
    if(picul==null){return false;}
    var pica=picul.item(0).getElementsByTagName("a");
    for(var i=0;i<pica.length;i++){
        pica[i].onclick=function(){
            placeholder.setAttribute("src",this.getAttribute("href"));
            description.childNodes[0].nodeValue=this.getAttribute("title");
            return false;
        }
        //设置按键事件
        // pica[i].onkeypress=pica[i].onclick;
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

onLoadEvent(addelements);
onLoadEvent(selectAPic);