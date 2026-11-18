console.log(document);
const titulo = document.getElementById("titulo");
console.log(titulo);
titulo.textContent="Laboratorio Interdimemsional";

const estado = document.getElementById("estado");
const boton = document.getElementById("botonPortal");
boton.addEventListener("click", function(){
    console.log("Ejecutando click");
    estado.textContent="Portal Activado";
    console.log("Texto cambiado en el elemento estado");
    alert("Proceso de activacion del portal terminado");
});

const estadoMorty = document.getElementById("Mortylisto");
const botonMorty = document.getElementById("botonMorty");
botonMorty.addEventListener("click", function(){
    console.log("Ejecutando click");
    estadoMorty.textContent="Morty listo para la aventura";
    console.log("Texto cambiado en el elemento estado");
    alert("Proceso de activacion del portal terminado");
});

let viajes=0;
const contador = document.getElementById("contador");
const nuevoViaje = document.getElementById("nuevoViaje");
nuevoViaje.addEventListener("click", function(){
    viajes+=1;
    contador.textContent=viajes;
});