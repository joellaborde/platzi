var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = {
  url: "villa.pgn",
  cargaOK: false
};

var vaca = {
  url: "vaca.png",
  cargaOK: false
};

var cerdo = {
  url: "cerdo.png",
  cargaOK: false
};

var pollo = {
  url: "pollo.png",
  cargaOk: false
};


var cantidad = aleatorio(5, 25);

/*
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);
*/
vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

function cargarFondo(){
  fondo.cargaOK = true;
  dibujar();
}

function cargarVacas(){
  vaca.cargaOK = true;
  dibujar();
}

function cargarCerdos(){
  cerdo.cargaOK = true;
  //dibujar();
}

function cargarPollos(){
  pollo.cargaOK = true;
  //dibujar();
}


function dibujar()
{

  if (fondo.cargaOK)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }

  if (vaca.cargaOK)
  {
    console.log(cantidad);

    for(var v=0; v < cantidad; v++)
    {
      var x = aleatorio(0, 5);
      var y = aleatorio(0, 5);
      var x = x * 60;
      var y = y * 60;

      papel.drawImage(vaca.imagen, x, y);
     }
   }

/*
   if (cerdo.cargaOK)
   {
     console.log(cantidad);

     for(var v=0; v < cantidad; v++)
     {
       var x = aleatorio(0, 6);
       var y = aleatorio(0, 6);
       var x * 70;
       var y * 70;
       papel.drawImage(cerdo.imagen, x, y)
      }
    }

    if (pollo.cargaOK)
    {
      console.log(cantidad);

      for(var v=0; v < cantidad; v++)
      {
        var x = aleatorio(0, 5);
        var y = aleatorio(0, 5);
        var x * 80;
        var y * 80;

        papel.drawImage(pollo.imagen, x, y);
       }
     }
     */
}

function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
