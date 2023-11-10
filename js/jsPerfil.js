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
        if(cliente.cliente == "web"){
            console.log("web");
    
            $("#datos").css("border", "2px solid #FF6200");
            $("#datos").css("box-shadow", "0px 0px 10px #FF6200");
            $("#datos").css("background", "rgba(255, 98, 0, 0.2)");

            $("#datos").html(`
            <h4>Datos personales</h4>
            <P>Autorizado: `+usuario.autorizado+`</P>
            <P>CI: `+cliente.ci+`</P>
            <P>Nombre: `+cliente.nombre+`</P>
            <P>Apellido: `+cliente.apellido+`</P>
            <p>Email: `+cliente.email+`</p>
            <P>Telefono: `+cliente.telefono+`</P>
            <h4>Direccion</h4>
            <P>Barrio: `+cliente.barrio+`</P>
            <P>Esquina: `+cliente.esquina+`</P>
            <P>Calle: `+cliente.calle+`</P>
            <P>Puerta: `+cliente.puerta+`</P>
            `);
        }else if (cliente.cliente == "empresa"){
            console.log("empresa")
            $("#datos").css("border", "2px solid #FFFFFF");
            $("#datos").css("box-shadow", "0px 0px 10px #FFFFFF");
            $("#datos").css("background", "rgba(255,255,255, 0.2)");
            
            $("#datos").html(`
            <h4>Datos personales</h4>
            <P>Autorizado: `+usuario.autorizado+`</P>
            <P>RUT: `+cliente.rut+`</P>
            <p>Email: `+cliente.email+`</p>
            <P>Telefono: `+cliente.telefono+`</P>
            <h4>Direccion</h4>
            <P>Barrio: `+cliente.barrio+`</P>
            <P>Esquina: `+cliente.esquina+`</P>
            <P>Calle: `+cliente.calle+`</P>
            <P>Puerta: `+cliente.puerta+`</P>
            `);
        }
    })
   
}