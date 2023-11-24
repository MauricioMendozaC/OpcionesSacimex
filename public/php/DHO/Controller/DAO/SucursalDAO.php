<?php
require_once "../Conexion.php";
require_once "../Model/SucursalModel.php";

class SucursalDAO
{
    private $conexion;

    public function __construct()
    {
        $this->conexion = new Conexion("opcionessacimex.com","opcione6_vacantes_dho","opcione6_vacantes_dho","Vacantes dHoXD");
    }

    public function getConexion()
    {
        return $this->conexion;
    }

    public function getSucursals()
    {
        $sucursals = array();
        $query = "select * from sucursales";
        $result = $this->conexion->execute($query);

        while($reg = mysqli_fetch_array($result))
        {
            $sucursal = new SucursalModel($reg[0],$reg[1],$reg[2],$reg[3]);
            array_push($sucursals,$sucursal);
        }
        $this->conexion->closeConection();
        return json_encode($sucursals);
    }

    public function sucursal($sucursal)
    {
        $sucursalFind = null;
        $idSucursal = $sucursal->getIdSucursal();
        $query = "select * from sucursales where idSucursal = $idSucursal";
        $result = $this->conexion->execute($query);

        while($reg = mysqli_fetch_array($result))
        {
            $sucursalFind = new SucursalModel($reg[0],$reg[1],$reg[2],$reg[3]);
        }
        $this->conexion->closeConection();
        return json_encode($sucursalFind);
    }

    public function storeSucursal($sucursal)
    {
        $sucursalName = $sucursal->getSucursalName();
        $sucursalZone = $sucursal->getSucursalZone();
        $sucursalAddress = $sucursal->getSucursalAddress();
        $errMsj=array();
        $query = "insert into sucursales (`nombreSucursal`, `zonaSucursal`, `direccionSucursal`) values 
                 ('$sucursalName',
                 '$sucursalZone',
                 '$sucursalAddress')";
        $result = $this->conexion->execute($query);

        if(!$result)
        {
            $errMsj['State'] = "Error";
            $errMsj['Error message'] = mysqli_error($this->conexion->getCon());
            $errMsj['query'] = $query;
            //printf("Error: %s\n", mysqli_error($this->conexion->getCon()));
            
        }
        else
        {
            $errMsj['State'] = "OK";
            $errMsj['Message'] = "Successfully inserted 1 record on Sucursales table";
            $errMsj['Query'] = $query;
        }
        $this->conexion->closeConection();
        return json_encode($errMsj);
    }

    public function updateSucursal($sucursal)
    {
        $id = $sucursal->getIdSucursal();
        $name = $sucursal->getSucursalName();
        $zone = $sucursal->getSucursalZone();
        $address = $sucursal->getSucursalAddress();
        //$sucursalFind = json_decode($this->sucursal($sucursal));
        $query = "update Sucursales set 
                  nombreSucursal = '$name', 
                  zonaSucursal = '$zone', 
                  direccionSucursal = '$address'
                  where idSucursal = $id";
        $result = $this->conexion->execute($query);
        if(!$result)
        {
            $errMsj['State'] = "Error";
            $errMsj['Error message'] = mysqli_error($this->conexion->getCon());
            $errMsj['query'] = $query;
            //printf("Error: %s\n", mysqli_error($this->conexion->getCon()));
            
        }
        else
        {
            $errMsj['State'] = "OK";
            $errMsj['Message'] = "Successfully updated 1 record on Sucursales table";
            $errMsj['Query'] = $query;
        }
        $this->conexion->closeConection();
        return json_encode($errMsj);
    }

    public function deleteSucursal($sucursal)
    {
        //Here we don't look for the entire sucursal data, we only need the id
        $id = $sucursal->getIdSucursal();
        $query = "delete from Sucursales where idSucursal = $id";
        $result = $this->conexion->execute($query);
        if(!$result)
        {
            $errMsj['State'] = "Error";
            $errMsj['Error message'] = mysqli_error($this->conexion->getCon());
            $errMsj['query'] = $query;
            //printf("Error: %s\n", mysqli_error($this->conexion->getCon()));
            
        }
        else
        {
            $errMsj['State'] = "OK";
            $errMsj['Message'] = "Successfully deleted 1 record on Sucursales table";
            $errMsj['Query'] = $query;
        }
        $this->conexion->closeConection();
        return json_encode($errMsj);
    }
}

?>