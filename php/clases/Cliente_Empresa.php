<?php

require_once("Cliente.php");

class Cliente_empresa extends Cliente {
    public $rut;
    
    public function __construct($id,$rut,$email,$telefono,$clave,$calle,$puerta,$esquina,$barrio,$autorizar){
        $this -> id = $id;
        $this -> rut = $rut;
        $this -> email = $email;
        $this -> telefono = $telefono;
        $this -> calle = $calle;
        $this -> puerta = $puerta;
        $this -> esquina = $esquina;
        $this -> barrio = $barrio;
        $this -> autorizar = $autorizar;
    }

    public function getRut(){
        return $this -> rut;
    }
    public function setRut(){
        $this -> rut = $rut;
    }

    public function enviarDatos(){
        //Metodo de conexion a la base de datos
        $conexion = new Conexion();
        $conexion -> conectar();
        //Cargar tabla cliente
        $pre = mysqli_prepare($conexion->con,"INSERT INTO cliente (ID_CLIENTE,EMAIL,CALLE,N_PUERTA,ESQUINA,BARRIO,AUTORIZADO) VALUE (?,?,?,?,?,?,?)");
        $pre -> bind_param("ississs",$this->id,$this->email,$this->calle,$this->puerta,$this->esquina,$this->barrio,$this->autorizar);
        $pre -> execute();
        //Cargar tabla cliente_empresa
        $preDos = mysqli_prepare($conexion->con,"INSERT INTO cliente_empresa (ID_CLIENTE,RUT) VALUE (?,?)");
        $preDos -> bind_param("ii",$this->id,$this->rut);
        $preDos -> execute();
        //Cargar tabla a Cliente_telefono
        $preTres = mysqli_prepare($conexion->con, "INSERT INTO cliente_telefono (ID_CLIENTE,TELEFONO) VALUE (?,?)");
        $preTres -> bind_param("ii",$this->id,$this->telefono);
        $preTres -> execute();
    }
    
    }
?>
    

  