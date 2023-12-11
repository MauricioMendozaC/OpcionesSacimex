<?php
require_once "../Conexion.php";
require_once "../Model/VacantModel.php";

class VacantDAO
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

    public function getVacants()
    {
        $vacants = array();
        $query = "select * from Vacantes";
        $result = $this->conexion->execute($query);

        while($reg = mysqli_fetch_array($result))
        {
            $vacant = new VacantModel();
            $vacant->createWithAll($reg[0],$reg[1],$reg[2]);
            array_push($vacants,$vacant);
        }
        $this->conexion->closeConection();
        return json_encode($vacants);
    }

    public function vacant($vacant)
    {
        $vacantFind = null;
        $idVacant = $vacant->getIdVacant();
        $query = "select * from Vacantes where idVacante = $idVacant";
        $result = $this->conexion->execute($query);

        while($reg = mysqli_fetch_array($result))
        {
            $vacantFind = new VacantModel();
            $vacantFind->createWithAll($reg[0],$reg[1],$reg[2]);
        }
        $this->conexion->closeConection();
        return json_encode($vacantFind);
    }

    public function storeVacant($vacant)
    {
        $idProfile = $vacant->getIdProfile();
        $idSucursal = $vacant->getIdSucursal();
        $errMsj=array();
        $query = "insert into Vacantes (`idPerfil`, `idSucursal`) values 
                 (
                 $idProfile,
                 $idSucursal)";
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
            $errMsj['Message'] = "Successfully inserted 1 record on Vacantes table";
            $errMsj['Query'] = $query;
        }
        $this->conexion->closeConection();
        return json_encode($errMsj);
    }

    public function updateVacant($vacant)
    {
        $id = $vacant->getIdVacant();
        $idProfile = $vacant->getIdProfile();
        $idSucursal = $vacant->getIdSucursal();
        $query = "update Vacantes set 
                  idPerfil = $idProfile, 
                  idSucursal = $idSucursal
                  where idVacante = $id";
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
            $errMsj['Message'] = "Successfully updated 1 record on Vacantes table";
            $errMsj['Query'] = $query;
        }
        $this->conexion->closeConection();
        return json_encode($errMsj);
    }

    public function deleteVacant($vacant)
    {
        //Here we don't look for the entire vacant data, we only need the id
        $id = $vacant->getIdVacant();
        $query = "delete from Vacantes where idVacante = $id";
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
            $errMsj['Message'] = "Successfully deleted 1 record on vacantes table";
            $errMsj['Query'] = $query;
        }
        $this->conexion->closeConection();
        return json_encode($errMsj);
    }

    public function infoPerSucursal($idSucursal)
    {
        $query = "select * from Vacantes v inner 
                  join Perfiles p on v.idPerfil = p.idPerfil where idSucursal = $idSucursal";
        $result = $this->conexion->execute($query);
        $infoVacants = array();

        if(!$result)
        {
            $errMsj['State'] = "Error";
            $errMsj['Error message'] = mysqli_error($this->conexion->getCon());
            $errMsj['query'] = $query;
            return json_encode($errMsj);
            //printf("Error: %s\n", mysqli_error($this->conexion->getCon()));
        }
        else
        {

        }
        //We use the constant MYSQL_ASSOC to retrieve only records with column name headers,
        //otherwise it will contain duplicated records, one for index columns and the other for column name
        while($reg = mysqli_fetch_array($result, MYSQLI_ASSOC))
        {
            array_push($infoVacants,$reg);
        }
        //$this->conexion->closeConection();
        return json_encode($infoVacants);
    }
}

?>