var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var x = 0
var y = 0
ctx.fillStyle = "#000000";
ctx.fillRect(0, 0, 1000, 1000);
ctx.fillStyle = "red";
ctx.fillRect(x, y, 200, 200);

ctx.fillStyle = "green";
ctx.fillRect(x, y, 60, 200);
ctx.fillStyle = "White";
ctx.fillRect(60, y, 70, 200);
/*ctx.fillStyle = "#000000";
ctx.fillRect(0, 0, 1000, 600);
ctx.fillStyle = "red";
ctx.fillRect(x, y, 200, 200);

ctx.fillStyle = "green";
ctx.fillRect(x, y, 60, 200);
ctx.fillStyle = "White";
ctx.fillRect(60, y, 70, 200);*/

ctx.fillStyle = "white";
ctx.fillRect(x, 205, 200, 200);

ctx.fillStyle = "red";
ctx.fillRect(x, 280, 200, 50);
ctx.fillStyle = "red";
ctx.fillRect(70, 205, 50, 200);
ctx.fillStyle = "orange";
ctx.fillRect(x, 405, 200, 200);

ctx.fillStyle = "green";
ctx.fillRect(x, 405, 60, 200);
ctx.fillStyle = "White";
ctx.fillRect(60, 405, 70, 200);


/*var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.beginPath();
ctx.arc(100,75,50,0,2*Math.PI);
ctx.stroke();*/ 
ctx.fillStyle = "White";
ctx.fillRect(250, y, 300, 200);
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.beginPath();
ctx.fillStyle = 'red';
ctx.arc(400,90,50,0,2*Math.PI);
ctx.fill();

ctx.fillStyle = "DarkCyan";
ctx.fillRect(250, 200, 300, 200);
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.beginPath();
ctx.fillStyle = 'gold';
ctx.arc(375,300,50,0,2*Math.PI);
ctx.fill();

ctx.fillStyle = "red";
ctx.fillRect(250, 401, 300, 200);
ctx.fillStyle = "white";
ctx.fillRect(250, 401, 300, 100);

var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.beginPath();
ctx.fillStyle = 'red';
ctx.arc(375,500,50,0,2*Math.PI);
ctx.fill();
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.beginPath();
ctx.fillStyle = 'white';
ctx.arc(375,500,50,0,1*Math.PI);
ctx.fill();