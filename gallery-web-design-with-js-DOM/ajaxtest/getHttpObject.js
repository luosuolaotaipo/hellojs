//xmlhttp various in different IE
function getHTTPObject(){
    if(typeof XMLHttpRequest=="undefined"){
        XMLHttpRequest=function(){
            try{
                return new ActiveXObject("Msxml2.XMLHTTP.6.0");
            }catch(e){}
            return false;
        }
        return new XMLHttpRequest;
    }
}


