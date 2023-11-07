<?php
    require_once("Conexion.php");

    class Dieta extends Conexion{
        public $id_menu;
        public $tipo_menu;
        public $stock_min;
        public $stock_max;
        public $stock_real;
    }

    //cargar 
?>