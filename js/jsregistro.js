//Variables
let BtnCliente = document.getElementById("BtnCliente");
let BtnEmpresa = document.getElementById("BtnEmpresa");
let FormularioCliente = document.getElementById("FormularioCliente");
let FormularioEmpresa = document.getElementById("FormularioEmpresa");
//Desaparecer las plantillas
FormularioEmpresa.style.display = "none";
FormularioCliente.style.display = "none";
// Click para abrir el formulario cliente
BtnCliente.onclick = function(){

  FormularioCliente.style.display = "block";
  FormularioEmpresa.style.display = "none";
  FormularioCliente.style.animation = "AparecerCliente 0.5s ease-out 0s normal";
  FormularioEmpresa.style.animation = "DesaparecerEmpresa 0.5s ease-out 0s normal";
}
// Click para abrir el formulario Empresa
BtnEmpresa.onclick = function(){

  FormularioEmpresa.style.display = "block";
  FormularioCliente.style.display = "none";
  FormularioEmpresa.style.animation = "AparecerEmpresa 0.5s ease-out 0s normal";
  FormularioCliente.style.animation = "DesaparecerCliente 0.5s ease-out 0s normal";
}
