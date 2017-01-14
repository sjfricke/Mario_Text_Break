var canvas = document.createElement("DIV");
// set up the canvas and context
//canvas = document.createElement("canvas");
canvas.setAttribute("id", "mainCanvas");
canvas.setAttribute("width",550);
canvas.setAttribute("height",550);
canvas.style.position = "absolute";
canvas.style.top = 0;
canvas.style.left = 0;
//canvasDiv.appendChild(canvas);

document.body.appendChild(canvas);
//document.body.appendChild(canvasDiv);
console.log(canvas);
