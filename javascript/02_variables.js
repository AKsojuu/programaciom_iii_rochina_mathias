import { convertProcessSignalToExitCode } from "node:util";

console.log("Hello desde Consola");
console.log("Declaracion de variables");

/* 
Comentarios de varios lineas, linea 1
Comentarios de varios lineas, linea 2
Comentarios de varios lineas, linea 3
Comentarios de varios lineas, linea 4
*/

let acompanante='Morty';
// Energia
let energia=100;
let dimension='C-137';
let tieneCombustible=true;

console.log(acompanante);
console.log(energia);
console.log(dimension);
console.log(tieneCombustible);

acompanante='Rick';
energia='1500';
dimension='C-140';
tieneCombustible='false';

console.log(acompanante);
console.log(energia);
console.log(dimension);
console.log(tieneCombustible);

var personaje="Jerry";
console.log_("personaje", personaje);
personaje="Rick";
console.log("Nuevo Personaje",personaje);

const protagonista="Jerry";
console.log("protagonista", protagonista);
