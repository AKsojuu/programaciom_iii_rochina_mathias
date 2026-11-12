let nombre = "Rick Sanchez";
let edad = 70;
let planeta = "tierra C-137";
let energia = 100;
let averiada = false;

let nave = {
    nombre: "Nave de Rick",
    edad:70,
    planeta: "tierra C-137",
    energia: 100,
    averiada: false
}

console.log ("informacion de la nave de rick:");
console.log("Nombre del piloto " + nave.nombre);
console.log("Edad del piloto: " + nave["edad"]);
console.log("Planeta de origen: " + nave["planeta"]);
console.log("Nivel de energia: " + nave["energia"]);
console.log("Estado de la Nave: " + nave["averiada"]);
console.log("nave de rick", nave)

console.log("agregar una nueva propiedad a la nave de rick");
nave.modelo = "Nave espacial X-2000";
console.log = ("Modelo de la nave:" + nave.modelo);
nave["capacidadPasajeros"] = 5;
console.log("capacidad pasajeros:" + nave ["capacidadPasajeros"]);
console.log("nave de rick", nave)

console.log("Actualizar el nivel de energia de la nave de rick");
nave.energia =80;
console.log("nuevo nivel de energia:" + nave.energia + "%");
nave["averiada"] = true;
console.log("nuevo estado de la nave:" + (nave.averiada ? "averiada" : "operativa"));

console.log("nave de rick", nave);
console.log("eliminar las propiedades de la nave de rick");
delete nave.capacidadPasajeros;
console.log("popiedad 'capacidadPasajeros' eliminada");
console.log("nave de rick", nave);

console.log("Recorrer las propiedades de la nave de Rick");
for (let propiedad in nave) {
    console.log(propiedad + ":" + nave[propiedad]);

}

console.log("nave de rick", nave);



let laboratorio = {
    portalPistol: 3,
    laserGun:4,
    elementalRings:87

}

console.log("calculo de unidades en el laboratorio");

for(let totalunidades in laboratorio) {
    console.log(totalunidades + laboratorio[totalunidades]);
}
let total = laboratorio.portalPistol + laboratorio.laserGun + laboratorio.elementalRings;
console.log ("total unidades de laboratorio:" +total);