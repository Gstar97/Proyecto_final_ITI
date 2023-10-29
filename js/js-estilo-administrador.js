window.addEventListener("load", inicio);

function inicio(){
    
}
/*variables generales*/
let btnPedido = document.getElementById("btnPedido");
let btnUsuario = document.getElementById("btnUsuario");
/*Variables de la tabla Usuario*/
let tablaUsuario = document.getElementById("tablaUsuario");//Tabla general
let filaCliente1= document.getElementById("filaCliente1");//las filas
let columnaClienteCheckBox = document.getElementById("columnaClienteCheckBox");//Columna de todos los checkbox
let checkBoxCliente1 = document.getElementById("checkBoxCliente1"); //Checkbox
/*Variables de la tabla Pedido*/
let tablaPedido = document.getElementById("tablaPedido");//Tabla general
let filaPedido1= document.getElementById("filaPedido1");//las filas
let columnaPedidoCheckBox = document.getElementById("columnaPedidoCheckBox");//Columna de todos los checkbox
let checkBoxPedido1 = document.getElementById("checkBoxPedido1"); //Checkbox

//Desaparece las tablas
tablaPedido.style.display = "none";
tablaUsuario.style.display = "none";


//Cambiar a la tabla  Pedido
btnPedido.onclick = function(){
    tablaPedido.style.animation = "aparecerTabla 0.5s ease-out 0s normal";
    tablaPedido.style.display = "block";
    tablaUsuario.style.display = "none";

}
//Cambiar a la tabla  Usuario
btnUsuario.onclick = function(){
    tablaUsuario.style.animation = "aparecerTabla 0.5s ease-out 0s normal";
    tablaPedido.style.display = "none";
    tablaUsuario.style.display = "block";
}

let listaDeClientes = [
    {cedula: 84823236,email: "eroschico3452@gmail.com",telefono: 098472742, rut: 5,tipoCliente: "empresa"},
    {cedula: 59482394,email: "roblender313@gmail.com",telefono: 098472742, rut: "",tipoCliente: "Cliente"}
];

for(let i = 0; i< listaDeClientes.length; i++){
    $("#tabla1").append(` 
    <tr id="`+i+`">
        <td class="bordeUsuario">`+i+`</td>
        <td class="bordeUsuario">`+listaDeClientes[i].cedula+`</td>
        <td class="bordeUsuario">`+listaDeClientes[i].email+`</td>
        <td class="bordeUsuario">`+listaDeClientes[i].telefono+`</td>
        <td class="bordeUsuario">`+listaDeClientes[i].rut+`</td>
        <td class="bordeUsuario">`+listaDeClientes[i].tipoCliente+`</td>

    </tr>
    
    `);
    console.log(listaDeClientes[i]);
}
//Cuando
$("#btnIngresar").click(ingresar)

function ingresar(){
    console.log("hola")
    let ID = $("#tomarId").val();
    let numeral = "#"+ID;
    console.log(ID)
    console.log(numeral)
    console.log("")
    $(numeral).css("display", "none");
}
    


