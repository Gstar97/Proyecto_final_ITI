window.addEventListener("load", inicio);

function inicio() {
    let menus = JSON.parse(sessionStorage.getItem('carrito'));
    let total = 0;
    for (let i = 0; i < menus.length; i++) {
        $("#tabla1").append(`
            <tr id="`+menus[i].id+`">
                <td class="bordePedido col-1 col-sm-1 col-md-1 col-lg-1"><input type="button" value="Eliminar" class="btnEliminar my-2" id="btn`+menus[i].id+`"></td>
                <td class="bordePedido col-4 col-sm-1 col-md-1 col-lg-1">`+menus[i].nombre+`</td>
                <td class="bordePedido col-4 col-sm-2 col-md-2 col-lg-2">`+menus[i].tipo+`</td>
                <td class="bordePedido col-2 col-sm-2 col-md-2 col-lg-2">`+menus[i].precio+`</td>
                <td class="bordePedido col-4 col-sm-3 col-md-3 col-lg-2"><input type="number" placeholder="Stock" min="1" max="`+menus[i].stock+`" class="col-5" id="btnStock`+menus[i].id+`" value="1"></td>
            </tr>
        `);
        $(`#btn${menus[i].id}`).click(() => eliminar(menus[i].id));
        
        total += menus[i].precio;
    }
    $("#mostrarTotal").html("$ "+total);
    console.log(total)
}
function eliminar(id){
let numeral = "#"+id;
let menus = JSON.parse(sessionStorage.getItem('carrito'));
menus = menus.filter(menu => menu.id !== id);
sessionStorage.setItem('carrito', JSON.stringify(menus));
$(numeral).css("display", "none");
}