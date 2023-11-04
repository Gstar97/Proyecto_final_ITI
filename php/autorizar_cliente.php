<?php

require_once("clases/Cliente.php");
$id = $_POST["id"];
$autorizar = $_POST["autorizar"];
$autorizar = new Cliente($id,$autorizar);
$autorizar->autorizar(); 

?>