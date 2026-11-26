const progreso = document.getElementById("progreso");
const plataforma = document.getElementById("plataforma");
const clase = document.getElementById("clase");

progreso.textContent = "progreso:100";
plataforma.textContent = "plataforma:Moodle";
clase.textContent = "clase:activada";

//seleccion a traves de nombre de clase
const participante = document.querySelector(".participante");
participante.textContent = "Docente Carlos";

const h2Objeto = document.querySelector("h2");
h2Objeto.textContent = "Preparando aula";

const curso = document.querySelector("#curso");
curso.textContent = "Preparando curso";


const estadoEstudiante = document.querySelector("#estudiante .estado");
estadoEstudiante.textContent = "conectado a la clase";

const cursos = document.querySelectorAll(".cursos");
console.log(cursos);
console.log(cursos.length);

console.log(cursos[0].textContent);
console.log(cursos[1].textContent);
console.log(cursos[2].textContent);
console.log(cursos[3].textContent);
console.log(cursos[4].textContent);
console.log(cursos[5].textContent);

console.log("recorrer otra vez con for");
for (let i = 0; i < cursos.length; i++) {
    console.log(cursos[i].textContent);
}

console.log("con forEach");
cursos.forEach(function (curso) {
    console.log(curso.textContent);
});

console.log("con for of");
for (let curso of cursos) {
    console.log(curso.textContent);
}
