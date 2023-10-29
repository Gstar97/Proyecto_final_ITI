/*variables generales*/

let btnIngresarStock = document.getElementById("btnIngresarStock");
let fondoModal = document.getElementById("fondoModal");
/*Variables de la tabla*/
let checkBoxMenu1 = document.getElementById("checkBoxMenu1");
let filaMenu1 = document.getElementById("filaMenu1");
let columnaMenuCheckBox = document.getElementById("columnaMenuCheckBox");

document.getElementById("checkBoxMenu1").addEventListener("click", validarStock)
fondoModal.style.display = "none";
function validarStock(){
    if (checkBoxMenu1.checked == true){
        columnaMenuCheckBox.style.backgroundColor = "#FFFFFF";
        filaMenu1.style.color = "#FFFFFF";
        filaMenu1.style.backgroundColor = "#FF6200";
    }else {
        filaMenu1.style.backgroundColor = "#FFFFFF";
        filaMenu1.style.color = "#1D1D1D";
    }
    btnIngresarStock.addEventListener("click", function(event){ 
        if (event.target === btnIngresarStock){
            if (checkBoxMenu1.checked == true){

            }
        }
    });
}