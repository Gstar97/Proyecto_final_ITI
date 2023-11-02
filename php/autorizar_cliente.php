<?php

require_once("clases/Dato_clientes.php");
$id = "1";
$autorizo = new Dato_clientes($id,"");
$autorizo -> altaCliente();
?>