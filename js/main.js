
/* const yerbaAmanda = {nombreProducto: "Yerba Amanda", precio: 8.00, peso: "1kg"};
const yerbaPipore = {nombreProducto: "Yerba Pipore", precio: 7.49, peso: "1kg"};
const yerbaTaragui = {nombreProducto: "Yerba Taragüi", precio: 6.50, peso: "1kg"};
const DulceDeLeche = {nombreProducto: "Dulce de Leche Patagon", precio: 4.00, peso: "450g"};
const alfajores = {nombreProducto: "Alfajores Havanna ", precio: 8.00, peso: "12 Unidades"};
const kitDeMate = {nombreProducto: "Kit de Mate", precio: 15.49, peso: "null"}; */
const productos = [
    {nombreProducto: "Yerba Amanda", precio: 8.00, peso: "1kg"},
    {nombreProducto: "Yerba Pipore", precio: 7.49, peso: "1kg"},
    {nombreProducto: "Yerba Taragüi", precio: 6.50, peso: "1kg"},
    {nombreProducto: "Dulce de Leche Patagon", precio: 4.00, peso: "450g"},
    {nombreProducto: "Alfajores Havanna ", precio: 8.00, peso: "12 Unidades"},
    {nombreProducto: "Kit de Mate", precio: 15.49, peso: "null"}];

const listaPedidos = [];

let totalAmanda = agregarAmanda();
let totalPipore = agregarPipore();
let totalTaragui = agregarTaragui();
let totalDulce= agregarDulce();
let totalAlfajores = agregarAlfajores(); 
let totalKitMate = agregarKitMate(); 
let totalListaPedidos = totalAmanda + totalPipore + totalTaragui + totalAlfajores + totalKitMate;
console.log(`El total de la lista pedidos es de: ${totalListaPedidos} (IVA incluido).`);

// Funciones
function agregarAmanda(){
    let cantidad = parseInt(prompt("Ingrese la cantidad de Yerba Amanda que desea comprar", 0));
    let total = parseFloat(productos[0].precio * cantidad);
    let precioFinal = total * 1.21;
    let pedido = `Cantidad de unidades de Yerba Amanda compradas: ${cantidad} X ${productos[0].precio} = ${total} ****** Precio final con IVA:  ${precioFinal}`;
    listaPedidos.push(pedido);

    return precioFinal;
}
function agregarPipore(){
    let cantidad = parseInt(prompt("Ingrese la cantidad de Yerba Pipore que desea comprar", 0));
    let total = parseFloat(productos[1].precio * cantidad);
    let precioFinal = total * 1.21;
    let pedido = `Cantidad de unidades de Yerba Pipore compradas: ${cantidad} X ${productos[1].precio} = ${total} ****** Precio final con IVA:  ${precioFinal}`;
    listaPedidos.push(pedido);

    return precioFinal;
}
function agregarTaragui(){
    let cantidad = parseInt(prompt("Ingrese la cantidad de Yerba Taragüi que desea comprar", 0));
    let total = parseFloat(productos[2].precio * cantidad);
    let precioFinal = total * 1.21;
    let pedido = `Cantidad de unidades de Yerba Taragüi compradas: ${cantidad} X ${productos[2].precio} = ${total} ****** Precio final con IVA:  ${precioFinal}`;
    listaPedidos.push(pedido);
    return precioFinal;
}
function agregarDulce(){
    let cantidad = parseInt(prompt("Ingrese la cantidad de Dulce de Leche que desea comprar", 0));
    let total = parseFloat(productos[3].precio * cantidad);
    let precioFinal = total * 1.21;
    let pedido = `Cantidad de unidades de Dulce de Leche compradas: ${cantidad} X ${productos[3].precio} = ${total} ****** Precio final con IVA:  ${precioFinal}`;
    listaPedidos.push(pedido);

    return precioFinal;
}
function agregarAlfajores(){
    let cantidad = parseInt(prompt("Ingrese la cantidad de Alfajores que desea comprar", 0));
    let total = parseFloat(productos[4].precio * cantidad);
    let precioFinal = total * 1.21;
    let pedido = `Cantidad de unidades de Alfajores compradas: ${cantidad} X ${productos[4].precio} = ${total} ****** Precio final con IVA:  ${precioFinal}`;
    listaPedidos.push(pedido);

    return precioFinal;
}
function agregarKitMate(){
    let cantidad = parseInt(prompt("Ingrese la cantidad de Kits de Mate que desea comprar", 0));
    let total = parseFloat(productos[5].precio * cantidad);
    let precioFinal = total * 1.21;
    let pedido = `Cantidad de unidades de Kits de Mate compradas: ${cantidad} X ${productos[5].precio} = ${total} ****** Precio final con IVA:  ${precioFinal}`;
    listaPedidos.push(pedido);
    for (let i = 0; i < listaPedidos.length; i++){
        console.log(listaPedidos[i]);
    }
    return precioFinal;
}

// funcion para ordenar la lista de menor a mayor
productos.sort((a,b) => {
    if (a.precio > b.precio) {
        return 1;
    }
    if (a.precio < b.precio) {
        return -1;
    }
    return 0;
})