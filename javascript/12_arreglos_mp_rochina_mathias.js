let estudiantes = ["Ana", "Luis", "Sofia", "Pedro", "Camila", "Diego"];
console.log("Elemento 0:", estudiantes[0]);
console.log("Elemento 2:", estudiantes[2]);
console.log("Elemento 5:", estudiantes[5]);
console.log("Elemento 4:", estudiantes[4]);
console.log("Tamaño del arreglo:", estudiantes.length);


console.log("Estudiantes:", estudiantes);
console.log("INCLUIR ELEMENTOS A UN ARREGLO CON PUSH");
estudiantes.push("Valeria");
console.log("Estudiantes:", estudiantes);
estudiantes.push("Andres");

console.log("Estudiantes:", estudiantes);
console.log("MODIFICAR ELEMENTOS DE UN ARREGLO");
estudiantes[7] = "Andrea";

console.log("Estudiantes:", estudiantes);
console.log("PONER AL INICIO DEL ARREGLO UNSHIFT");
estudiantes.unshift("Mateo");
estudiantes[0] = "Mathias";

console.log("Estudiantes:", estudiantes);
console.log("ELIMINAR ELEMENTOS DE UN ARREGLO");
estudiantes.pop();
console.log("Estudiantes:", estudiantes);

estudiantes.pop();
console.log("Estudiantes:", estudiantes);

estudiantes.shift();
console.log("Estudiantes:", estudiantes);

estudiantes.splice(1, 1);
console.log("Estudiantes:", estudiantes);
