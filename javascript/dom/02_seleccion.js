const energia=document.getElementById("energia");
const dimension=document.getElementById("dimension");
const portal=document.getElementById("portal");

energia.textContent="Energia: 100";
dimension.textContent="Dimension: C-137";
portal.textContent="Portal: Activado";


const personaje = document.querySelector(".personaje");
personaje.textContent="Rick C-137";

const h2Objeto = document.querySelector("h2");
h2Objeto.textContent="Preparando Nave";

const universo = document.querySelector("#universo");
universo.textContent="Preparando Universo";

const estadoMorty = document.querySelector("#morty .estado");
estadoMorty.textContent="Preparado para viajar";

const planetas = document.querySelectorAll(".planetas")
console.log(planetas)
console.log(planetas.length)

console.log(planetas[0].textContent)
console.log(planetas[1].textContent)
console.log(planetas[2].textContent)
console.log(planetas[3].textContent)

for (let i=0; i<planetas.length; i++){
    console.log(planetas[i].textContent);
}
console.log("Con forEach");
planetas.forEach(function(planeta){
    console.log(planeta.textContent);
});

console.log("Con for of");
for (let planeta of planetas){
    console.log(planeta.textContent);
};



