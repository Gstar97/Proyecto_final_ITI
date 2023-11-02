<?php
require_once("clases/Cliente_empresa.php");
 $id = $_POST["id"];
 $rut = $_POST["rut"];
 $email = $_POST["email"];
 $telefono = $_POST["telefono"];
 $calle = $_POST["calle"];
 $puerta = $_POST["puerta"];
 $esquina = $_POST["esquina"];
 $barrio = $_POST["barrio"];
 $clave = $_POST["clave"];
 $autorizar = "false";

 $objCliente_empresa = new Cliente_empresa($id,$rut,$email,$telefono,$clave,$calle,$puerta,$esquina,$barrio,$autorizar);
 $objCliente_empresa -> enviarDatos();
 echo "Bien";
 ?>

    