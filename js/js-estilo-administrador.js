window.addEventListener("load", inicio);

function inicio() {
    let clientes = new XMLHttpRequest();
    clientes.open("GET","php/alta.php", true);
    clientes.setRequestHeader("Content-Type","applicao/x-ww-form-urlencoded");
    clientes.onreadystatechange = function () {
        console.log(clientes);
    }
    clientes.send();
}
/*variables para poder ingresar a la tablas*/
let btnPedido = $("#btnPedido")
let btnUsuario = $("#btnUsuario")
/*Variables de la tabla*/
let tablaUsuario = $("#tablaUsuario")
let tablaPedido = $("#tablaPedido")

//Desaparece las tablas
$(tablaUsuario).css("display", "none");
$(tablaPedido ).css("display", "none");

//Cambiar a la tabla  Pedido
btnPedido.click (mostrarTablaPedido) ;
function mostrarTablaPedido(){
    $(tablaPedido).css({"animation":"aparecerTabla 0.5s ease-out 0s normal"});
    $(tablaUsuario).css("display", "none");
    $(tablaPedido).css("display", "block");
}
//Cambiar a la tabla  Usuario
btnUsuario.click (mostrarTablaUsuario);
function mostrarTablaUsuario() {
    $(tablaUsuario).css({"animation":"aparecerTabla 0.5s ease-out 0s normal"});
    $(tablaUsuario).css("display", "block");
    $(tablaPedido).css("display", "none");
}

let listaDeClientes = [
    { cedula: 84823236, email: "eroschico3452@gmail.com", telefono: 98472742, rut: 5, tipoCliente: "empresa" },
    { cedula: 59482394, email: "roblender313@gmail.com", telefono: 98472742, rut: "", tipoCliente: "Cliente" }
];

for (let i = 0; i < listaDeClientes.length; i++) {
    $("#tabla1").append(` 
    <tr id="`+ i + `">
        <td class="bordeUsuario">`+ i + `</td>
        <td class="bordeUsuario">`+ listaDeClientes[i].cedula + `</td>
        <td class="bordeUsuario">`+ listaDeClientes[i].email + `</td>
        <td class="bordeUsuario">`+ listaDeClientes[i].telefono + `</td>
        <td class="bordeUsuario">`+ listaDeClientes[i].rut + `</td>
        <td class="bordeUsuario">`+ listaDeClientes[i].tipoCliente + `</td>
    </tr>
        `);
    console.log(listaDeClientes[i]);
}


//Cuando
$("#btnIngresar").click(ingresar)

function ingresar() {
    console.log("hola")
    let ID = $("#tomarId").val();
    let numeral = "#" + ID;
    console.log(ID)
    console.log(numeral)
    console.log("")
    $(numeral).css("display", "none");
}



