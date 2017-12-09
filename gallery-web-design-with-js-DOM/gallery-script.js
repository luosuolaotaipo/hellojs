function showPic(whichpic){
    var srcpic = document.getElementById("placeholder");
    srcpic.setAttribute("src",whichpic.getAttribute("href"));
    var desctext=whichpic.getAttribute("title");
    var descrption=document.getElementById("discription");
    descrption.childNodes[0].nodeValue=desctext;
}

function countBodyChildren(){
    var body_children=document.getElementsByTagName("body")[0];
    alert(body_children.nodeType);
}
function test(){
    var test=document.getElementById("discription");
    alert(test.nodeValue);
}
window.onload=test();

