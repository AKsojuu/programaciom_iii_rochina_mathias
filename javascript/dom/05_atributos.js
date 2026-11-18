const personaje = document.getElementById("personaje");
const cambiar = document.getElementById("cambiar");
const verDimension = document.getElementById("verDimension");
const dimension = document.getElementById("dimension");


cambiar.addEventListener("click",function(){
    if(personaje.getAttribute("title")=="rick"){
        personaje.setAttribute("src","morty.webp");
        personaje.setAttribute("title", "Morty");
        personaje.dataset.dimension="C-131";

    } else {
        personaje.setAttribute("src","rick.webp");
        personaje.setAttribute("title","rick");
        personaje.dataset.dimension="C-137";
    }
});

verDimension.addEventListener("click",function(){
     dimension.textContent=personaje.dataset.dimension;
});

const portal =document.getElementById("portal");
const activarPortal =document.getElementById("activarPortal");

activarPortal.addEventListener("click", function() {
    if (portal.textContent=="Portal Inactivo"){
        portal.style.backgroundColor ="green";
        portal.style.colot ="white";
        portal.textContent="Portal Activado";
    } else {
        portal.style.backgroundColor = "red";
        portal.style.color = "white";
        portal.textContent="Portal Inactivo"
    }
    
});
