<?php

class AdminModel implements JsonSerializable
{
    private $idAdmin;
    private $password;


    public function createWithAll($idAdmin, $password)
    {
        $this->idAdmin = $idAdmin;
        $this->password = $password;
    }

    public function setIdAdmin($idAdmin)
    {
        $this->idAdmin = $idAdmin;
    }

    public function getIdAdmin()
    {
        return $this->idAdmin;
    }

    public function setPassword($password)
    {
        $this->password = $password;
    }

    public function getPassword()
    {
        return $this->password;
    }

    public function jsonSerialize()
    {
        return (object) get_object_vars($this);
    }

}

?>