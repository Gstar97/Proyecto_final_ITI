let modal = document.getElementById("modal");
let linkCarrito = document.getElementById("linkCarrito");
let cerrarModal = document.getElementById("cerrarModal");
let linkTienda = document.getElementById("linkTienda");


// Clic para abrir el modal
modal.style.display = "none";
fondoModal.style.backgroundColor = "transparent"
linkCarrito.onclick = function()
{
  modal.style.display = "block";
  fondoModal.style.zIndex = "9"
  fondoModal.style.backgroundColor = "rgba(0, 0, 0, 0.8)"
}
linkTienda.onclick = function()
{
  modal.style.display = "block";
  fondoModal.style.zIndex = "9"
  fondoModal.style.backgroundColor = "rgba(0, 0, 0, 0.8)"
}


// Clic sobre <span> para cerrar modal
cerrarModal.onclick = function()
{
  modal.style.display = "none";
  fondoModal.style.zIndex = "-1"
  fondoModal.style.backgroundColor = "transparent"
}