$("#BtnIniciarSesion").click(ValidarDatos);
$("#mensaje").css("display", "none");
function ValidarDatos() {
  let email = $("#txtEmail").val();
  let clave = $("#txtClave").val();

  if (email === "" || clave === "") {
    $("#mensaje").css("display", "block");
    $("#mensaje").html("Complete los campos vacíos");
  } else {
    let datos = {
      email: email,
      clave: clave,
    };
    $.post("php/login.php", datos, function (res) {
      usuario = JSON.parse(res);
      if (res.trim().toLowerCase() === "false") {
        $("#mensaje").css("display", "block");
        $("#mensaje").html("La Clave o el Email es incorrecto");
      } else if (usuario.existe === "true") {
        sessionStorage.setItem('usuario', JSON.stringify(usuario));
        window.location.href = "index.html"
      }
    });
  }
}