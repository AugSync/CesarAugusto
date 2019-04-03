$('.carousel').carousel({
    interval: 10000
})

var nombre = document.getElementById("nombre");
let font = document.getElementById("font");

function Animacion(m) {
    console.log('estoy cargando la animación')
    nombre.classList.add('font-a', 'animacion')
}

function fontloaded() {
    font.addEventListener("load", Animacion())
}

$(document).ready(fontloaded());
