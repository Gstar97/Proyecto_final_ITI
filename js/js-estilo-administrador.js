
/*variables generales*/
let btnPedido = document.getElementById("btnPedido");
let btnUsuario = document.getElementById("btnUsuario");
/*Variables de la tabla Usuario*/
let tablaUsuario = document.getElementById("tablaUsuario");//Tabla general
let filaCliente1= document.getElementById("filaCliente1");//las filas
let columnaClienteCheckBox = document.getElementById("columnaClienteCheckBox");//Columna de todos los checkbox
let checkBoxCliente1 = document.getElementById("checkBoxCliente1"); //Checkbox
let btnIngresarUsuario = document.getElementById("btnIngresarUsuario");//Boton para permitir usuarios

/*Variables de la tabla Pedido*/
let tablaPedido = document.getElementById("tablaPedido");//Tabla general
let filaPedido1= document.getElementById("filaPedido1");//las filas
let columnaPedidoCheckBox = document.getElementById("columnaPedidoCheckBox");//Columna de todos los checkbox
let checkBoxPedido1 = document.getElementById("checkBoxPedido1"); //Checkbox
let btnIngresarPedido = document.getElementById("btnIngresarPedido");//Boton para permitir pedidos

/*variable para ingresar usuario o pedido*/

tablaPedido.style.display = "none";
tablaUsuario.style.display = "none";
btnIngresarPedido.style.display = "none";
btnIngresarUsuario.style.display = "none";
//Cambiar entre la tabla usuarios, pedidos y los botones
btnPedido.onclick = function(){
    tablaPedido.style.animation = "aparecerTabla 0.5s ease-out 0s normal";
    tablaPedido.style.display = "block";
    tablaUsuario.style.display = "none";

    btnIngresarPedido.style.display = "block";
    btnIngresarUsuario.style.display = "none";
}
btnUsuario.onclick = function(){
    tablaUsuario.style.animation = "aparecerTabla 0.5s ease-out 0s normal";
    tablaPedido.style.display = "none";
    tablaUsuario.style.display = "block";
    btnIngresarPedido.style.display = "none";
    btnIngresarUsuario.style.display = "block";
}

let btnIngresar = document.getElementById("btnIngresar");
let nombre = document.getElementById("nombre");
btnIngresar.onclick = function(){
    filaCliente1.style.display = "none"
    console.log(nombre)
}
