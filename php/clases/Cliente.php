<?php

require_once("Usuario.php");

class Cliente extends Usuario{
    
    public $nombre;
    public $apellido;
    public $rut;
    public $calle;
    public $telefono;
    public $puerta;
    public $esquina;
    public $barrio;
    public $tipoCliente;

    public function __construct($nombre,$apellido,$rut,$ci,$email,$telefono,$calle,$puerta,$esquina,$barrio,$clave,$tipoCliente){
        $this -> nombre = $nombre;
        $this -> apellido = $apellido;
        $this -> rut = $rut;
        $this -> ci = $ci;
        $this -> email = $email;
        $this -> telefono = $telefono;
        $this -> calle = $calle;
        $this -> puerta = $puerta;
        $this -> esquina = $esquina;
        $this -> barrio = $barrio;
        $this -> clave = $clave;
        $this -> tipoCliente = $tipoCliente;
    }
    public function getNombre(){
        return $this -> nombre;
    }
    public function setNombre($nombre){
        $this -> nombre = strtolower($nombre);
    }
    public function getApellido(){
        return $this -> apellido;
    }
    public function setApellido($apellido){
        $this -> apellido = strtolower($apellido);
    }
    public function getRut(){
        return $this -> rut;
    }
    public function serRut(){
        $this -> rut = strtolower($rut);
    }
    public function getTelefono(){
        return $this -> telefono;
    }
    public function setTelefono($telefono){
        $this -> telefono = $telefono;
    }
    public function getCalle(){
        return $this -> calle;
    }
    public function setCalle($calle){
        $this -> calle = strtolower($calle);
    }
    public function getPuerta(){
        return $this -> puerta;
    }
    public function setPuerta($puerta){
        $this -> puerta = $puerta;
    }
    public function getEsquina(){
        return $this -> esquina;
    }
    public function setEsquina($esquina){
        $this -> esquina = strtolower($esquina);
    }
    public function getBarrio(){
        return $this -> barrio;
    }
    public function setBarrio($barrio){
        $this -> barrio = strtolower($barrio);
    }
    public function getTipoCliente(){
        return $this -> tipoCliente;
    }
    public function setTipoCliente(){
        $this -> tipoCliente = strtolower($tipoCliente);
    }
    public function enviarDatos(){
        $this->conectar();
        $pre = mysqli_prepare($this->con,"INSERT INTO clientes (ci,nombre,apellido,email,telefono,rut,barrio,esquina,calle,puerta,clave,tipo_cliente) VALUE (?,?,?,?,?,?,?,?,?,?,?,?)");
        $pre->bind_param("isssissssiss",$this->ci,$this->nombre,$this->apellido,$this->email,$this->telefono,$this->rut,$this->barrio,$this->esquina,$this->calle,$this->puerta,$this->clave,$this->tipoCliente);
        $pre->execute();        
    }
    public static function datoCliente(){
        $conexion = new Conexion();
        $conexion -> conectar();
        $pre = mysqli_prepare($conexion->con,"SELECT ci,nombre,apellido,email,telefono,rut,barrio,esquina,calle,puerta,clave,tipo_cliente FROM clientes");
        $pre->execute();
        $res = $pre->get_result();
        $clientes = [];
        
        while ($row = $res->fetch_assoc()){
            $cliente = new Cliente($row['nombre'],$row['apellido'],$row['rut'],$row['ci'],$row['email'],$row['telefono'],$row['calle'],$row['puerta'],$row['esquina'],$row['barrio'],$row['clave'],$row['tipo_cliente']);
            array_push($clientes, $cliente);
        }
        return $clientes;
    }
}
?>