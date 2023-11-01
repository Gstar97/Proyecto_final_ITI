<?php

require_once("Cliente.php");

class Cliente_Empresa extends Cliente {
    public $rut;

    public function getRut(){
        return $this -> rut;
    }
    public function setRut(){
        $this -> rut = $rut;
    }
}
?>
    

  