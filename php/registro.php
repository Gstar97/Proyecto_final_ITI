<?php

require_once ("clases/Cliente.php");
$ci = $_POST["ci"];
$email = $_POST["email"];
$telefono = $_POST["telefono"];
$tipoCliente = $_POST["tipoCliente"];
$nombre = $_POST["nombre"];
$apellido = $_POST["apellido"];
$rut = $_POST["rut"];
$barrio = $_POST["barrio"];
$calle = $_POST["calle"];
$puerta = $_POST["puerta"];
$esquina = $_POST["esquina"];
$clave = $_POST["clave"];

if ($tipoCliente == "Web"){              
        $objCliente = new Cliente($nombre,$apellido,$rut,$ci,$email,$telefono,$calle,$puerta,$esquina,$barrio,$clave,$tipoCliente);
            $objCliente->enviarDatos();
    } else if ($tipoCliente == "Empresa"){
        $objCliente = new Cliente($nombre,$apellido,$rut,$ci,$email,$telefono,$calle,$puerta,$esquina,$barrio,$clave,$tipoCliente);
            $objCliente->enviarDatos();        
    }

?>