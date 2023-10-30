window.addEventListener("load", inicio);


function inicio() {
    let url = "php/alta.php";
    fetch(url)
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            
            $("#tabla1").append(` 
            <tr id="`+ i + `">
                <td class="bordeUsuario">`+i+ `</td>
                <td class="bordeUsuario">`+ data[i].ci + `</td>
                <td class="bordeUsuario">`+ data[i].email + `</td>
                <td class="bordeUsuario">`+ data[i].telefono + `</td>
                <td class="bordeUsuario">`+ data[i].rut + `</td>
                <td class="bordeUsuario">`+ data[i].tipoCliente + `</td>
            </tr>
                `);
            
        }


    })
    .catch(error => console.log(error))
}



//Desaparece las tablas
$("#tablaUsuario").css("display", "none");
$("#tablaPedido").css("display", "none");

//Cambiar a la tabla  Pedido
$("#btnPedido").click (mostrarTablaPedido) ;
function mostrarTablaPedido(){
    $("#tablaPedido").css({"animation":"aparecerTabla 0.5s ease-out 0s normal"});
    $("#tablaUsuario").css("display", "none");
    $("#tablaPedido").css("display", "block");
}
//Cambiar a la tabla  Usuario
$("#btnCliente").click (mostrarTablaCliente);
function mostrarTablaCliente() {
    $("#tablaUsuario").css({"animation":"aparecerTabla 0.5s ease-out 0s normal"});
    $("#tablaUsuario").css("display", "block");
    $("#tablaPedido").css("display", "none");
    
}
//Cargar fila de la tabla Cliente





//ingresar las filas de la tabla Cliente
$("#btnIngresarCliente").click(ingresarCliente)

function ingresarCliente() {
    console.log("hola")
    let ID = $("#tomarId").val();
    let numeral = "#" + ID;
    console.log(ID)
    console.log(numeral)
    console.log("")
    $(numeral).css("display", "none");
}



