function moveWhee(){
    if(!document.getElementById) return false;
    if(!document.getElementById("whee")) return false;
    var whee = document.getElementById("whee");
    // 获得当前元素的位置
    var xPos=whee.style.left;
    console.log(xPos);
    var yPos=whee.style.top;
    // 将属性值的字符串转成数值
    var xPosition=parseInt(xPos);
    var yPosition=parseInt(yPos);
    //
    if(xPosition<200){
        xPosition++;
    }
    if(yPosition<200){
        yPosition++;
    }
    if(xPosition==200&&yPosition==200){
        return true;
    }
    whee.style.left=xPosition+"px";
    // setTimeout("moveWhee()",10);
        setTimeout(() => {
            console.log(whee.style.xPosition);
            moveWhee();
        }, 10);
}

window.onload=moveWhee();