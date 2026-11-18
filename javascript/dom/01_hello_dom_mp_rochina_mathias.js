console.log(document);

const titulo = document.getElementById("titulo");
console.log(titulo);


console.log(titulo);
titulo.textContent = "Aula virtual de E-learning";


const estado = document.getElementById("estado");
const boton = document.getElementById("botonClase");
boton.addEventListener("click", function () {
    console.log("Ejecutando click...");
    estado.textContent = "CLASE ACTIVADA";
    console.log("texto cambiado en el elemento estado");
    alert("proceso de activacion de la clase terminado");
});

const boton1 = document.getElementById("listo");
boton1.addEventListener("click", function () {
    estado.textContent = "CURSO LISTO ";
    alert("EL ESTUDIANTE ESTA LISTO PARA EL CURSO");
});

let clases = 0;
const contador = document.getElementById("contador");
const nuevaClase = document.getElementById("nuevaClase");
nuevaClase.addEventListener("click", function () {
    clases += 1;
    contador.textContent = clases;
});
