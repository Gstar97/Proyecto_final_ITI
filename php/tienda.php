<?php
require_once("clases/Menu.php");
$nombre = $_POST["buscador"];
$tipo = $_POST["dieta"];

    $menu = Menu::datoMenu();
    echo json_encode($menu);



?>