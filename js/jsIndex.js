let modal = $("#modal");
let linkCarrito = $("#linkCarrito");
let cerrarModal = $("#cerrarModal");
let linkTienda = $("#linkTienda");


$(modal).css("display", "none");
$(fondoModal).css("background-color", "transparent");
// Clic para abrir el modal
linkCarrito.click (abrirModal)
linkTienda.click (abrirModal)

function abrirModal(){
  $(modal).css("display", "block");
  $(fondoModal).css("background-color", "rgba(0, 0, 0, 0.8)");
  $(fondoModal).css("z-index", "9");
}

// Clic sobre <span> para cerrar modal
cerrarModal.click (ocultarModal)
function ocultarModal(){
  $(modal).css("display", "none");
  $(fondoModal).css("background-color", "transparent");
  $(fondoModal).css("z-index", "-1");
}