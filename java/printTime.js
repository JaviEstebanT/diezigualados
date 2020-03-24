// JavaScript source code
function printTime() {
  var d = new Date();
  var diaSem = d.getDay();
    switch (diaSem) {
     case 1:
        diaSem = "Lunes";
        break;
     case 2:
        diaSem = "Martes";
        break;
     case 3:
        diaSem = "Miercoles";
        break;
     case 4:
        diaSem = "Jueves";
        break;
     case 5:
        diaSem = "Viernes";
        break;
     case 6:
        diaSem = "Sabado";
        break;
     default:
        diaSem = "Domingo";
    }
  var dia = d.getDate();
  var mes = d.getMonth() + 1;
  var ano = d.getFullYear();
  var hours = d.getHours();
  var mins = d.getMinutes();
  var secs = d.getSeconds();
  var hora = document.getElementById("hora");
  hora.style.fontSize="medium";
  hora.style.color="black"
  hora.innerHTML = diaSem+", "+dia+"/"+mes+"/"+ano+" "+hours+":"+mins+":"+secs;
}
setInterval(printTime, 1000);
