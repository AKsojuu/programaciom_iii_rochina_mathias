const personaje = document.getElementById("personaje");
const cambiar = document.getElementById("cambiar");
const verCurso = document.getElementById("verCurso");
const curso = document.getElementById("curso");


cambiar.addEventListener("click", function () {
    if (personaje.getAttribute("title") == "docente") {
        personaje.setAttribute("src", "https://placehold.co/200x200/166534/ffffff?text=Estudiante");
        personaje.setAttribute("title", "estudiante");
        personaje.dataset.curso = "Ingles Basico";

    } else {
        personaje.setAttribute("src", "https://placehold.co/200x200/1e3a8a/ffffff?text=Docente");
        personaje.setAttribute("title", "docente");
        personaje.dataset.curso = "Programacion Web";
    }
});

verCurso.addEventListener("click", function () {
    curso.textContent = personaje.dataset.curso;
});

const aula = document.getElementById("aula");
const activarAula = document.getElementById("activarAula");

activarAula.addEventListener("click", function () {
    if (aula.textContent == "Aula Inactiva") {
        aula.style.backgroundColor = "green";
        aula.style.color = "white";
        aula.textContent = "Aula Activa";
    } else {
        aula.style.backgroundColor = "red";
        aula.style.color = "white";
        aula.textContent = "Aula Inactiva";
    }

});
