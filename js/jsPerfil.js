window.addEventListener("load", inicio);

function inicio(){
    let datos = sessionStorage.getItem('usuario');
    let usuario = JSON.parse(datos);
    let id = {
        id : usuario.id
    }
    console.log(usuario)
    $.post("")
   
}