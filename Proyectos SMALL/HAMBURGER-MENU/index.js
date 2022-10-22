document.querySelector(".container-menu").addEventListener("click", animateBars);

var line1_barra =document.querySelector(".line1-barra");
var line2_barra =document.querySelector(".line2-barra");
var line3_barra =document.querySelector(".line3-barra");
//var del container menu para que se active cuando se clikea el icono

function animateBars(){
    line1_barra.classList.toggle("activeline1-barra");
    line2_barra.classList.toggle("activeline2-barra");
    line3_barra.classList.toggle("activeline3-barra");
    //function para activar menu
}