let estudiantes = [
    {
        id: 1,
        nombre: "Ana Lopez",
        curso: "programacion web",
        estado: "activo"
    },
    {
        id: 2,
        nombre: "Luis Torres",
        curso: "ingles basico",
        estado: "inactivo"
    },
    {
        id: 3,
        nombre: "Sofia Mora",
        curso: "bases de datos",
        estado: "retirado"
    },
];

const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const curso = document.getElementById("curso");
const estado = document.getElementById("estado");
const guardar = document.getElementById("guardar");
const cancelar = document.getElementById("cancelar");

const cantidad = document.getElementById("cantidad");
const contenedor = document.getElementById("contenedor");

let idEditando = null;

function mostrarEstudiantes() {
    contenedor.replaceChildren();
    if (cantidad) {
        cantidad.textContent = estudiantes.length;
    }

    estudiantes.forEach(function (estudiante) {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");

        const titulo = document.createElement("h3");
        titulo.textContent = estudiante.nombre;

        const parrafoCurso = document.createElement("p");
        parrafoCurso.textContent = "Curso: " + estudiante.curso;

        const parrafoEstado = document.createElement("p");
        parrafoEstado.textContent = "Estado: " + estudiante.estado;

        const acciones = document.createElement("div");
        acciones.classList.add("acciones");

        const botonEditar = document.createElement("button");
        botonEditar.type = "button";
        botonEditar.textContent = "Editar";
        botonEditar.classList.add("editar");
        botonEditar.addEventListener("click", function () {
            editarEstudiante(estudiante.id);
        });

        const botonEliminar = document.createElement("button");
        botonEliminar.type = "button";
        botonEliminar.textContent = "Eliminar";
        botonEliminar.classList.add("eliminar");
        botonEliminar.addEventListener("click", function () {
            const confirmarEliminar = confirm(`¿Eliminar a ${estudiante.nombre}?`);
            if (!confirmarEliminar) return;

            estudiantes = estudiantes.filter(function (e) {
                return e.id !== estudiante.id;
            });
            if (idEditando === estudiante.id) {
                limpiarFormulario();
            }
            mostrarEstudiantes();
        });

        acciones.append(botonEditar, botonEliminar);
        tarjeta.append(titulo, parrafoCurso, parrafoEstado, acciones);
        contenedor.appendChild(tarjeta);
    });
}

function editarEstudiante(id) {
    const estudiante = estudiantes.find(function (e) {
        return e.id === id;
    });
    if (!estudiante) return;

    nombre.value = estudiante.nombre;
    curso.value = estudiante.curso;
    estado.value = estudiante.estado;
    idEditando = id;
    guardar.textContent = "Editar";
    cancelar.hidden = false;
    nombre.focus();
}

mostrarEstudiantes();

let siguienteId = 4;

formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    const nombreEstudiante = nombre.value.trim();
    const cursoEstudiante = curso.value;
    const estadoEstudiante = estado.value;

    if (nombreEstudiante === "") return;

    if (idEditando === null) {
        const nuevoEstudiante = {
            id: siguienteId,
            nombre: nombreEstudiante,
            curso: cursoEstudiante,
            estado: estadoEstudiante,
        };
        siguienteId++;
        estudiantes.push(nuevoEstudiante);
    } else {
        const estudiante = estudiantes.find(function (e) {
            return e.id === idEditando;
        });
        if (estudiante) {
            estudiante.nombre = nombreEstudiante;
            estudiante.curso = cursoEstudiante;
            estudiante.estado = estadoEstudiante;
        }
        idEditando = null;
        guardar.textContent = "Agregar";
        cancelar.hidden = true;
    }

    formulario.reset();
    mostrarEstudiantes();
});

function limpiarFormulario() {
    formulario.reset();
    idEditando = null;
    guardar.textContent = "Agregar";
    cancelar.hidden = true;
}

cancelar.addEventListener("click", function () {
    limpiarFormulario();
});
