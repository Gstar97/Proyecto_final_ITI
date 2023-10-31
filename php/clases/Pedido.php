<?php

require_once("Menu.php");

class Pedido extends Menu {
    public $fecha_compra;
    public $precio;
    

    public function getFechaCompra(){
        return $this -> fecha_compra;
    }
    public function setFechaCompra(){
        $this -> fecha_compra = $fecha_compra;
    }
    public function getPrecio(){
        return $this -> precio;
    }
    public function setPrecio(){
        $this -> precio = $precio;
    }
}
?>