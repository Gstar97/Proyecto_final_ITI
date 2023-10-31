<?php

require_once("Dieta.php");
class Menu extends Dieta{
    public $t_elaboracion;
    public $tipo_menu;
    public $precio;

    public function getT_elaboracion(){
        return $this -> t_elaboracion;
    }
    public function setT_elaboracion($t_elaboracion){
        $this -> t_elaboracion = $t_elaboracion;
    }
    
    public function getTipo_menu(){
        return $this -> tipo_menu;
    }
    public function setTipo_menu($tipo_menu){
        $this -> tipo_menu = $tipo_menu;
    }

    public function getPrecio(){
        return $this -> tipo_menu;
    }
    public function setPrecio($precio){
        $this -> precio = $precio;
    }
    
}

?>
