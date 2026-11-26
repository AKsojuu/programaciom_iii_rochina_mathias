console.log("Abriendo los modulos del curso");
let modulo = 1;
while (modulo <= 5) {
    console.log("Abriendo modulo " + modulo);
    modulo++;
}
console.log("Todos los modulos abiertos, comienza el curso");

console.log("Cuenta regresiva para el inicio de la clase");
let i = 10;
while (i >= 0) {
    console.log("Faltan " + i + " segundos para la clase");
    i--;
}

console.log("Recargar la bateria de la computadora");
let bateria = 50;
let recarga = 10;
let totalRecargas = 0;
while (bateria < 100) {
    bateria += recarga;
    totalRecargas++;
    console.log("Recargando... Nivel de bateria: " + bateria + "%");
}
console.log("Recarga completa, total de recargas: " + totalRecargas);

console.log("Consumo de datos de internet en clases");
let datos = 100;
let consumo = 45;
let clases = 0;
while (datos >= consumo) {
    datos -= consumo;
    clases++;
    console.log("Clase " + clases + " Datos restantes: " + datos + "%");
    if (datos < 50) {
        console.log("Advertencia: Datos bajos, recargar antes de continuar");
    }
}
console.log("No hay suficientes datos para otra clase");
console.log("total de clases vistas: " + clases);

console.log("Activar las clases de repaso con Do ... While");
let horasRepaso = 50;
do {
    console.log("Activando clase de repaso: " + horasRepaso);
    horasRepaso -= 15;
} while (horasRepaso > 0);
console.log("No hay suficientes horas para activar mas clases de repaso");

console.log("Ahorrar para comprar una laptop para estudiar");
let ahorro = 80;
let meta = 500;
let ahorroSemanal = 70;
let semanas = 0;
do {
    ahorro += ahorroSemanal;
    semanas++;
    console.log("Semana " + semanas + ": Ahorro actual: " + ahorro + " dolares");
} while (ahorro < meta);
console.log("Meta alcanzada en " + semanas + " semanas");
