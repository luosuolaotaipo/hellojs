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

// onLoadEvent(getHTTPObject());
onLoadEvent(getNewContent());