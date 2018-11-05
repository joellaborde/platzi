var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGTH: 39
};

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

document.addEventListener("keyup", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("red", x-1, y-1, x+1, y-1, papel);

function dibujarTeclado(evento)
{
  var colorcito = "brown";
  var movimiento = 10;
  if(evento.keyCode == teclas.UP)
  {
    dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
    y = y - movimiento
  }
  if(evento.keyCode == teclas.DOWN)
  {
    dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
    y = y + movimiento
  }
  if(evento.keyCode == teclas.LEFT)
  {
    dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
    x = x - movimiento
  }
  if(evento.keyCode == teclas.RIGHT)
  {
    dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
    x = x + movimiento
  }
}
