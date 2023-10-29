<?php

require_once("../conexion.php");
class Serie extends conexion{
    public $cedula;
    public $email;
    public $telefono;
    public $nombre;
    public $apellido;
    public function __construct($cedula,$email,$telefono,$nombre,$apellido) {
        $this -> cedula = $cedula;
        $this -> email = $email;
        $this -> telefono = $telefono;
        $this -> nombre = $nombre;
        $this -> apellido = $apellido;
    }

    public function setCedula($cedula){
        $this -> cedula = strtolower($cedula);
    }
    public function getCedula(){
        return ucwords($this -> cedula);
    }
    public function setEmail($email){
        $this -> email = strtolower($email);
    }
    public function getEmail(){
        return ucwords($this -> email);
    }
    public function setTelefono($telefono){
        $this -> telefono = strtolower($telefono);
    }
    public function getTelefono(){
        return ucwords($this -> telefono);
    }
    public function setNombre($nombre){
        $this -> nombre = strtolower($nombre);
    }
    public function getNombre(){
        return ucwords($this -> nombre);
    }
    public function setApellido($apellido){
        $this -> apellido = strtolower($apellido);
    }
    public function getApellido(){
        return ucwords($this -> apellido);
    }
    public static function mostrar(){
        $conexion = new conexion();
        $conexion->conectar();
        $pre = mysqli_prepare($conexion->con, "SELECT cedula, email, telefono, nombre, apellido FROM usuario");
        $pre->execute();
        $res = $pre->get_result();
        $series = [];
        
        while ($row = $res->fetch_assoc()) {
            $serie = new Serie($row['cedula'], $row['email'], $row['telefono'], $row['nombre'], $row['apellido']);
            array_push($series, $serie);
        }
        return $series;

    }
    echo "$series";

    }
    


?>