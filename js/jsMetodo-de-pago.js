$("#btnComprar").click(TomarDatos);

function TomarDatos(){
    let titular = $("#titular").val();
    let tarjeta = $("#tarjeta").val();
    let fechaVencimineto = $("#fechaVencimiento").val();
    let cvc = $("#cvc").val();
   validarDatos(titular,tarjeta,fechaVencimineto,cvc);
}
function validarDatos(titular,tarjeta,fechaVencimineto,cvc){
    let fecha = new Date().toISOString().slice(0, 10);
    if(titular == "" || tarjeta == "" || fechaVencimineto == "" || cvc == ""){
        console.log("Complete los campos vacios");
    }else if (/[0-9]/.test(titular)){
        console.log("El campo del titualr no debe ser numerico");
    }else if (!/[0-9]/.test(tarjeta) || !/\d{8}$/.test(tarjeta)){
        console.log("Numero de tarjeta invalido");
    }else if (fecha > fechaVencimineto){
        console.log("Esta tarjeta esta vencida");
    }else if (!/[0-9]/.test(cvc) || !/\d{3}$/.test(cvc)){
        console.log("Codijo invalido")        
    }else {
        enviarPedido()
    }
}
function enviarPedido(){
    let usuario = sessionStorage.getItem('usuario');
    let pedido = sessionStorage.getItem('carrito');
    pedido = JSON.parse(pedido)
    usuario = JSON.parse(usuario);
    console.log(pedido);
    console.log(pedido)
    let id = {
        id :usuario.datos
    }
    $.post("")
}



$("#fondo").css("z-index", "-1");
$("#fondo").css("background", "transparent");
$("#modal").css("display", "none");
