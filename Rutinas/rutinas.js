function ver() {
   var NUMERO= document.getElementById("numero").value;
   'document.write(NUMERO);'
   var Tope = parseInt(NUMERO);
   if (Tope < 1) {

        document.getElementById("resultado").innerHTML = "<h1>ingrese valor </h1>";
   } else{
    var resultado= "";

    var i = 1;
 
    while(i<= Tope){
    resultado= resultado + "<h2>" +i + "</h2><br />"
    i ++;
    }
 
 
 document.getElementById("resultado").innerHTML = resultado
     
 }
   }
   function encenderBombita() {
 
    document.getElementById("bombita").src = "img/pic_bulbon.gif";

   }
   function apagarBombita() {

    document.getElementById("bombita").src = "img/pic_bulboff.gif";
    
}
  