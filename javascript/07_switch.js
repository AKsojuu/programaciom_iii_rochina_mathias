let dimension=3;

switch(dimension){
    case 1:
        console.log("Estas en la dimension 1");
        break;
    case 2:
        console.log("Estas en la dimension 2");
        break;
    case 3:
        console.log("Estas en la dimension 3");
        break;
    default:
        console.log("Estas en una dimension desconocida.");
}

let personaje='Rick';
switch(personaje){
    case 'Rick':
    case 'Morty':
        console.log("Estas en la dimension de Rick y Morty");
        break;
    case 'Summer':
        console.log("Estas en la dimension de Summer");
        break;
    default:
        console.log("Personaje desconocido.");
}

let energia=50;
switch(true){
    case (energia>0 && energia<=25):
        console.log("Tienes poca energia");
        break;
    case (energia>25 && energia<=50):
        console.log("Tienes energia suficiente");
        break;
    case (energia>50 && energia<=75):
        console.log("Tienes mucha energia");
        break;
    case (energia>75 && energia<=100):
        console.log("Tienes energia al maximo");
        break;
    default:
        console.log("Estas en una dimension desconocida.");
}

console.log("Calculadora basica con switch");
let numero1=10;
let numero2=5;
let operacion='multiplicacion';
let resultado;

switch(operacion){
    case 'suma':
        resultado=numero1+numero2;
        console.log("El resultado de la suma es:",resultado);
        break;
    case 'resta':
        resultado=numero1-numero2;
        console.log("El resultado de la resta es:",resultado);
        break;
    case 'multiplicacion':
        resultado=numero1*numero2;
        console.log("El resultado de la multiplicacion es:",resultado);
        break;
    case 'division':
        resultado=numero1/numero2;
        console.log("El resultado de la division es:",resultado);
        break;
    default:
        console.log("Operacion desconocida.");
}
