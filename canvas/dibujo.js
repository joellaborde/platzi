var texto = document.getElementById("texto_lineas")
var boton = document.getElementById("botoncito")
boton.addEventListener("click", dibujoPorClick );

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
  var xxx = parseInt(texto.value);
  var lineas = xxx;
  var l = 0;
  var yi, xf;
  var espacio = ancho / lineas;

  while(l < lineas)
  {
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea("blue", 300, yi, xf, 0);
    console.log("Linea " + l);
    l = l + 1;
  }
   dibujarLinea("red", 1,1,1,299)
   dibujarLinea("red", 1,299,299,299)
}
