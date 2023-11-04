$("#BtnIniciarSesion").click(ValidarDatos)
$("#mensaje").css("display", "none");
function ValidarDatos(){
    let email = $("#txtEmail").val();
    let clave = $("#txtClave").val();

    if(email == "" || clave == ""){
        $("#mensaje").css("display", "block");
        $("#mensaje").html("Complete los campos vacios")
    }else{
        let datos = {
            email: email,
            clave: clave
        }
        $.post("php/login.php",datos,function(res){
            if (res.trim().toLowerCase() === "false") {
                $("#mensaje").css("display", "block");
                $("#mensaje").html("La Clave o el Email es incorrecto")
            }else if (res.trim().toLowerCase() === "true"){
                
            }
            
        })
    }
}