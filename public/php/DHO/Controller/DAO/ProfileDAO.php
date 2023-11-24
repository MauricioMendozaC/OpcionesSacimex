<?php
require_once "../Conexion.php";
require_once "../Model/ProfileModel.php";

class ProfileDAO
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

    public function getProfiles()
    {
        $profiles = array();
        $query = "select * from Perfiles";
        $result = $this->conexion->execute($query);

        while($reg = mysqli_fetch_array($result))
        {
            $profile = new ProfileModel();
            $profile->createWithAll($reg[0],$reg[1],$reg[2],$reg[3],$reg[4]);
            array_push($profiles,$profile);
        }
        $this->conexion->closeConection();
        return json_encode($profiles);
    }

    public function profile($profile)
    {
        $profileFind = null;
        $idProfile = $profile->getIdProfile();
        $query = "select * from Perfiles where idPerfil = $idProfile";
        $result = $this->conexion->execute($query);

        while($reg = mysqli_fetch_array($result))
        {
            $profileFind = new ProfileModel();
            $profileFind->createWithAll($reg[0],$reg[1],$reg[2],$reg[3],$reg[4]);
        }
        $this->conexion->closeConection();
        return json_encode($profileFind);
    }

    public function storeProfile($profile)
    {
        $profileName = $profile->getProfileName();
        $requirements = $profile->getRequirements();
        $functions = $profile->getFunctions();
        $advantages = $profile->getAdvantages();
        $errMsj=array();
        $query = "insert into Perfiles (`nombrePerfil`, `requisitos`, `funciones`, `ofrecemos`) values 
                 ('$profileName',
                 '$requirements',
                 '$functions',
                 '$advantages')";
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
            $errMsj['Message'] = "Successfully inserted 1 record on Perfiles table";
            $errMsj['Query'] = $query;
        }
        $this->conexion->closeConection();
        return json_encode($errMsj);
    }

    public function updateProfile($profile)
    {
        $id = $profile->getIdProfile();
        $name = $profile->getProfileName();
        $requirements = $profile->getRequirements();
        $functions = $profile->getFunctions();
        $advantages = $profile->getAdvantages();
        $query = "update Perfiles set 
                  nombrePerfil = '$name', 
                  requisitos = '$requirements', 
                  funciones = '$functions',
                  ofrecemos= '$advantages'
                  where idPerfil = $id";
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
            $errMsj['Message'] = "Successfully updated 1 record on Perfiles table";
            $errMsj['Query'] = $query;
        }
        $this->conexion->closeConection();
        return json_encode($errMsj);
    }

    public function deleteProfile($profile)
    {
        //Here we don't look for the entire Profile data, we only need the id
        $id = $profile->getIdProfile();
        $query = "delete from Perfiles where idPerfil = $id";
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
            $errMsj['Message'] = "Successfully deleted 1 record on Perfiles table";
            $errMsj['Query'] = $query;
        }
        $this->conexion->closeConection();
        return json_encode($errMsj);
    }
}

?>