window.addEventListener("load", inicio);

function inicio(){
    let viandas = [
        {imagen: "imagenes/viandas/alubias_blancas.jpg", nombre: "Anchoas con pure", precio: 190.000, dieta: "celiacos"},
        {imagen: "imagenes/viandas/alubias_blancas.jpg", nombre: "Pollo con salame", precio: 123.000, dieta: "celiacos"},
        {imagen: "imagenes/viandas/alubias_blancas.jpg", nombre: "Aluminio a la parrilla", precio: 156.000, dieta: "celiacos"},
        {imagen: "imagenes/viandas/alubias_blancas.jpg", nombre: "Sopa de murcielago", precio: 1, dieta: "celiacos"},
        {imagen: "imagenes/viandas/alubias_blancas.jpg", nombre: "Jamon con dulce de leche", precio: 190.000, dieta: "celiacos"}
    ];
    for (let i = 0; i < viandas.length; i++) {
        $("#zonaMenu").append(`
        <section class="baseMenu col-8 col-sm-6 col-md-3 col-lg-2 mx-1 mx-md-3 mx-lg-3 py-3 mt-3 justify-content-center" id="`+viandas[i].dieta+`">
            <img class="w-100 mb-2" src="`+viandas[i].imagen+`">
            <h4 class="text-center">`+viandas[i].nombre+`</h4>
            <h5 class="text-center">`+viandas[i].precio+`U$</h5>
            <p>No Disponible</p>  
            <p>Dieta `+viandas[i].dieta+`</p> 
            <input type="button" class="btnCarrito col-12 py-2" id="btn" value="Agregar al carrito"> 
        </section>
        `
        );
        console.log(viandas[i]);
    }


    
}

$("#btnAbrirModal").click(abrirModalCreacion);
$("#cerrarFondoCreacion").click(cerrarFondoCreacion);
$("#btnCrearMenu").click(crearVianda);
$("#btnBuscarTienda").click(filtroDieta)
$("#btnCarrito").click(abrirModalStock)
$("#cerrarFondoStock").click(cerrarFondoStock);

let modalBase = document.getElementById("modalBase");
let modalStock = document.getElementById("modalStock");
let fondoModal = document.getElementById("fondoModal");
modalStock.style.display = "none";
modalBase.style.display = "none";
fondoModal.style.backgroundColor = "transparent"

// Click para abrir el modal Stock
function abrirModalStock(){
    modalStock.style.display = "block";
    modalBase.style.display = "none";
    fondoModal.style.zIndex = "9"
    fondoModal.style.backgroundColor = "rgba(0, 0, 0, 0.8)"
}
// Clic sobre <span> para cerrar el modal Stock
function cerrarFondoStock(){
    modalStock.style.display = "none";
    fondoModal.style.zIndex = "-1"
    fondoModal.style.backgroundColor = "transparent"
}
// Clic para abrir el modal Creacion de menus
function abrirModalCreacion(){
    modalStock.style.display = "none";
    modalBase.style.display = "block";
    
    fondoModal.style.zIndex = "9"
    fondoModal.style.backgroundColor = "rgba(0, 0, 0, 0.8)"
}
// Clic sobre <span> para cerrar el modal creacion de menus
function cerrarFondoCreacion(){
    modalStock.style.display = "none";
    modalBase.style.display = "none";
    fondoModal.style.zIndex = "-1"
    fondoModal.style.backgroundColor = "transparent"
}
//Creacion de las viandas
function crearVianda(){
    let imagen = ($("#txtImagen").val());
    let nombre = ($("#txtNombre").val());
    let precio = ($("#txtPrecio").val());
    let asignarDieta = ($("#asignDieta").val());

    if(imagen == "" && nombre == ""&& precio == ""){ //si algun input no esta completo no funcionara
    }else{
        $("#zonaMenu").append(`
        <section class="baseMenu col-8 col-sm-6 col-md-3 col-lg-2 mx-1 mx-md-3 mx-lg-3 py-3 mt-3 justify-content-center" id="`+asignarDieta+`">
            <img class="w-100 mb-2" src="`+imagen+`">
            <h4 class="text-center">`+nombre+`</h4>
            <h5 class="text-center">`+precio+`U$</h5>
            <p>No Disponible</p> 
            <p>Dieta `+asignarDieta+`</p> 
            <input type="button" class="btnCarrito col-12 py-2" id="btn" value="Agregar al carrito"> 
        </section>
        `
        );
    }
}


//
/*filtro de Dietas*/
function filtroDieta() {
    let selectDietas = ($("#selectDietas").val());
    switch (selectDietas) {
        case "todo_dietas":
            document.getElementById("celiacos").style.display = "block";
            document.getElementById("vegana").style.display = "block";
            document.getElementById("vegetariana").style.display = "block";
            document.getElementById("ovovegetaria").style.display = "block";
            document.getElementById("ovolacteovegetariana").style.display = "block";
        break;
        case "celiacos":
            document.getElementById("celiacos").style.display = "block";
            document.getElementById("vegana").style.display = "none";
            document.getElementById("vegetariana").style.display = "none";
            document.getElementById("ovovegetaria").style.display = "none";
            document.getElementById("ovolacteovegetariana").style.display = "none";
        break;
        case "vegana":
            document.getElementById("celiacos").style.display = "none";
            document.getElementById("vegana").style.display = "block";
            document.getElementById("vegetariana").style.display = "none";
            document.getElementById("ovovegetaria").style.display = "none";
            document.getElementById("ovolacteovegetariana").style.display = "none";
        break;
        case "vegetariana":
            document.getElementById("celiacos").style.display = "none";
            document.getElementById("vegana").style.display = "none";
            document.getElementById("vegetariana").style.display = "block";
            document.getElementById("ovovegetaria").style.display = "none";
            document.getElementById("ovolacteovegetariana").style.display = "none";
        break;
        case "ovovegetaria":
            document.getElementById("celiacos").style.display = "none";
            document.getElementById("vegana").style.display = "none";
            document.getElementById("vegetariana").style.display = "none";
            document.getElementById("ovovegetaria").style.display = "block";
            document.getElementById("ovolacteovegetariana").style.display = "none";
        break;
        case "ovolacteovegetariana":
            document.getElementById("celiacos").style.display = "none";
            document.getElementById("vegana").style.display = "none";
            document.getElementById("vegetariana").style.display = "none";
            document.getElementById("ovovegetaria").style.display = "none";
            document.getElementById("ovolacteovegetariana").style.display = "block";
        break;
    }
}
    


