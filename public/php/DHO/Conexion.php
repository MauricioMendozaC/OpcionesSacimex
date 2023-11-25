<?php

	class Conexion{
		private $conexion;
		public function __construct($servidor, $bd, $usuario, $password){
			$this->conexion=mysqli_connect($servidor,$usuario,$password,$bd);
			mysqli_set_charset($this->conexion, "utf8mb4");
			if(!$this->conexion){
				echo "Connection error";
				die("Conection error: ".mysqli_connect_error());
			}

			$selBD = mysqli_select_db($this->conexion,$bd);

			if(!$selBD){
				die("Error accessing the database");
			}
		}

		public function getCon(){
			return $this->conexion;
		}

		public function execute($query){
			return mysqli_query($this->conexion,$query);
		}

		public function closeConection()
		{
			mysqli_close($this->conexion);
		}
	}

	
	//$obj = new Conexion("localhost","vacantesdho","root","");
	//var_dump($obj->getCon());


?>