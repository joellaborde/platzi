var cl = document.getElementById("cerdoLoco");
var papel = cl.getContext("2d");

 var cerdo = {
   url: "cerdo.png",
   cargaOK: false
 }

 cerdo.imagen = new Image();
 cerdo.imagen.src = cerdo.url;
 cerdo.imagen.addEventListener("load", cargarCerdos);

 function cargarCerdos(){
   cerdo.cargaOK = true;
   dibujar();
 }

 function dibujar()
 {
   if (cerdo.cargaOK)
   {
     papel.drawImage(cerdo.imagen, 0, 0);
   }
