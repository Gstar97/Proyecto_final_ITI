<?php

require_once ("clases/Cliente.php");

$clientes = Cliente::datoCliente();
echo json_encode($clientes);

?>