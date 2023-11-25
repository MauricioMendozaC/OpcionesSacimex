<?php
require_once "../Conexion.php";
require_once "../Model/AdminModel.php";

class AdminDAO
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

    public function getAdmins()
    {
        $admins = array();
        $query = "select * from Administrador";
        $result = $this->conexion->execute($query);

        while($reg = mysqli_fetch_array($result))
        {
            $admin = new AdminModel();
            $admin->createWithAll($reg[0],$reg[1]);
            array_push($admins,$admin);
        }
        $this->conexion->closeConection();
        return json_encode($admins);
    }

    public function admin($admin)
    {
        $adminFind = null;
        $idAdmin = $admin->getIdAdmin();
        $query = "select * from Administrador where idAdministrador = $idAdmin";
        $result = $this->conexion->execute($query);

        while($reg = mysqli_fetch_array($result))
        {
            $adminFind = new AdminModel();
            $adminFind->createWithAll($reg[0],$reg[1]);
        }
        $this->conexion->closeConection();
        return json_encode($adminFind);
    }

    public function storeAdmin($admin)
    {
        $password = $admin->getPassword();
        $errMsj=array();
        $query = "insert into Administrador (`clave`) values 
                 ('$password')";
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
            $errMsj['Message'] = "Successfully inserted 1 record on Administrador table";
            $errMsj['Query'] = $query;
        }
        $this->conexion->closeConection();
        return json_encode($errMsj);
    }

    public function updateAdmin($admin)
    {
        $id = $admin->getIdAdmin();
        $password = $admin->getPassword();
        $query = "update Administrador set 
                  clave = '$password'
                  where idAdministrador = $id";
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
            $errMsj['Message'] = "Successfully updated 1 record on Administrador table";
            $errMsj['Query'] = $query;
        }
        $this->conexion->closeConection();
        return json_encode($errMsj);
    }

    public function deleteAdmin($admin)
    {
        //Here we don't look for the entire Profile data, we only need the id
        $id = $admin->getIdAdmin();
        $query = "delete from Administrador where idAdministrador = $id";
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
            $errMsj['Message'] = "Successfully deleted 1 record on Administrador table";
            $errMsj['Query'] = $query;
        }
        $this->conexion->closeConection();
        return json_encode($errMsj);
    }
}

?>