
window.addEventListener("load", inicio);

function inicio(){
    let buscador = $("#buscador").val();
    let dieta = $("#selectDietas").val();
    let dato = {
        buscador: buscador,
        dieta: dieta
    }
    $("#zonaMenu").html("");
    $.post("php/tienda.php",dato,function(res){
        menu = JSON.parse(res);
        console.log(menu)
        for (let i = 0; i < menu.length; i++){ 
        $("#zonaMenu").append(`
        <section id="`+menu[i].id_menu+`" class="`+menu[i].tipo+` baseMenu col-8 col-sm-6 col-md-3 col-lg-2 mx-1 mx-md-3 mx-lg-3 py-3 mt-3 justify-content-center"> 
            <h4 class="text-center">`+menu[i].nombre+`</h4>
            <h5 class="text-center">`+menu[i].precio+`U$</h5>
            <p>stock: `+menu[i].stock_real +`</p>  
            <p>Dieta `+menu[i].tipo+`</p> 
            <input type="button" class="btnCarrito col-12 py-2" id="btn`+menu[i].id_menu+`" value="Agregar al carrito"> 
        </section> `);
             $(`#btn${menu[i].id_menu}`).click(() => mostrar(menu[i]));
        }
    })
    function mostrar(menu) {
        let menus = JSON.parse(sessionStorage.getItem('carrito')) || [];
        let datos = {
            id: menu.id_menu,
            nombre: menu.nombre,
            precio: menu.precio,
            stock: menu.stock_real,
            tipo: menu.tipo,
        };
        // Verificar si el elemento ya existe en el carrito
        let existeDato = menus.find(item => item.id === datos.id);
        if (existeDato) {
        } else {
            menus.push(datos);
            sessionStorage.setItem('carrito', JSON.stringify(menus));
        }
    }
}
$("#btnBuscarTienda").click(filtrodieta)
//Filtro de dietas
function filtrodieta(){
    let selectDietas = ($("#selectDietas").val());
    switch (selectDietas) {
    case "todo":
        $(".Celiacos").css("display", "block");
        $(".Vegano").css("display", "block");
        $(".Vegetariana").css("display", "block");
        $(".Ovovegetariana").css("display", "block");
        $(".Ovolacteovegetariana").css("display", "block");
    break;
    case "celiaco":
        console.log(selectDietas)
        $(".Celiacos").css("display", "block");
        $(".Vegano").css("display", "none");
        $(".Vegetariana").css("display", "none");
        $(".Ovovegetariana").css("display", "none");
        $(".Ovolacteovegetariana").css("display", "none");
    break;
    case "vegano":
        $(".Celiacos").css("display", "none");
        $(".Vegano").css("display", "block");
        $(".Vegetariana").css("display", "none");
        $(".Ovovegetariana").css("display", "none");
        $(".Ovolacteovegetariana").css("display", "none");
    break;
    case "vegetariana":
        $(".Celiacos").css("display", "none");
        $(".Vegano").css("display", "none");
        $(".Vegetariana").css("display", "block");
        $(".Ovovegetariana").css("display", "none");
        $(".Ovolacteovegetariana").css("display", "none");
    break;
    case "ovovegetariana":
        $(".Celiacos").css("display", "none");
        $(".Vegano").css("display", "none");
        $(".Vegetariana").css("display", "none");
        $(".Ovovegetariana").css("display", "block");
        $(".Ovolacteovegetariana").css("display", "none");

    case "ovolacteovegetariana":
        $(".Celiacos").css("display", "none");
        $(".Vegano").css("display", "none");
        $(".Vegetariana").css("display", "none");
        $(".Ovovegetariana").css("display", "none");
        $(".Ovolacteovegetariana").css("display", "block");
    break;
        
    }
    

}
