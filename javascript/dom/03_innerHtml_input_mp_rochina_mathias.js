const mensaje = document.getElementById("mensaje");
const saludo = document.getElementById("saludo");

mensaje.textContent = "mensaje desde el aula virtual";
saludo.innerHTML = "<h1>Hello con innerHTML</h1>";

const ficha = document.getElementById("ficha");
ficha.innerHTML = `
<h1>ANA LOPEZ</h1>
<p>curso: Programacion Web</p>
<p>plataforma: Moodle</p>
<p>estado: activa</p>
`;


const nombre = document.getElementById("nombre");
const saludar = document.getElementById("saludar");
const registrar = document.getElementById("registrar");

registrar.addEventListener("click", function () {
    console.log("ejecutando click", nombre.value);
    saludar.textContent = "Bienvenido al curso, " + nombre.value;
});
