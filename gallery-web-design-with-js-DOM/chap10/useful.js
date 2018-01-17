function moveElement(elementName,xDestination,yDestinaton,duration){
    if(!document.getElementById(elementName)){
        console.log("into move element");
        return false;
    }
    else{
        var elem = document.getElementById(elementName);
        // elem.movefalg
        if(elem.movefalg){
            clearTimeout(elem.movefalg)
        }
        var xPos=elem.style.left;//如果没有设置，没有默认值可以取到
        var yPos=elem.style.top;
        xPos=parseInt(xPos);
        yPos=parseInt(yPos);
        console.log(elem);
        if(xPos==xDestination&&yPos==yDestinaton){
            return true;
        }
        if(xPos<xDestination){
            xPos++;
        }
        if(xPos>xDestination){
            xPos--;
        }
        if(yPos<yDestinaton){
            yPos++;
        }
        if(yPos>yDestinaton){
            yPos--;
        }
        elem.style.left=xPos+"px";
        elem.style.top=yPos+"px";
        console.log(elem.style.left);
        elem.movefalg = setTimeout(() => {
            moveElement(elementName,xDestination,yDestinaton,duration)
        }, duration);
        
    }
}

function movePic(){
    if(!document.getElementsByTagName("ol")){return false;}
    else{
        var link=document.getElementsByTagName("ol");
        var links=link[0].getElementsByTagName("a");
        links[0].onmouseover=function(){
            console.log("into mouseover");
            moveElement("pics",-200,0,5);
        }
        links[1].onmouseover=function(){
            console.log("into mouseover");
            moveElement("pics",-400,0,5);
        }
        links[2].onmouseover=function(){
            console.log("into mouseover");
            moveElement("pics",-600,0,5);
        }

    }
}


function onLoad(func){
    var oldfuncs=window.onload;
    if(typeof oldfuncs !="function"){
        window.onload=func;
    }
    else{
        window.onload=function(){
            oldfuncs();
            func();
        }
    }
}


onLoad(movePic);