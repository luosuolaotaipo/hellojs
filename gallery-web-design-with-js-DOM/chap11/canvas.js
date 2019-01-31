function draw(){
    var canvas = document.getElementById("draw-in-me");
    if(canvas.getContext){
        var ctx=canvas.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(120.0,30);
        ctx.bezierCurveTo(120,36.4,116.4,40,112,40);
        ctx.lineTo(0,8);
        ctx.stroke();
    }
}

window.onload=draw();