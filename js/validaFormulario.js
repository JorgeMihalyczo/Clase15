const validaDatosIngresados = () =>{
    /* let nombre = document.getElementById("name");
    let apellido = document.getElementById("lastName");
    let email = document.getElementById("email"); */
    if ( $("#name").val().length > 0 ){
        $("#name").removeClass("borderRed");
        $("#name").addClass("borderGreen");
    }else{
        $("#name").removeClass("borderGreen");
        $("#name").addClass("borderRed");
    }
    if ( $("#lastName").val().length > 0 ){
        $("#lastName").removeClass("borderRed");
        $("#lastName").addClass("borderGreen");
    }else{
        $("#lastName").removeClass("borderGreen");
        $("#lastName").addClass("borderRed");
    }
    if ( $("#email").val().length > 0 ){
        $("#email").removeClass("borderRed");
        $("#email").addClass("borderGreen");
    }else{
        $("#lastemailName").removeClass("borderGreen");
        $("#email").addClass("borderRed");
    }
}

$("#form").submit(function(e){
    e.preventDefault();
    validaDatosIngresados();
});