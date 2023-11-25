<?php

class SucursalModel implements JsonSerializable
{
    private $idSucursal;
    private $sucursalName;
    private $sucursalZone;
    private $sucursalAddress;
    private $sucursalForm;

    public function __construct($idSucursal,$sucursalName, $sucursalZone, $sucursalAddress, $sucursalForm)
    {
        $this->idSucursal = $idSucursal;
        $this->sucursalName = $sucursalName;
        $this->sucursalZone = $sucursalZone;
        $this->sucursalAddress = $sucursalAddress;
        $this->sucursalForm = $sucursalForm;
    }

    public function setIdSucursal($idSucursal)
    {
        $this->idSucursal = $idSucursal;
    }

    public function getIdSucursal()
    {
        return $this->idSucursal;
    }

    public function setSucursalName($sucursalName)
    {
        $this->sucursalName = $sucursalName;
    }

    public function getSucursalName()
    {
        return $this->sucursalName;
    }

    public function setSucursalZone($sucursalZone)
    {
        $this->sucursalZone = $sucursalZone;
    }

    public function getSucursalZone()
    {
        return $this->sucursalZone;
    }

    public function setSucursalAddress($sucursalAddress)
    {
        $this->sucursalAddress = $sucursalAddress;
    }

    public function getSucursalAddress()
    {
        return $this->sucursalAddress;
    }

    public function setSucursalForm($sucursalForm)
    {
        $this->sucursalForm = $sucursalForm;
    }

    public function getSucursalForm()
    {
        return $this->sucursalForm;
    }

    public function jsonSerialize()
    {
        return (object) get_object_vars($this);
    }

}

?>