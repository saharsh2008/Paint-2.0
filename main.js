var mouseEvent = "empty";
var lastPositionOfX;
var lastPositionOfY;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "black";
line_width = "2";
canvas.addEventListener("mousedown", myMouseDown);

function myMouseDown(e) {
    mouseEvent = "mousedown";
    color = document.getElementById("color").value;
    console.log(color);
    line_width = document.getElementById("widthOfLine").value;
}

canvas.addEventListener("mouseleave", myMouseLeave);

function myMouseLeave(e) {
    mosuseEvent = "mouseleave";
}

canvas.addEventListener("mouseup", myMouseUp);

function myMouseUp(e) {
    mouseEvent = "mouseup";
}

canvas.addEventListener("mousemove", myMouseMove);

function myMouseMove(e) {
    currentPositionOfX = e.clientX - canvas.offsetLeft;
    currentPositionOfY = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = line_width;
        ctx.moveTo(lastPositionOfX, lastPositionOfY);
        console.log("last position of x and y ");
        console.log("x =" + lastPositionOfX + ", y =" + lastPositionOfY);
        ctx.lineTo(currentPositionOfX, currentPositionOfY);
        console.log("current position of x and y ");
        console.log("x =" + currentPositionOfX + ", y =" + currentPositionOfY);
        ctx.stroke();
    }
    lastPositionOfX = currentPositionOfX;
    lastPositionOfY = currentPositionOfY;
}

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

var width = screen.width;
    var newWidth = screen.width - 70;
    var newHeight = screen.height - 300;
    if (width < 992) {
        document.getElementById("myCanvas").width = newWidth;
        document.getElementById("myCanvas").height = newHeight;
        document.body.style.overflow = "hidden";
    }

    canvas.addEventListener("touchstart", my_touchStart);
    
    function my_touchStart(e)
    {
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("widthOfLine").value;
        last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
        last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
    }

    canvas.addEventListener("touchmove", my_touchMove);
    function my_touchMove(e)
    {

         current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();

        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
    }

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}