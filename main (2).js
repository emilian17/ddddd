
canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=1;
ctx.arc(100,200,30,0,2*Math.PI);
ctx.stroke();


canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(oxxo)
{
    //obtener color del cuadro de entrada
    //inicio de la actividad adicional
    color = document.getElementById("color").value;
    console.log(color);
    //final de la actividad adicional
    
     mouse_x = oxxo.clientX - canvas.offsetLeft;
     mouse_y = oxxo.clientY - canvas.offsetTop;

    console.log("X = " + mouse_x + " ,Y =  " + mouse_y);
    circle(mouse_x , mouse_y);    
}

function circle(mouse_x , mouse_y)
{
    color = "blue"; 
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=1;
    ctx.arc(mouse_x,mouse_y,30,0,2*Math.PI);
    ctx.stroke();
}

//actividad adicional

function clearArea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

	
