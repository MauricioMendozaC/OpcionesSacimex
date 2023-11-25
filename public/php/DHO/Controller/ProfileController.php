<?php
    require_once "DAO/ProfileDAO.php";
    require_once "../Model/ProfileModel.php";

    header('Content-Type: application/json');
    $datajson = json_decode( file_get_contents('php://input') );
    $selection = $datajson->selection;

    if($selection=="insert"||$selection=="edit")
    {
        $name          =   $datajson->name;
        $requirements  =   $datajson->requirements;
        $functions     =   $datajson->functions;
        $advantages    =   $datajson->advantages;
    }
    if($selection=="edit"||$selection=="find"||$selection=="delete") $idProfile = $datajson->id;
    
    switch($selection)
    {
        case "insert" : $profileDAO = new ProfileDAO();
                        $profile = new ProfileModel();
                        $profile->createWithAll(0,$name,$requirements,$functions,$advantages);
                        //the connection is closed in the store method
                        $output = $profileDAO->storeProfile($profile);
                        echo($output);
                        break;
        case "all" :    $profileDAO = new ProfileDAO();
                        $output = $profileDAO->getProfiles();
                        echo($output);
                        break;

        case "find":    $profileDAO = new ProfileDAO();
                        $profile = new ProfileModel();
                        $profile->setIdProfile($idProfile);
                        $profileFind = $profileDAO->Profile($profile); 
                        echo($profileFind);
                        break;
        case "edit":    $profileDAO = new ProfileDAO
        ();
                        $profile = new ProfileModel();
                        $profile->createWithAll($idProfile,$name,$requirements,$functions,$advantages);
                        $output = $profileDAO->updateProfile($profile);
                        echo ($output);
                        break;
        case "delete":  $profileDAO = new ProfileDAO();
                        $profile = new ProfileModel();
                        $profile ->setIdProfile($idProfile);
                        $output = $profileDAO->deleteProfile($profile);
                        echo($output);
                        break;
        default : echo(json_encode(["Message" => "No option selected"]));
                  break;

    }
?>