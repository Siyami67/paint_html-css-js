var canvas = document.getElementById("canvas");

var ctx = canvas.getContext("2d");

document.addEventListener("mousemove",draw);
document.addEventListener("mousedown",takePosition);
document.addEventListener("mouseenter",takePosition);

var position = {x:0 , y:0};

function takePosition(e){
    position.x = e.offsetX;
    position.y = e.offsetY;
}
function draw(e) {

    if(e.buttons !== 1)return;
    
    var color = document.getElementById("color").value;
    var linewidth = document.getElementById("linewidth").value;

    ctx.beginPath();

    ctx.lineWidth =linewidth;
    ctx.lineCap = "round";
    ctx.strokeStyle = color;

    ctx.moveTo(position.x,position.y);
    takePosition(e);
    ctx.lineTo(position.x,position.y);

    ctx.stroke();
}
function clearCanvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}