const productos = [
    {nombreProducto: "Yerba Amanda", precio: 8.00, peso: "1kg"},
    {nombreProducto: "Yerba Pipore", precio: 7.49, peso: "1kg"},
    {nombreProducto: "Yerba Taragüi", precio: 6.50, peso: "1kg"},
    {nombreProducto: "Dulce de Leche Patagon", precio: 4.00, peso: "450g"},
    {nombreProducto: "Alfajores Havanna ", precio: 13.50, peso: "12 Unidades"},
    {nombreProducto: "Kit de Mate", precio: 15.49, peso: "null"}];

const listaPedidos = [];
const btnProducto = document.querySelectorAll("#btnProducto");
console.log(btnProducto);

btnProducto[0].onclick = () =>{
    agregarAmanda();
}
btnProducto[1].onclick = () =>{
    agregarPipore();
}
btnProducto[2].onclick = () =>{
    agregarTaragui();
}
btnProducto[3].onclick = () =>{
    agregarDulce();
}
btnProducto[4].onclick = () =>{
    agregarAlfajores();
}
btnProducto[5].onclick = () =>{
    agregarKitMate();
}

// Funciones
function agregarAmanda(){
    let cantidad = parseInt(document.getElementsByClassName("cant")[0].value);
    let total = parseFloat(productos[0].precio * cantidad);
    let precioFinal = (total * 1.21).toFixed(2);
    let pedido = `Cantidad de unidades de Yerba Amanda compradas: ${cantidad} X ${productos[0].precio} = ${total} ****** Precio final con IVA:  ${precioFinal}`;
    listaPedidos.push(pedido);
    // Crear etiqueta p para mostrar el total de la cantidad seleccionada
    let campoTotal = document.createElement("input");
    campoTotal.setAttribute("id", "nuevoElemento");
    campoTotal.setAttribute("value", `Total: $${precioFinal}`);
    document.getElementById("amanda").appendChild(campoTotal);
}
function agregarPipore(){
    let cantidad = parseInt(document.getElementsByClassName("cant")[1].value);
    let total = parseFloat(productos[1].precio * cantidad);
    let precioFinal = (total * 1.21).toFixed(2);
    let pedido = `Cantidad de unidades de Yerba Pipore compradas: ${cantidad} X ${productos[1].precio} = ${total} ****** Precio final con IVA:  ${precioFinal}`;
    listaPedidos.push(pedido);
    // Crear etiqueta p para mostrar el total de la cantidad seleccionada
    let campoTotal = document.createElement("input");
    campoTotal.setAttribute("id", "nuevoElemento");
    campoTotal.setAttribute("value", `Total: $${precioFinal}`);
    document.getElementById("pipore").appendChild(campoTotal);
}
function agregarTaragui(){
    let cantidad = parseInt(document.getElementsByClassName("cant")[2].value);
    let total = parseFloat(productos[2].precio * cantidad);
    let precioFinal = (total * 1.21).toFixed(2);
    let pedido = `Cantidad de unidades de Yerba Taragüi compradas: ${cantidad} X ${productos[2].precio} = ${total} ****** Precio final con IVA:  ${precioFinal}`;
    listaPedidos.push(pedido);
    // Crear etiqueta p para mostrar el total de la cantidad seleccionada
    let campoTotal = document.createElement("input");
    campoTotal.setAttribute("id", "nuevoElemento");
    campoTotal.setAttribute("value", `Total: $${precioFinal}`);
    document.getElementById("taragui").appendChild(campoTotal);
}
function agregarDulce(){
    let cantidad = parseInt(document.getElementsByClassName("cant")[3].value);
    let total = parseFloat(productos[3].precio * cantidad);
    let precioFinal = (total * 1.21).toFixed(2);
    let pedido = `Cantidad de unidades de Dulce de Leche compradas: ${cantidad} X ${productos[3].precio} = ${total} ****** Precio final con IVA:  ${precioFinal}`;
    listaPedidos.push(pedido);
    // Crear etiqueta p para mostrar el total de la cantidad seleccionada
    let campoTotal = document.createElement("input");
    campoTotal.setAttribute("id", "nuevoElemento");
    campoTotal.setAttribute("value", `Total: $${precioFinal}`);
    document.getElementById("dulce").appendChild(campoTotal);
}
function agregarAlfajores(){
    let cantidad = parseInt(document.getElementsByClassName("cant")[4].value);
    let total = parseFloat(productos[4].precio * cantidad);
    let precioFinal = (total * 1.21).toFixed(2);
    let pedido = `Cantidad de unidades de Alfajores compradas: ${cantidad} X ${productos[4].precio} = ${total} ****** Precio final con IVA:  ${precioFinal}`;
    listaPedidos.push(pedido);
    // Crear etiqueta p para mostrar el total de la cantidad seleccionada
    let campoTotal = document.createElement("input");
    campoTotal.setAttribute("id", "nuevoElemento");
    campoTotal.setAttribute("value", `Total: $${precioFinal}`);
    document.getElementById("alfajor").appendChild(campoTotal);
}
function agregarKitMate(){
    let cantidad = parseInt(document.getElementsByClassName("cant")[5].value);
    let total = parseFloat(productos[5].precio * cantidad);
    let precioFinal = (total * 1.21).toFixed(2);
    let pedido = `Cantidad de unidades de Kits de Mate compradas: ${cantidad} X ${productos[5].precio} = ${total} ****** Precio final con IVA:  ${precioFinal}`;
    listaPedidos.push(pedido);
    // Crear etiqueta p para mostrar el total de la cantidad seleccionada
    let campoTotal = document.createElement("input");
    campoTotal.setAttribute("id", "nuevoElemento");
    campoTotal.setAttribute("value", `Total: $${precioFinal}`);
    document.getElementById("mate").appendChild(campoTotal);
}