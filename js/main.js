$( document ).ready(function(){
    console.log( "El DOM esta listo" );

    const url = "https://jsonplaceholder.typicode.com/posts/1/comments";

    $("#ejemploGet").on("click", function(){
        $.getJSON(url, function(data, status){
            let datos = data;
            console.log(status)
            if(status == "success"){
                for(const dato of datos) {
                    $("#getData").append(
                        `
                        <div id="${dato.id}">
                            <h2>Nombre: ${dato.name}</h2>
                            <h2>Email: ${dato.email}</h2>
                            <p>${dato.body}</p>
                        </div>
                        `
                    )
                }
            } else {
                alert("la api no funciona actualmente");
            }
        })

    })

});

const productos = [
    {nombreProducto: "Yerba Amanda", precio: 8.00, peso: "1kg"},
    {nombreProducto: "Yerba Pipore", precio: 7.49, peso: "1kg"},
    {nombreProducto: "Yerba Taragüi", precio: 6.50, peso: "1kg"},
    {nombreProducto: "Dulce de Leche Patagon", precio: 4.00, peso: "450g"},
    {nombreProducto: "Alfajores Havanna ", precio: 13.50, peso: "12 Unidades"},
    {nombreProducto: "Kit de Mate", precio: 15.49, peso: "null"}];

const listaPedidos = [];
const btnProducto = document.querySelectorAll(".btnProducto");
console.log(btnProducto);



btnProducto[0].onclick = () =>{
    agregarAmanda();
    $("#amanda").show("slow");
} 
btnProducto[1].onclick = () =>{
    agregarPipore();
    $("#pipore").show("slow");
}
btnProducto[2].onclick = () =>{
    agregarTaragui();
    $("#taragui").show("slow");
}
btnProducto[3].onclick = () =>{
    agregarDulce();
    $("#dulce").show("slow");
}
btnProducto[4].onclick = () =>{
    agregarAlfajores();
    $("#havanna").show("slow");
}
btnProducto[5].onclick = () =>{
    agregarKitMate();
    $("#mate").show("slow");
}

$("#btnTotal").click( () =>{
    calculaTotal();
    $("#productos__carrito").fadeIn("slow");
})

$(".productos__containerItem--foto").click( () =>{
    cantidad.value++;
})

// Funciones
function agregarAmanda(){
    let cantidad = parseInt(document.getElementsByClassName("cant")[0].value);
    let total = parseFloat(productos[0].precio * cantidad);
    let precioFinal = (total * 1.21).toFixed(2);
    let pedido = `<h2>Cantidad de unidades de Yerba Amanda compradas: ${cantidad} X ${productos[0].precio} = ${total}.  Precio final con IVA:  ${precioFinal}</h2>`;
    listaPedidos.push(pedido);
    // Crear etiqueta p para mostrar el total de la cantidad seleccionada
    let campoTotal = document.createElement("input");
    campoTotal.setAttribute("id", "nuevoElemento");
    campoTotal.setAttribute("value", `Total: $${precioFinal}`);
    $("#amanda").append(campoTotal);
    //guarda pedido de amanda en el sessionStorage 
    guardaLocal("listaPedidos", JSON.stringify(listaPedidos));
}
function agregarPipore(){
    let cantidad = parseInt(document.getElementsByClassName("cant")[1].value);
    let total = parseFloat(productos[1].precio * cantidad);
    let precioFinal = (total * 1.21).toFixed(2);
    let pedido = `<h2>Cantidad de unidades de Yerba Amanda compradas: ${cantidad} X ${productos[1].precio} = ${total}.  Precio final con IVA:  ${precioFinal}</h2>`;
    listaPedidos.push(pedido);
    // Crear etiqueta p para mostrar el total de la cantidad seleccionada
    let campoTotal = document.createElement("input");
    campoTotal.setAttribute("id", "nuevoElemento");
    campoTotal.setAttribute("value", `Total: $${precioFinal}`);
    document.getElementById("pipore").appendChild(campoTotal);
    //guarda pedido de pipore en el sessionStorage 
    guardaLocal("listaPedidos", JSON.stringify(listaPedidos));
}
function agregarTaragui(){
    let cantidad = parseInt(document.getElementsByClassName("cant")[2].value);
    let total = parseFloat(productos[2].precio * cantidad);
    let precioFinal = (total * 1.21).toFixed(2);
    let pedido = `<h2>Cantidad de unidades de Yerba Amanda compradas: ${cantidad} X ${productos[2].precio} = ${total}.  Precio final con IVA:  ${precioFinal}</h2>`;
    listaPedidos.push(pedido);
    // Crear etiqueta p para mostrar el total de la cantidad seleccionada
    let campoTotal = document.createElement("input");
    campoTotal.setAttribute("id", "nuevoElemento");
    campoTotal.setAttribute("value", `Total: $${precioFinal}`);
    document.getElementById("taragui").appendChild(campoTotal);
    guardaLocal("listaPedidos", JSON.stringify(listaPedidos));
}
function agregarDulce(){
    let cantidad = parseInt(document.getElementsByClassName("cant")[3].value);
    let total = parseFloat(productos[3].precio * cantidad);
    let precioFinal = (total * 1.21).toFixed(2);
    let pedido = `<h2>Cantidad de unidades de Yerba Amanda compradas: ${cantidad} X ${productos[3].precio} = ${total}.  Precio final con IVA:  ${precioFinal}</h2>`;
    listaPedidos.push(pedido);
    // Crear etiqueta p para mostrar el total de la cantidad seleccionada
    let campoTotal = document.createElement("input");
    campoTotal.setAttribute("id", "nuevoElemento");
    campoTotal.setAttribute("value", `Total: $${precioFinal}`);
    document.getElementById("dulce").appendChild(campoTotal);
    guardaLocal("listaPedidos", JSON.stringify(listaPedidos));
}
function agregarAlfajores(){
    let cantidad = parseInt(document.getElementsByClassName("cant")[4].value);
    let total = parseFloat(productos[4].precio * cantidad);
    let precioFinal = (total * 1.21).toFixed(2);
    let pedido = `<h2>Cantidad de unidades de Yerba Amanda compradas: ${cantidad} X ${productos[4].precio} = ${total}.  Precio final con IVA:  ${precioFinal}</h2>`;
    listaPedidos.push(pedido);
    // Crear etiqueta p para mostrar el total de la cantidad seleccionada
    let campoTotal = document.createElement("input");
    campoTotal.setAttribute("id", "nuevoElemento");
    campoTotal.setAttribute("value", `Total: $${precioFinal}`);
    document.getElementById("havanna").appendChild(campoTotal);
    guardaLocal("listaPedidos", JSON.stringify(listaPedidos));
}
function agregarKitMate(){
    let cantidad = parseInt(document.getElementsByClassName("cant")[5].value);
    let total = parseFloat(productos[5].precio * cantidad);
    let precioFinal = (total * 1.21).toFixed(2);
    let pedido = `<h2>Cantidad de unidades de Yerba Amanda compradas: ${cantidad} X ${productos[5].precio} = ${total}.  Precio final con IVA:  ${precioFinal}</h2>`;
    listaPedidos.push(pedido);
    // Crear etiqueta p para mostrar el total de la cantidad seleccionada
    let campoTotal = document.createElement("input");
    campoTotal.setAttribute("id", "nuevoElemento");
    campoTotal.setAttribute("value", `Total: $${precioFinal}`);
    document.getElementById("mate").appendChild(campoTotal);
    guardaLocal("listaPedidos", JSON.stringify(listaPedidos));
}
const guardaLocal = (key, value) => {
    sessionStorage.setItem(key, value);
}
function calculaTotal(){
        // lee el pedido de amanda del sessionStorage para mostrarlo en un <p> dentro del div productos__carrito
        let imprimirLista = JSON.parse(sessionStorage.getItem("listaPedidos"));
        let contenedorPedido = document.getElementById("productos__carrito");
        for (const prod of imprimirLista){
            let parrafo = document.createElement("p");
            parrafo.innerHTML = prod;
            contenedorPedido.appendChild(parrafo);
            }
}