console.log("Abriendo portal de la nave");
let portal =1;
while(portal<=5){
    console.log("Abriendo portal"+portal);
    portal++;
}
console.log("Todos los portales abiertos, despegando la nave");

console.log("Cuenta regresiva despegue de la nave");
let i =10;
while(i>=0){
    console.log("Faltan"+i+"segundos para el despegue");
    i--;
}
console.log("Recargar la pistola de portales de rick");
let enegia=50;
let recarga=0;
let totalRecarga=0;
while(energia<100){
    energia+=recarga;
    totalRecarga++;
    console.log("Recargando... Nivel de energia:"+energia+"%");
}
console.log("Recarga completa, total de recargas:"+totalRecarga);
console.log("Consumo de Combustible de la nave de Rick");
let combustible=100;
let consumo=45;
let totalConsumo=0;
while(combustible>=consumo){
    combustible-=consumo;
    viajes++;
    console.log("Viaje"+viajes+"Combustible restante:"+combustible+"%");
    if(combustible<50){
        console.log("Advertencia: Combustible bajo, recargar antes de continuar");
    }
}
console.log("No hay sufiiciente combustible para otro viaje");
console.log("total de viajes realizados:"+viajes);

console.log("Activar portales de dimensiones peligrosas con Do ... While");
let energiaPortal = 50;
do{
    console.log("Activando portal de dimensiones peligrosas"+energiaPortal);
    energiaPortal-=15;
}while(energiaPortal>0);
console.log("No hay suficiente energia para activar mas portales");

console.log("Comprar una pistola de portales para Rick");
let ahorro=80;
let meta = 500;
let ahorroSemanal=70;
let semanas=0;
do{
    ahorro += ahorroSemanal;
    semanas++;
    console.log("Semana"+semanas+":Ahorro actual:"+ahorro+"unidades");
}