<?php

class Conexion {

    public $con;

    public function conectar(){

        $this->con = mysqli_connect("bd","root","bugslayer","bugslayer");

    }
}

?>