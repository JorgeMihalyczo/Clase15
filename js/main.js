const productos = [
    {nombreProducto: "Yerba Amanda", precio: 8.00, peso: "1kg", foto: "../pics/amanda.jpg"},
    {nombreProducto: "Yerba Pipore", precio: 7.49, peso: "1kg", foto: "../pics/pipore.jpg"},
    {nombreProducto: "Yerba Taragüi", precio: 6.50, peso: "1kg", foto: "../pics/taragui.jpg"},
    {nombreProducto: "Dulce de Leche Patagon", precio: 4.00, peso: "450g", foto: "../pics/patagonDulce.jpg"},
    {nombreProducto: "Alfajores Havanna ", precio: 13.50, peso: "12 Unidades", foto: "../pics/havanna.jpg"},
    {nombreProducto: "Kit de Mate", precio: 15.49, peso: "null", foto:"../pics/kitMate2.jpg"}];

class Producto{
    constructor(nombreProducto, precio, peso, foto){
        this.nombreProducto = nombreProducto;
        this.precio = precio;
        this.peso = peso;
        this.foto = foto;
    }
}
const productoNuevo = new Producto("Bizcochos Don Satur", 3.80, "400gr","../pics/donSatur.jpg");
productos.push(productoNuevo);

const listaPedidos = [];

$( document ).ready(function(){
    console.log( "El DOM esta listo" ); 
    // mostrar/ocultar carrito
    $("#iconoCarrito").on("click", function(){
        $(".itemsCarrito").slideToggle();
    })
    // mostrar el array "productos" en productos.html
    for (const producto of productos){
        $(".productos").append(
        `<div class="productos__containerItem">
                <h3><b>${producto.nombreProducto}</b></h3>
                <img src=${producto.foto} alt=${producto.nombreProducto} class="productos__containerItem--foto">
                <p class="productos__containerItem--parrafo">${producto.precio.toFixed(2)}€</p>
                <button type="button" class="btnProducto">Agregar al carrito</button>
        </div>`
    )}

    // Funciones
    const contarItems = () =>{
        $("#contadorItems").text(`(${$(".listaProductos").children().length})`);
    } 
    const calculaTotal = () =>{
        let total = 0;
        $(".eachPrice").each(function(){
            let precioItem = parseFloat($(this).text());
            total += precioItem;
        });
        $(".containerTotal").text(`Total: ${total.toFixed(2)} €`);
    }

    // Eventos
    $(".productos__containerItem").on("click",function(){
        $(".itemsCarrito").slideDown();
        let name = $(this).find("h3").text();
        let precio = parseFloat($(this).find("p").text());
        $(".listaProductos").append(
            `<ul>${name} = <spam class="eachPrice">${precio.toFixed(2)}</spam>€
                <button class="remove">X</button>
            </ul>`
        )
        contarItems();
        calculaTotal();

        $(".remove").on("click", function(){
            $(this).parent().remove();
            contarItems();
            calculaTotal();
        })
    })

    $(".btnFinalizar").on("click",function(){
        
    })
});
