document.getElementById("checkBoxCarrito1").addEventListener("click", borrarfila)
let btnquitarCompra = document.getElementById("btnquitarCompra");
let checkBoxCarrito1 = document.getElementById("checkBoxCarrito1");
let filaCarrito1 = document.getElementById("filaCarrito1");

function borrarfila(){
    btnquitarCompra .addEventListener("click", function(event){ 
        if (event.target === btnquitarCompra){
            if (checkBoxCarrito1.checked == true){
                filaCarrito1.style.display = "none";
            }
        }
    });
}