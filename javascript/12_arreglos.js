let personajes = ["Rick", "Morty", "Summer", "Jerry", "Alisson", "Ormaza"];
console.log ("Elemento 0:", personajes[0]);
console.log ("Elemento 2:", personajes[2]);
console.log ("Elemento 5:", personajes[5]);
console.log ("Elemento 4:", personajes[4]);
console.log ("Tamaño del arreglo:", personajes.length);


console.log("Personajes:",personajes);
console.log("INCLUIR ELEMENTOS A UN ARREGLO CON PUSH");
personajes.push("Ormaza");
console.log("Personajes:",personajes);
personajes.push("Allisson");

console.log("Personajes:",personajes);
console.log("MODIFICAR ELEMENTOS A UN ARREGLO CON PUSH");
personajes[7]="Alisson";

console.log("Personajes:",personajes);
console.log("PONER AL INICIO DEL ARREGLO UNSHIFT");
personajes.unshift("Allisson");
personajes[0]="Alisson";

console.log("Personajes:",personajes);
console.log("ELIMINAR ELEMENTOS A UN ARREGLO");
personajes.pop();
console.log("Personajes:",personajes);

personajes.pop(3);
console.log("Personajes:",personajes);

personajes.shift();
console.log("Personajes:",personajes);

personajes.splice(1,1);
console.log("Personajes:",personajes);





