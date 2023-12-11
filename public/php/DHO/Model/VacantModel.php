<?php

class VacantModel implements JsonSerializable
{
    private $idVacant;
    private $idProfile;
    private $idSucursal;

    public function __construct()
    {

    }

    public function createWithAll($idVacant, $idProfile, $idSucursal)
    {
        $this->idVacant = $idVacant;
        $this->idProfile = $idProfile;
        $this->idSucursal = $idSucursal;
    }

    public function setIdVacant($idVacant)
    {
        $this->idVacant = $idVacant;
    }

    public function getIdVacant()
    {
        return $this->idVacant;
    }

    public function setIdProfile($idProfile)
    {
        $this->idProfile = $idProfile;
    }

    public function getIdProfile()
    {
        return $this->idProfile;
    }

    public function setIdSucursal($idSucursal)
    {
        $this->idSucursal = $idSucursal;
    }

    public function getIdSucursal()
    {
        return $this->idSucursal;
    }

    public function jsonSerialize()
    {
        return (object) get_object_vars($this);
    }

}

?>