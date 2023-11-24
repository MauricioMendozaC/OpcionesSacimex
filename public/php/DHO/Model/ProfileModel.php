<?php

class ProfileModel implements JsonSerializable
{
    private $idProfile;
    private $profileName;
    private $requirements;
    private $functions;
    private $advantages;

    public function __construct()
    {

    }

    public function createWithAll($idProfile, $profileName, $requirements, $functions, $advantages)
    {
        $this->idProfile = $idProfile;
        $this->profileName = $profileName;
        $this->requirements = $requirements;
        $this->functions = $functions;
        $this->advantages = $advantages;
    }

    public function setIdProfile($idProfile)
    {
        $this->idProfile = $idProfile;
    }

    public function getIdProfile()
    {
        return $this->idProfile;
    }

    public function setProfileName($profileName)
    {
        $this->profileName = $profileName;
    }

    public function getProfileName()
    {
        return $this->profileName;
    }

    public function setRequirements($requirements)
    {
        $this->requirements = $requirements;
    }

    public function getRequirements()
    {
        return $this->requirements;
    }

    public function setFunctions($functions)
    {
        $this->functions = $functions;
    }

    public function getFunctions()
    {
        return $this->functions;
    }

    public function setAdvantages($advantages)
    {
        $this->advantages = $advantages;
    }

    public function getAdvantages()
    {
        return $this->advantages;
    }

    public function jsonSerialize()
    {
        return (object) get_object_vars($this);
    }

}

?>