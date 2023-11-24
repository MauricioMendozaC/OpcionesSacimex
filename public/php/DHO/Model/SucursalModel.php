<?php

class SucursalModel implements JsonSerializable
{
    private $idSucursal;
    private $sucursalName;
    private $sucursalZone;
    private $sucursalAddress;

    public function __construct($idSucursal,$sucursalName, $sucursalZone, $sucursalAddress)
    {
        $this->idSucursal = $idSucursal;
        $this->sucursalName = $sucursalName;
        $this->sucursalZone = $sucursalZone;
        $this->sucursalAddress = $sucursalAddress;
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

    public function jsonSerialize()
    {
        return (object) get_object_vars($this);
    }

}

?>