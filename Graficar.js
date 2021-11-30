$("#btnGraff").click(function(){
    let edad=$("#txtEdad").val();
    alert("tu edad es: " + edad);
    
    if ((edad >=18)&&(edad<=70)) {
        alert("Edad agregada correctamente");

        $("#edadagraff").css("height", 80);
        $("#edadagraff").css("width", "+ edad");
        $("#edadagraff").css("background-color", "#dc143c" );
        
    } else {
        alert("Edad no valida, por favor corrigir");
    };
});