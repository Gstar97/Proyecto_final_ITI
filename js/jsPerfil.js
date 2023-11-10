window.addEventListener("load", inicio);

function inicio(){
    let datos = sessionStorage.getItem('usuario');
    let usuario = JSON.parse(datos);
    let id = {
        id : usuario.id
    }
    console.log(usuario)
    $.post("php/datos_perfil.php",id,function(res){
        cliente = JSON.parse(res);
        console.log(cliente);
    })
   
}