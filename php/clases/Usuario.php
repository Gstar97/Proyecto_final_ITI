<?php

require_once("Conexion.php");
class Usuario extends Conexion {
    public $ci;
    public $clave;
    public $email;
    public $id;

    public function __construct($id,$ci,$email,$clave) {
        $this -> id = $id;
        $this -> ci = $ci;
        $this -> email = $email;
        $this -> clave = $clave;
    }

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
    public function ingresarUsuario(){
        $this -> conectar();
        $pre = mysqli_prepare($this->con,"SELECT ID_CLIENTE,AUTORIZADO FROM cliente WHERE EMAIL=? AND CLAVE=?");
        $pre -> bind_param("ss",$this->email,$this->clave);
        $pre -> execute();
        $res = $pre -> get_result();
        $res = $res -> num_rows;
        if($res == "1"){
            echo "true";
        }else{
            echo "false";
        } 
    
    }
    
    
}
?>


