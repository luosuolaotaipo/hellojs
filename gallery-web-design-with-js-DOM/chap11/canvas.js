function draw(){
    var canvas = document.getElementById("draw-in-me");
    if(canvas.getContext){
        var ctx=canvas.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(120.0,30);
        ctx.bezierCurveTo(120,36.4,116.4,40,112,40);
        ctx.lineTo(8,40);
        ctx.bezierCurveTo(3.6,40,0,36.4,0,32);
        ctx.lineTo(0,8);
        ctx.bezierCurveTo(0,3.6,3.6,0,8,0);
        ctx.lineTo(112,0);
        ctx.bezierCurveTo(116.4,0,120,3.6,120,8);
        ctx.lineTo(120,32);
        ctx.closePath();
        ctx.fill();
        ctx.lineWidth=2.0;
        ctx.strokeStyle="rgb(255,200,200)";
        ctx.stroke();
    }
}

window.onload=draw();