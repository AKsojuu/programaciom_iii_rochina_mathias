let dimension = 4;
switch (dimension) {
    case 1:
        console.log('Estas en la dimensión C-137');
        break;
    case 2:
        console.log('Estas en la dimensión C-140');
        break;
    case 3:
        console.log('Estas en la dimensión C-500');
        break;
    case 4:
        console.log('Dimension Alisson Ormaza');
        break;
    default:
        console.log('Estas en una dimensión conocida');
}

let personaje = 'Rick';
switch (personaje) {
    case 'Rick':
    case 'Morty':
        console.log('Hola Rick o Morty');
        break;
    case 'summer':
        console.log('Hola Summer');
        break;
    default:
        console.log('No conocido');
}

let energia = 50;
switch (true) {
    case (energia > 0 && energia < 25):
        console.log('Tienes poca energia, debes recargarla para continuar la aventura');
        break;
    case (energia >= 25 && energia < 50):
        console.log('Tienes energia moderada, puedes continuar la aventura pero debes recargarla pronto');
        break;
    case (energia >= 50 && energia < 75):
        console.log('Tienes buena energia, puedes continuar la aventura sin problemas');
        break;
    case (energia >= 75 && energia <= 100):
        console.log('Tienes mucha energia, puedes continuar la aventura sin problemas');
        break;
    default:
        console.log('Nivel de energia desconocido');
}

console.log("calculadora");
let numero1= 10;
let numero2= 5;
let operacion = 'xyz';
let resultado;
switch (operacion) {
    case 'suma':
        resultado = numero1 + numero2;
        break;
    case 'resta':
        resultado = numero1 - numero2;
        break;
    case 'multiplicacion':
        resultado = numero1 * numero2;
        break;
    case 'division':
        if (numero2 !== 0) {
            resultado = numero1 / numero2;
            console.log("Resultado de la division:", resultado);
        } else {
            console.log("Error: Division por cero no permitida");
        }
        break;
    default:
        console.log("Operacion desconocida");
}

if (resultado !== undefined) {
    console.log("El resultado de la operacion es:",operacion,"=", resultado);
}
