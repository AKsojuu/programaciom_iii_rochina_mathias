let cristales = [30,50,70,40];
for (let i=0; i<cristales.length; i++) {       /*hace que empice en la posicion cero y despues suma 1*/
    console.log("posicion:",i);
    console.log("Cristal:",cristales[i]);      /*elige el numero que se encuentra en la posicion cero */

}

console.log("----------------------------------------");
let cristal = [30,50,70,40];
let posicion = 2;
let nuevaenergia  = 100;
for (let i=0; i<cristal.length; i++) {       
    console.log("posicion:",i);
    console.log("Cristal:",cristal[i]);
    if(posicion>=0 && posicion<cristal.length){
        cristal[posicion] = nuevaenergia;
    } else {
        console.log("Posicion Valida");
    }   

}
console.log(cristal);

console.log("----------------------------------------");

let personajes = [
    {id: 1, nombre:"Rick", energia:99, edad:70},
    {id: 2, nombre:"Morty", energia:80, edad:14},
    {id: 3, nombre:"Alisson", energia:100, edad:18},
];
for (let personaje of personajes){
    console.log("ID:",personaje.id);
    console.log("Nombre:",personaje.nombre);
    console.log("Energia:",personaje["energia"]);
    console.log("Edad:",personaje["edad"]);

}

console.log("----------------------------------------");

console.log("Rick organiza sus misiones"),
 misiones = [
    {
        piloto:"Rick",
        cristales:[30,50,60]
    },
    {
        piloto:"Morty",
        cristales:[20,30,30]
    },
    {
        piloto:"Summer",
        cristales:[90,80,70]
    }
];

for (let mision of misiones){
    totalCristales=0;
    console.log("piloto:", mision.piloto);
    for (let cristal of mision.cristales) {
        console.log("Cristales Recolectados:", cristal);
        totalCristales+=cristal;
    }
    console.log("total cristales recolectados por", mision.piloto,"son :", totalCristales);
}

console.log("----------------------------------------------------------------------------------");

let cristalesOriginales =[30,50,70,40];
let cristalesdobles = cristalesOriginales.map(elemento=>{
    return elemento *2;
});
console.log(cristalesdobles);
let validos = cristalesOriginales.filter(cristal=> cristal>=50);
let resultado = cristalesOriginales.reduce((acumulador,elemento)=>{
    return acumulador+elemento;
});