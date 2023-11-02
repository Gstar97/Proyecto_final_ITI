<?php

require_once ("clases/Cliente.php");
$clientesEmpresa = Cliente::datosEmpresa();
$clientesWeb = cliente::datosWeb();
$clientes = (object) array_merge((array)$clientesEmpresa,(array)$clientesWeb);
echo json_encode($clientes);

?>