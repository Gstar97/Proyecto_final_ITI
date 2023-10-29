$("#btnAbrirModal").click(abrirModal);
$("#cerrarFondo").click(cerrarFondo);
$("#btnCrearMenu").click(crearVianda);
$("#btnBuscarTienda").click(filtroDieta)
let modalBase = document.getElementById("modalBase");
let fondoModal = document.getElementById("fondoModal");
modalBase.style.display = "none";
fondoModal.style.backgroundColor = "transparent"
// Clic para abrir el modal
function abrirModal(){
    modalBase.style.display = "block";
    fondoModal.style.zIndex = "9"
    fondoModal.style.backgroundColor = "rgba(0, 0, 0, 0.8)"
}
// Clic sobre <span> para cerrar modal
function cerrarFondo(){
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

    if(imagen == "" && nombre == ""&& precio == ""){ //si algun input no esta completa no funcionara
    }else{
        $("#zonaMenu").append(`
        <section class="baseMenu col-2 mx-3 py-3 justify-content-center" id="`+asignarDieta+`">
            <img class="w-100 pb-2" src="`+imagen+`">
            <h4>`+nombre+`</h4>
            <h5 class="text-center">`+precio+`U$</h5>
            <p>No Disponible</p> 
            <p>Dieta `+asignarDieta+`</p> 
            <input type="button" class="btnCarrito col-12 py-2" id="btn" value="Agregar al carrito"> 
        </section>
        `
        );
    }
}
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


