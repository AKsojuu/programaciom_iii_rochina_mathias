console.log('Ciclo For');
for (let i = 1; i <= 5; i++) {
    console.log('Iteracion', i);
}

console.log("Cuenta regresiva para el inicio de la clase");
for (let i = 10; i >= 0; i--) {
    console.log('Faltan ' + i + ' segundos para la clase');
}

console.log("Cuenta regresiva para el inicio de la clase");
for (let i = 10; i >= 0; i--) {
    if (i === 0) {
        console.log('Inicia la clase');
    } else {
        console.log('Faltan ' + i + ' segundos para la clase');
    }
}

console.log("Nivel de progreso");
let progreso = 50;
for (let i = 0; i <= 100; i += 10) {
    if (progreso >= i) {
        console.log('Nivel de progreso alcanzado: ' + i + "%");
    } else {
        console.log('Nivel de progreso: ' + i + "%");
    }
}

const horasPorClase = 2;
let totalHoras = 0;
for (let clase = 1; clase <= 5; clase++) {
    totalHoras += horasPorClase;
    console.log("Clase " + clase);
    console.log("total de horas hasta ahora: " + totalHoras + " horas");
}
console.log("Total de horas: " + totalHoras + " horas");

console.log("Promedio de tareas entregadas");
let totalTareas = 0;
let dias = 7;
for (let dia = 1; dia <= dias; dia++) {
    let tareas = dia * 2 + 1;
    totalTareas += tareas;
    console.log("Dia " + dia + " Tareas entregadas: " + tareas);
}
console.log("Total de tareas entregadas en " + dias + " dias: " + totalTareas);
console.log("Promedio de tareas entregadas por dia: " + (totalTareas / dias).toFixed(2));

console.log("Dias de clase y dias libres");
let diasClase = 0;
let diasLibres = 0;
for (let dia = 1; dia <= 10; dia++) {
    if (dia % 2 === 0) {
        console.log("El dia " + dia + " es libre");
        diasLibres++;
    } else {
        console.log("El dia " + dia + " hay clase");
        diasClase++;
    }
}
console.log("Total de dias de clase: " + diasClase);
console.log("Total de dias libres: " + diasLibres);

console.log("Notas de las pruebas");
let notas = [35, 60, 45, 80, 70, 90, 55];
let total = 0;
let pruebasAprobadas = 0;
for (let i = 0; i < notas.length; i++) {
    total += notas[i];
    console.log("Prueba " + (i + 1) + ": Nota: " + notas[i]);
    if (notas[i] >= 50) {
        pruebasAprobadas++;
    } else {
        console.log("Prueba " + (i + 1) + " no fue aprobada");
    }
}
console.log("Total de puntos: " + total);
console.log("Total de pruebas aprobadas: " + pruebasAprobadas);

console.log("Recorrer Participantes con for ... of");
const participantes = ['Docente', 'Tutor', 'Ana', 'Luis', 'Sofia'];
for (const participante of participantes) {
    console.log('Participante:', participante);
}

let curso = {
    nombre: "Programacion Web",
    horas: 40,
    plataforma: "Moodle",
    estudiantes: ['Ana', 'Luis', 'Sofia']
};
console.log("Recorrer Curso con for ... in");
for (let propiedad in curso) {
    console.log(propiedad + ": " + curso[propiedad]);
    if (propiedad === "estudiantes") {
        console.log("Estudiantes del curso:");
        for (let estudiante of curso[propiedad]) {
            console.log(estudiante);
        }
    }
}
for (let estudiante of curso["estudiantes"]) {
    console.log("Estudiante:", estudiante);
}

let tareas = [
    { nombre: "tarea 1", puntos: 90, meta: 100, estudiante: "Ana" },
    { nombre: "tarea 2", puntos: 50, meta: 100, estudiante: "Luis" },
    { nombre: "tarea 3", puntos: 30, meta: 100, estudiante: "Sofia" },
];
let exitosas = 0;
for (let tarea of tareas) {
    let porcentaje = (tarea.puntos / tarea.meta) * 100;
    console.log("Tarea: " + tarea.nombre +
        " Estudiante: " + tarea.estudiante +
        " Puntos: " + tarea.puntos +
        " Meta: " + tarea.meta +
        " Porcentaje de exito: " + porcentaje.toFixed(2) + "%");
    if (porcentaje >= 90) {
        exitosas++;
    } else {
        console.log("La " + tarea.nombre + " no fue exitosa");
    }
}
console.log("Total de tareas exitosas: " + exitosas);

console.log("Uso de break y continue en un ciclo for");
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Se encontro el numero 5, se detiene el ciclo");
        break;
    }
    console.log("Numero: " + i);
}
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Se encontro el numero 5, se omite la iteracion");
        continue;
    }
    console.log("Numero: " + i);
}
for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        console.log("Se encontro el numero 7, se omite la iteracion");
        continue;
    }
    if (i % 2 === 0) {
        console.log("Se encontro un numero par, se omite la iteracion");
        continue;
    }
    console.log("Numero impar: " + i);
}
