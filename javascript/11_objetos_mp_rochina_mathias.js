let nombre = "Programacion Web";
let horas = 40;
let plataforma = "Moodle";
let nivel = 1;
let finalizado = false;

let curso = {
    nombre: "Programacion Web",
    horas: 40,
    plataforma: "Moodle",
    nivel: 1,
    finalizado: false
}

console.log("informacion del curso:");
console.log("Nombre del curso: " + curso.nombre);
console.log("Horas del curso: " + curso["horas"]);
console.log("Plataforma: " + curso["plataforma"]);
console.log("Nivel: " + curso["nivel"]);
console.log("Estado del curso: " + curso["finalizado"]);
console.log("curso", curso);

console.log("agregar una nueva propiedad al curso");
curso.modalidad = "Virtual";
console.log("Modalidad del curso: " + curso.modalidad);
curso["capacidadEstudiantes"] = 30;
console.log("capacidad de estudiantes: " + curso["capacidadEstudiantes"]);
console.log("curso", curso);

console.log("Actualizar el nivel del curso");
curso.nivel = 2;
console.log("nuevo nivel: " + curso.nivel);
curso["finalizado"] = true;
console.log("nuevo estado del curso: " + (curso.finalizado ? "finalizado" : "en progreso"));

console.log("curso", curso);
console.log("eliminar las propiedades del curso");
delete curso.capacidadEstudiantes;
console.log("propiedad 'capacidadEstudiantes' eliminada");
console.log("curso", curso);

console.log("Recorrer las propiedades del curso");
for (let propiedad in curso) {
    console.log(propiedad + ": " + curso[propiedad]);
}

console.log("curso", curso);


let biblioteca = {
    libros: 3,
    videos: 4,
    pdfs: 87
}

console.log("calculo de recursos en la biblioteca virtual");

for (let recurso in biblioteca) {
    console.log(recurso + ": " + biblioteca[recurso]);
}
let total = biblioteca.libros + biblioteca.videos + biblioteca.pdfs;
console.log("total de recursos de la biblioteca: " + total);
