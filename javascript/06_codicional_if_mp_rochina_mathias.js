// Esta línea permite usar prompt en Node.js (instalar con: npm install prompt-sync)
const prompt = require('prompt-sync')();

console.log("Condicionales if");
let horasEstudio = Number(prompt("Estudiante, cuantas horas estudiaste hoy?"));
if (horasEstudio > 0) {
    console.log("Estudiaste lo suficiente para avanzar en el curso.");
}

console.log("Condicional if else dos caminos");
let tareasEntregadas = Number(prompt("Estudiante, cuantas tareas entregaste?"));
if (tareasEntregadas > 0) {
    console.log("Entregaste tareas, puedes continuar con el curso.");
} else {
    console.log("No entregaste tareas, debes ponerte al dia.");
}

console.log("Condicional if else if varios caminos");
let plataforma = prompt("Estudiante, en que plataforma estas?");

if (plataforma === "Moodle") {
    console.log("Estas en la plataforma Moodle.");
} else if (plataforma === "Classroom") {
    console.log("Estas en la plataforma Google Classroom.");
} else {
    console.log("Estas en una plataforma desconocida.");
}

console.log("Condicional if anidado");
let horasEstudio2 = 50;
let tareasEntregadas2 = 4;

if (horasEstudio2 > 0) {
    if (tareasEntregadas2 > 0) {
        console.log("Tienes horas de estudio y tareas entregadas para continuar el curso.");
    } else {
        console.log("No tienes tareas entregadas para continuar el curso.");
    }
}

console.log("Condicional con operador logico");
let horasEstudio3 = 50;
let tareasEntregadas3 = 4;

if (horasEstudio3 > 0 && tareasEntregadas3 > 0) {
    console.log("Tienes horas de estudio y tareas entregadas para continuar el curso.");
} else {
    console.log("No tienes horas de estudio o tareas entregadas para continuar el curso.");
}

console.log("Control de acceso a la clase virtual");
let internet = 400;
let bateria = 50;
let docente_disponible = "si";
let tutor_disponible = "no";
let plataforma_caida = "si";

if (internet > 0 &&
    bateria > 0 &&
    (docente_disponible == "si" ||
    tutor_disponible == "si") && !
    (plataforma_caida == "si"))
{
    console.log("Acceso a la clase autorizado");
} else {
    if (internet < 50)
    {
        console.log("No hay suficiente internet para la clase");
    }
    if (bateria < 50)
    {
        console.log("No hay suficiente bateria para la clase");
    }
    if (docente_disponible == "no")
    {
        console.log("El docente no esta disponible para la clase");
    }
    if (tutor_disponible == "no")
    {
        console.log("El tutor no esta disponible para la clase");
    }
    if (plataforma_caida == "si")
    {
        console.log("La plataforma esta caida y no se puede entrar a la clase");
    }
}

console.log("Evaluacion del curso");
let tareasObjetivo = 20;
let tareasCompletadas = 15;
let horasIniciales = 100;
let horasUsadas = 85;
let problemasInternet = "si";
let plataformaCaida = "no";
let puntosExtra = 0;
let porcentajeCumplimiento = (tareasCompletadas / tareasObjetivo) * 100;
let horasRestantes = horasIniciales - horasUsadas;
console.log("Resultados del curso:");

if (porcentajeCumplimiento >= 90) {
    console.log("Curso aprobado con exito.");
} else if (porcentajeCumplimiento >= 70 && porcentajeCumplimiento < 90) {
    console.log("Curso parcialmente completado.");
} else if (porcentajeCumplimiento >= 50 && porcentajeCumplimiento < 70) {
    console.log("Curso regular.");
} else {
    console.log("Curso reprobado.");
}

console.log("Evaluacion de puntos extra por desempeño");
if (porcentajeCumplimiento >= 90 && horasRestantes > 10) {
    puntosExtra = 1;
    console.log("Puntos extra por desempeño:", puntosExtra);
} else {
    console.log("No hay puntos extra por desempeño.");
}

console.log("Entrega final del curso");
if (problemasInternet == "no" && plataformaCaida == "no") {
    console.log("Entrega final sin problemas.");
} else if (problemasInternet == "si" && plataformaCaida == "no") {
    console.log("Entrega final con problemas de internet.");
} else if (problemasInternet == "no" && plataformaCaida == "si") {
    console.log("Entrega final con la plataforma caida.");
} else {
    console.log("Entrega final con problemas de internet y la plataforma caida.");
}

console.log("Resumen del curso:");
console.log("Tareas Objetivo:", tareasObjetivo);
console.log("Tareas Completadas:", tareasCompletadas);
console.log("Porcentaje de Cumplimiento:", porcentajeCumplimiento.toFixed(2) + "%");
console.log("Horas Iniciales:", horasIniciales);
console.log("Horas Usadas:", horasUsadas);
console.log("Horas Restantes:", horasRestantes);
console.log("Problemas de Internet:", problemasInternet);
console.log("Plataforma Caida:", plataformaCaida);
console.log("Puntos Extra:", puntosExtra);
