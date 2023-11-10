<?php

require_once("Dieta.php");
class Menu extends Dieta{
    public $id_menu;
    public $nombre;
    public $tiempo_elaboracion;
    public $precio;
    public $stock_min;
    public $stock_max;
    public $stock_real;

    public function __construct($id_menu,$nombre,$tiempo_elaboracion,$tipo,$precio,$stock_min,$stock_max,$stock_real) {
        $this -> id_menu = $id_menu;
        $this -> nombre = $nombre;
        $this -> tiempo_elaboracion = $tiempo_elaboracion;
        $this -> tipo = $tipo;
        $this -> precio = $precio;
        $this -> stock_min = $stock_min;
        $this -> stock_max = $stock_max;
        $this -> stock_real = $stock_real;
    }
    public function getId_menu(){
        return $this -> id_menu;
    }
    public function setId_menu(){
        $this -> id_menu = $id_menu;
    }
    public function getNombre(){
        return $this -> nombre;
    }
    public function setNombre(){
        $this -> nombre = $nombre;
    }
    public function getTiempo_elaboracion(){
        return $this -> tiempo_elaboracion;
    }
    public function setTiempo_elaboracion(){
        $this -> tiempo_elaboracion = $tiempo_elaboracion;
    }
    public function getPrecio(){
        return $this -> precio;
    }
    public function setPrecio(){
        $this -> precio = $precio;
    }
    public static function datoMenu(){
        $conexion = new Conexion();
        $conexion->conectar();
        $pre = mysqli_prepare($conexion->con,"SELECT * FROM menu");
        $pre -> execute();
        $res = $pre -> get_result();
        $menus = [];
        while ($row = $res->fetch_assoc()){
            $menu = new Menu($row['ID_MENU'],$row['NOMBRE'],$row['TIEMPO_DE_ELABORACION'],$row['TIPO_DE_MENU'],$row['PRECIO'],$row['STOCK_MIN'],$row['STOCK_MAX'],$row['STOCK_REAL']);
            array_push($menus,$menu);
        }
        return $menus;
    }
    
}

?>
