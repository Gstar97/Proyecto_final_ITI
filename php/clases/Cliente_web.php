<?php

require_once("Cliente.php");

class Cliente_Empresa extends Cliente {
    public $nombre;
    public $apellido;
    
    public function getNombre(){
        return $this -> nombre;
    }
    public function setNombre(){
        $this -> nombre = $nombre;
    }
    public function getApellido(){
        return $this -> apellido;
    }
    public function setApellido(){
        $this -> apellido = $apellido;
    }

    
    
}       

?>
    