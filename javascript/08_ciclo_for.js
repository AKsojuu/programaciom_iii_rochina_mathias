console.log('Ciclo For');
for (let i = 1; i <= 5; i++) {
    console.log('Iteracion', i);
}

console.log("Cuenta regresiva despegue de la nave");
for (let i = 10; i >= 0; i--) {
    console.log('Faltan'+i+'segundos para el despegue');
}

console.log("Cuenta regresiva despegue de la nave");
for (let i = 10; i >= 0; i--) {
    if (i === 0) {
        console.log('Despegue de la nave');
    } else {
        console.log('Faltan'+i+'segundos para el despegue');
    }
}

console.log("Nivel de energia");
let energia=50;
for(let i=0;i<=100;i+=10){
    if(energia>=i){
        console.log('Nivel de energia actual:'+i+"%");
    }else{
        console.log('Nivel de energia:'+i+"%");
    }
}

const consumoPorviaje=10;
let totalConsumo=0;
for(let viaje=1; viaje<=5; viaje++){
    totalConsumo+=consumoPorviaje;
    console.log("Viaje" +viaje)
    console.log("total consumido hasta ahora:" +totalConsumo+"unidades");
}
console.log("Total consumido:"+totalConsumo+"unidades");

console.log("Promedio de los Cristales");
let totalCristales=0;
let dias=7;
for(let dia = 1; dia <= dias; dia++){
    let cristales = dia *5+5;
    totalCristales+=cristales;
    console.log("Dia"+dia+"Cristales recolectados:"+cristales);
}
console.log("Total de cristales recolectados en"+dias+"dias:"+totalCristales);
console.log("Promedio de cristales recolectados por dia:"+(totalCristales/dias).toFixed(2));

console.log("Dimensiones peligrosas");
let seguras = 0;
let peligrosas = 0;
for(let dimension = 1; dimension <= 10; dimension++){
    if(dimension % 2 === 0){
        console.log("Dimensión"+dimension+"es peligrosa");
        peligrosas++;
    }else{
        console.log("Dimensión"+dimension+"es segura");
        seguras++;
    }
}
console.log("Total de dimensiones seguras:"+seguras);
console.log("Total de dimensiones peligrosas:"+peligrosas);

console.log("Recoleccion de cristales" );
let cristales =[35,60,45,80,70,90,55];
let total =0;
let viajesExitosos=0;
for(let i = 0; i < cristales.length; i++){
    total+=cristales[i];
    console.log("Viaje"+(i+1)+":Cristales recolectados:"+cristales[i]);
    if(cristales[i]>=50){
        viajesExitosos++;
    }else{
        console.log("Viaje"+(i+1)+"no fue exitoso");
    }
}
console.log("Total de cristales recolectados:"+total);
console.log("Total de viajes exitosos:"+viajesExitosos);

console.log("Recorrer Personajes con for ... of")
const personajes = ['Rick', 'Morty', 'Summer', 'Beth', 'Jerry'];
for (const personaje of personajes) {
    console.log('Personaje:', personaje);
}

let nave={
    nombre:"Nave Espacial",
    combustible:1000,
    velocidad:500,
    tripulantes:['Rick','Morty','Summer']
};
console.log("Recorrer Nave con for ... in");
for(let propiedad in nave){
    console.log(propiedad+":"+nave[propiedad]);
    if(propiedad==="tripulantes"){
        console.log("Tripulantes de la nave:");
        for(let tripulante of nave[propiedad]){
            console.log(tripulante);
        }
    }
}
for(let tripulante of nave["tripulantes"]){
    console.log("Tripulante:",tripulante);
}

let misiones = [
    {nombre: "mision 1", cristales:90,meta:100, personaje:"morty"},
    {nombre: "mision 2", cristales:50,meta:100, personaje:"rick"},
    {nombre: "mision 3", cristales:30,meta:100, personaje:"summer"},
];
let exitosas = 0;
for(let mision of misiones){
    let porcentaje =(mision.cristales/mision.meta)*100;
    console.log("Mision:"+mision.nombre+
        "Personaje:"+mision.personaje+
        "Cristales recolectados:"+mision.cristales+
        "Meta:"+mision.meta+
        "Porcentaje de exito:"+porcentaje.toFixed(2)+"%");
    if(porcentaje>=90){
        exitosas++;
    }else{
        console.log("Mision"+mision.nombre+"no fue exitosa");
    }
}
console.log("Total de misiones exitosas:"+exitosas);


console.log("Uso de break y continue en un ciclo for");
for(let i=1;i<=10;i++){
    if(i===5){
        console.log("Se encontro el numero 5, se detiene el ciclo");
        break;
    }
    console.log("Numero:"+i);
}
for(let i=1;i<=10;i++){
    if(i===5){
        console.log("Se encontro el numero 5, se omite la iteracion");
        continue;
    }
    console.log("Numero:"+i);
}
for (let i=1;i<=10;i++){
    if(i===7){
        console.log("Se encontro el numero 7, se omite la iteracion");
        continue;
    }
    if(i%2===0){
        console.log("Se encontro un numero par, se omite la iteracion");
        continue;
    }
    console.log("Numero impar:"+i);
}