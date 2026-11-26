let curso = 4;
switch (curso) {
    case 1:
        console.log('Estas en el curso de HTML');
        break;
    case 2:
        console.log('Estas en el curso de CSS');
        break;
    case 3:
        console.log('Estas en el curso de JavaScript');
        break;
    case 4:
        console.log('Estas en el curso de Bases de datos');
        break;
    default:
        console.log('Estas en un curso desconocido');
}

let rol = 'Docente';
switch (rol) {
    case 'Docente':
    case 'Tutor':
        console.log('Hola Docente o Tutor');
        break;
    case 'Estudiante':
        console.log('Hola Estudiante');
        break;
    default:
        console.log('Rol no conocido');
}

let progreso = 50;
switch (true) {
    case (progreso > 0 && progreso < 25):
        console.log('Tienes poco progreso, debes estudiar mas para terminar el curso');
        break;
    case (progreso >= 25 && progreso < 50):
        console.log('Tienes un progreso moderado, puedes terminar el curso pero debes estudiar pronto');
        break;
    case (progreso >= 50 && progreso < 75):
        console.log('Tienes buen progreso, puedes terminar el curso sin problemas');
        break;
    case (progreso >= 75 && progreso <= 100):
        console.log('Tienes mucho progreso, estas por terminar el curso');
        break;
    default:
        console.log('Nivel de progreso desconocido');
}

console.log("calculadora");
let numero1 = 10;
let numero2 = 5;
let operacion = 'suma';
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
    console.log("El resultado de la operacion es:", operacion, "=", resultado);
}
