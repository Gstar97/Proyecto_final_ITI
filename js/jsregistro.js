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


let Web = () => {

  let ci = Number($("#txtCedula_Web").val());
  let email = $("#txtEmail_Web").val();
  let telefono = Number($("#txtTelefono_Web").val());
  let nombre = $("#txtNombre").val();
  let apellido = $("#txtApellido").val();
  let barrio = $("#txtBarrio_Web").val();
  let calle = $("#txtCalle_Web").val();
  let puerta = Number($("#txtPuerta_Web").val());
  let esquina = $("#txtEsquina_Web").val();
  let clave = $("#txtClave_Web").val();
  let confirmarClave = $("#txtConfirmarClave_Web").val();

  if (ci == "" || email == "" || telefono == "" || nombre == "" || apellido == "" || barrio == "" || calle == ""|| puerta == "" || esquina == "" || clave == "" || confirmarClave == ""){
    console.log("Por favor complete los campos vacios");
}else if (!/[0-9]/.test(ci) || !/^\d{8}$/.test(ci)){
    console.log("Por favor Ingrese una cedula valida")
}else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)){
    console.log("Por favor ingrese un email valido")
}else if (!/[0-9]/.test(telefono)){
    console.log("Por favor ingrese un telefono valido")
}else if (/[0-9]/.test(nombre)){
    console.log("Por favor ingresar un nombre valido")
}else if (/[0-9]/.test(apellido)){
    console.log("Por favor ingrese un apellido valido")
}else if(/[0-9]/.test(barrio)){
    console.log("Por favor ingresar un barrio valido")
}else if (/[0-9]/.test(calle)){
    console.log("Por favor ingrese una calle valida")
}else if (!/[0-9]/.test(puerta)){
    console.log("Por favor ingrese un numero de puerta valido")
}else if (/[0-9]/.test(esquina)){
    console.log("Por favor ingrese una esquina valida")
}else if (clave != confirmarClave){
    console.log("La contraseña no coincide")
}else{

    let datoWeb = {
        ci: ci,
        email: email,
        telefono: telefono,
        tipoCliente: "Web",
        nombre: nombre,
        apellido: apellido,
        rut: "null",
        barrio: barrio,
        calle: calle,
        puerta: puerta,
        esquina: esquina,
        clave: clave }
        enviarDatos(datoWeb);

}
  
}
$("#BtnClienteRegistrar").click(Web);




let Empresa = () => {

  let ci = $("#txtCedula_Empresa").val();
  let email = $("#txtEmail_Empresa").val();
  let telefono = $("#txtTelefono_Empresa").val();
  let rut = $("#txtRut").val();
  let barrio = $("#txtBarrio_Empresa").val();
  let calle = $("#txtCalle_Empresa").val();
  let puerta = $("#txtPuerta_Empresa").val();
  let esquina = $("#txtEsquina_Empresa").val();
  let clave = $("#txtClave_Empresa").val();
  let confirmarClave = $("#txtConfirmarClave_Empresa").val();

  
  
  if (ci == "" || email == "" || telefono == "" || rut == "" || barrio == "" || calle == ""|| puerta == "" || esquina == "" || clave == "" || confirmarClave == ""){
    console.log("Por favor complete los campos vacios");
}else if (!/[0-9]/.test(ci)){
    console.log("Por favor Ingrese una cedula valida")
}else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)){
    console.log("Por favor ingrese un email valido")
}else if (!/[0-9]/.test(telefono)){
    console.log("Por favor ingrese un telefono valido")
}else if (!/[0-9]/.test(rut)){
    console.log("Por favor ingresar un rut valido")
}else if (/[0-9]/.test(barrio)){
    console.log("Por favor ingresar un barrio valido")
}else if (/[0-9]/.test(calle)){
    console.log("Por favor ingrese una calle valida")
}else if (!/[0-9]/.test(puerta)){
    console.log("Por favor ingrese un numero de puerta valido")
}else if (/[0-9]/.test(esquina)){
    console.log("Por favor ingrese una esquina valida")
}else if (clave != confirmarClave){
    console.log("La contraseña no coincide")
}else {

        let datoEmpresa = {
               ci: ci,
               email: email,
               telefono: telefono,
               tipoCliente: "Empresa",
               nombre: "null",
               apellido: "null",
               rut: rut,
               barrio: barrio,
               calle: calle,
               puerta: puerta,
               esquina: esquina,
               clave: clave }
            enviarDatos(datoEmpresa)
}
}
$("#BtnEmpresaRegistrar").click(Empresa);


let enviarDatos = (datos) => {

  $.post("php/registro.php", datos, function (respuesta){

    console.log(respuesta);


  })


   


}
