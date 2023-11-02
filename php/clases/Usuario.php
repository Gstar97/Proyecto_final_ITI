<?php

require_once("Conexion.php");
class Usuario extends Conexion {
    public $ci;
    public $clave;
    public $email;
    public $id;

    public function getCi(){
        return $this -> ci;
    }
    public function setCi($ci){
        $this -> ci = $ci;
    }
    public function getEmail(){
        return $this -> email;
    }
    public function setEmail($email){
        $this -> email = $email;
    }
    public function getClave(){
        return $this -> clave;
    }
    public function setClave($clave){
        $this -> clave = $clave;
    }
    public function getId(){
        return $this -> id;
    }
    public function setId(){
        $this -> id = $id;
    }
}
?>


