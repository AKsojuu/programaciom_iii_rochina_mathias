let notas = [30, 50, 70, 40];
for (let i = 0; i < notas.length; i++) {       /* empieza en la posicion cero y despues suma 1 */
    console.log("posicion:", i);
    console.log("Nota:", notas[i]);            /* elige el numero que se encuentra en la posicion i */
}

console.log("----------------------------------------");
let nota = [30, 50, 70, 40];
let posicion = 2;
let nuevaNota = 100;
for (let i = 0; i < nota.length; i++) {
    console.log("posicion:", i);
    console.log("Nota:", nota[i]);
    if (posicion >= 0 && posicion < nota.length) {
        nota[posicion] = nuevaNota;
    } else {
        console.log("Posicion invalida");
    }
}
console.log(nota);

console.log("----------------------------------------");

let estudiantes = [
    { id: 1, nombre: "Ana", promedio: 99, edad: 20 },
    { id: 2, nombre: "Luis", promedio: 80, edad: 19 },
    { id: 3, nombre: "Sofia", promedio: 100, edad: 18 },
];
for (let estudiante of estudiantes) {
    console.log("ID:", estudiante.id);
    console.log("Nombre:", estudiante.nombre);
    console.log("Promedio:", estudiante["promedio"]);
    console.log("Edad:", estudiante["edad"]);
}

console.log("----------------------------------------");

console.log("El docente organiza las tareas");
let tareas = [
    {
        estudiante: "Ana",
        puntos: [30, 50, 60]
    },
    {
        estudiante: "Luis",
        puntos: [20, 30, 30]
    },
    {
        estudiante: "Sofia",
        puntos: [90, 80, 70]
    }
];

for (let tarea of tareas) {
    let totalPuntos = 0;
    console.log("estudiante:", tarea.estudiante);
    for (let punto of tarea.puntos) {
        console.log("Puntos obtenidos:", punto);
        totalPuntos += punto;
    }
    console.log("total de puntos de", tarea.estudiante, "son:", totalPuntos);
}

console.log("----------------------------------------------------------------------------------");

let notasOriginales = [30, 50, 70, 40];
let notasDobles = notasOriginales.map(elemento => {
    return elemento * 2;
});
console.log(notasDobles);
let aprobadas = notasOriginales.filter(nota => nota >= 50);
console.log(aprobadas);
let resultado = notasOriginales.reduce((acumulador, elemento) => {
    return acumulador + elemento;
}, 0);
console.log("Suma de las notas:", resultado);
