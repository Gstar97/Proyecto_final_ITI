<?php

require_once("Cliente.php");
class Cliente_web extends Cliente {
    public $nombre;
    public $apellido;

    public function __construct($id,$ci,$nombre,$apellido,$email,$telefono,$clave,$barrio,$esquina,$calle,$puerta,$autorizar){
        $this -> id = $id;
        $this -> ci = $ci;
        $this -> nombre = $nombre;
        $this -> apellido = $apellido;
        $this -> email = $email;
        $this -> telefono = $telefono;
        $this -> clave = $clave;
        $this -> barrio = $barrio;
        $this -> esquina = $esquina;
        $this -> calle = $calle;
        $this -> puerta = $puerta;
        $this -> autorizar = $autorizar;
    }
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
    public function enviarDatos(){
        //Metodo de conexion a la base de datos
        $conexion = new Conexion();
        $conexion -> conectar();
        //Cargar tabla cliente
        $pre = mysqli_prepare($conexion->con, "INSERT INTO cliente (ID_CLIENTE,EMAIL,CALLE,N_PUERTA,ESQUINA,BARRIO,CLAVE,AUTORIZADO) VALUE (?,?,?,?,?,?,?,?)");
        $pre->bind_param("ississss",$this->id,$this->email,$this->calle,$this->puerta,$this->esquina,$this->barrio,$this->clave,$this->autorizar);
        $pre->execute();
        //Cargar tabla cliente_web
        $preDos = mysqli_prepare($conexion->con,"INSERT INTO cliente_web (ID_CLIENTE,CEDULA_IDENTIDAD_CLIENTE,PRIMER_NOMBRE,PRIMER_APELLIDO) VALUE (?,?,?,?)");
        $preDos -> bind_param("iiss",$this->id,$this->ci,$this->nombre,$this->apellido);
        $preDos -> execute();
        //Cargar tabla a Cliente_telefono
        $preTres = mysqli_prepare($conexion->con,"INSERT INTO cliente_telefono (ID_CLIENTE,TELEFONO) VALUE (?,?)");
        $preTres -> bind_param("ii",$this->id,$this->telefono);
        $preTres -> execute();
        }

}       

?>
    