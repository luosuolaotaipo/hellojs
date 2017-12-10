function testinnerhtml() {
    var _testdiv=document.getElementById("testdiv");
    // alert(_testdiv.innerHTML);
    _testdiv.innerHTML= "<p>this is inserted<em>my</em>content.</p>"; 
}
function testCreatDOMNode(){
    var para=document.createElement("p");
    var paracontent=document.createTextNode("hello create DOM node");
    para.appendChild(paracontent);
    var _testdiv2=document.getElementById("testdiv2");
    _testdiv2.appendChild(para);
}
function onLoadEvent(func){
    var oldonload=window.onload;
    if(typeof oldonload !="function"){
        window.onload=func();
    }
    else{
        window.onload=function(){
            oldonload();
            func();
        }
    }
}

onLoadEvent(testinnerhtml);
onLoadEvent(testCreatDOMNode);
