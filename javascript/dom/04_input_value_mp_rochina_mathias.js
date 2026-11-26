const clases = document.getElementById("clases");
const duracion = document.getElementById("duracion");
const calcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

calcular.addEventListener("click", function () {
    if (clases.value.trim() === ""
    || duracion.value.trim() == "") {
        resultado.textContent = "completa ambos campos";
        return;
    }
    const cantidad = Number(clases.value);
    const duracionNumber = Number(duracion.value);
    if (!Number.isFinite(cantidad) ||
        !Number.isFinite(duracionNumber)) {
        resultado.textContent = "ingrese valores validos";
        return;
    }
    const total = cantidad * duracionNumber;
    resultado.textContent = "horas totales: " + total;

});
