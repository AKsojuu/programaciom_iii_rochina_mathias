console.log("E-learning: funciones en javascript");

function abrirAula() {
    console.log("Abriendo aula virtual...");
}
abrirAula();


function estudiarCurso(nombre) {
    console.log(nombre + " esta estudiando en el aula virtual");
}
estudiarCurso("Mathias");


function subirProgreso(progreso, avance) {
   let progresoTotal = progreso + avance;
   if (progresoTotal > 100) {
       progresoTotal = 100;
   }
   console.log("Progreso del curso actualizado a " + progresoTotal + "%");
   return progresoTotal;
}
let progreso = 50;
progreso = subirProgreso(progreso, 30);
progreso = subirProgreso(progreso, 40);


console.log("calcular descuentos en cursos");
function calcularDescuento(precio, descuento) {
    let precioFinal = precio - (precio * descuento / 100);
    return precioFinal;
}
let precioOriginal = 100;
let porcentajeDescuento = 20;
let precioConDescuento = calcularDescuento(precioOriginal, porcentajeDescuento);
console.log("Precio Original: " + precioOriginal + " precio con descuento: " + precioConDescuento);


function evaluarExamen(bateria, correctas, totalPreguntas) {
    let porcentajeCorrectas = (correctas / totalPreguntas) * 100;
    if (bateria < 20) {
        console.log("ADVERTENCIA: Bateria baja. Nivel actual: " + bateria + "% ");
    }
    if (porcentajeCorrectas >= 70) {
        console.log("Examen aprobado con un porcentaje de respuestas correctas de: " + porcentajeCorrectas + "%");
    } else {
        console.log("Lo siento, no aprobaste el examen. Porcentaje de respuestas correctas: " + porcentajeCorrectas + "%");
    }
}
evaluarExamen(15, 8, 10);


function tareaAprobada(puntos) {
    let objetivo = 50;
    if (puntos >= objetivo) {
        console.log("Tarea aprobada, puntos obtenidos: " + puntos);
    } else {
        console.log("Tarea reprobada, puntos obtenidos: " + puntos);
    }
}
tareaAprobada(70);
tareaAprobada(30);
