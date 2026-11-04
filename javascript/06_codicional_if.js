// 1. Agrega esta línea al inicio de tu archivo para que Node.js entienda el prompt
const prompt = require('prompt-sync')();

console.log("Condicionales if");
let energia = Number(prompt("Rick, cuanta energia tienes?"));
if (energia > 0) {
    console.log("Tienes energia suficiente para continuar la aventura.");
}

console.log("Condicional if else dos caminos");
let combustible = Number(prompt("Rick, cuanto combustible tienes?"));
if (combustible > 0) {
    console.log("Tienes combustible suficiente para continuar la aventura.");
} else {
    console.log("No tienes combustible suficiente para continuar la aventura.");
}

console.log("Condicional if else if varios caminos");
// 2. Aquí ya puedes usar el prompt real sin que tire error
let dimension = prompt("Rick, en que dimension estas?");

if (dimension === "C-137") {
    console.log("Estas en tu dimension original.");
} else if (dimension === "C-140") {
    console.log("Estas en la dimension alternativa.");
} else {
    // Corregido: Si no es ninguna de las anteriores, estás en una desconocida
    console.log("Estas en una dimension desconocida.");
}


console.log("Condicional if anidado");
let energia2=50;
let combustible2=400;

if(energia2>0){
    if(combustible2>0){
        console.log("Tienes energia y combustible suficiente para continuar la aventura.");
    }else{
        console.log("No tienes combustible suficiente para continuar la aventura.");
    }
}

console.log("Condicional con operador logico");
let energia3=50;
let combustible3=400;

if(energia3>0 && combustible3>0){
    console.log("Tienes energia y combustible suficiente para continuar la aventura.");
} else{
    console.log("No tienes energia o combustible suficiente para continuar la aventura.");
}

console.log("Control de viajes interdimensionales");
let combustible4=400;
let energia4=50;
let rick_disponible="si";
let summer_disponible="no";
let nave_averiafa="si";

if(combustible4>0 &&
    energia4>0 &&
    (rick_disponible=="si" ||
    summer_disponible=="si") && !
    (nave_averiafa=="si"))
{
    console.log("Viaje autorizado");
} else {
    if(combustible4<50)
    {
        console.log("No hay suficiente combustible para el viaje");
    }
    if(energia4<50)
    {
        console.log("No hay suficiente energia para el viaje");
    }
    if(rick_disponible=="no")
    {
        console.log("Rick no esta disponible para el viaje");
    }
    if(summer_disponible=="no")
    {
        console.log("Summer no esta disponible para el viaje");
    }
    if(nave_averiafa=="no")
    {
        console.log("La nave esta averiada y no puede realizar el viaje");
    }
}


console.log("Mision interdimensional");
let cristalesObjetivos=200;
let cristalesRecolectados=150;
let combustibleinicial=1000;
let combustibleconsumido=850;
let mortyherido="si";
let naveAveriada="no";
let bonificacion=0;
let porcentajeCumplimiento=(cristalesRecolectados/cristalesObjetivos)*100;
let combustibleRestante=combustibleinicial-combustibleconsumido;
console.log("Resultados de la mision:");

if(porcentajeCumplimiento>=90){
    console.log("Mision completada con exito.");
}else if(porcentajeCumplimiento>=70 && porcentajeCumplimiento<90){
    console.log("Mision parcialmente completada.");
}else if(porcentajeCumplimiento>=50 && porcentajeCumplimiento<70){
    console.log("Mision regular.");
}else{
    console.log("Mision fallida.");
}

console.log("Evaluacion de bonificacion por desempeño");
if(porcentajeCumplimiento>=90 && combustibleRestante>200){
    bonificacion=1000;
    console.log("Bonificacion por desempeño: $",bonificacion);
}else{
    console.log("No hay bonificacion por desempeño.");
}

console.log("Regreso seguro a la dimension C-137");
if(mortyherido=="no" && naveAveriada=="no"){
    console.log("Regreso seguro a la dimension C-137.");
}else if(mortyherido=="si" && naveAveriada=="no"){
    console.log("Regreso a la dimension C-137 con Morty herido.");
}else if(mortyherido=="no" && naveAveriada=="si"){
    console.log("Regreso a la dimension C-137 con la nave averiada.");
}else{
    console.log("Regreso a la dimension C-137 con Morty herido y la nave averiada.");
}

console.log("Resumen de la mision:");
console.log("Cristales Objetivos:", cristalesObjetivos);
console.log("Cristales Recolectados:", cristalesRecolectados);
console.log("Porcentaje de Cumplimiento:", porcentajeCumplimiento.toFixed(2) + "%");
console.log("Combustible Inicial:", combustibleinicial);
console.log("Combustible Consumido:", combustibleconsumido);
console.log("Combustible Restante:", combustibleRestante);
console.log("Morty Herido:", mortyherido);
console.log("Nave Averiada:", naveAveriada);
console.log("Bonificacion:", bonificacion);