<?php

class VacantModel implements JsonSerializable
{
    private $idVacant;
    private $vacantName;
    private $idProfile;
    private $idSucursal;

    public function __construct()
    {

    }

    public function createWithAll($idVacant, $vacantName, $idProfile, $idSucursal)
    {
        $this->idVacant = $idVacant;
        $this->vacantName = $vacantName;
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

    public function setVacantName($vacantName)
    {
        $this->vacantName = $vacantName;
    }

    public function getVacantName()
    {
        return $this->vacantName;
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