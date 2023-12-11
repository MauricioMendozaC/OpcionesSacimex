<?php
    require_once "DAO/VacantDAO.php";
    require_once "../Model/VacantModel.php";

    header('Content-Type: application/json');
    $datajson = json_decode( file_get_contents('php://input') );
    $selection = $datajson->selection;

    if($selection=="insert"||$selection=="edit")
    {
        $profile      =   $datajson->profile;
        $sucursal     =   $datajson->sucursal;
    }
    if($selection=="persucursal") $sucursal = $datajson->sucursal;
    if($selection=="edit"||$selection=="find"||$selection=="delete") $idVacant = $datajson->id;
    
    switch($selection)
    {
        case "insert" : $vacantDAO = new VacantDAO();
                        $vacant = new VacantModel();
                        $vacant->createWithAll(0,$profile,$sucursal);
                        //the connection is closed in the store method
                        $output = $vacantDAO->storeVacant($vacant);
                        echo($output);
                        break;
        case "all" :    $output = null;
                        $vacantDAO = new VacantDAO();
                        $output = $vacantDAO->getVacants();
                        echo($output);
                        break;

        case "find":    $vacantDAO = new VacantDAO();
                        $vacant = new VacantModel();
                        $vacant->setIdVacant($idVacant);
                        $vacantFind = $vacantDAO->vacant($vacant); 
                        echo($vacantFind);
                        break;
        case "edit":    $vacantDAO = new VacantDAO();
                        $vacant = new VacantModel();
                        $vacant->createWithAll($idvacant,$profile,$sucursal);
                        $output = $vacantDAO->updatevacant($vacant);
                        echo ($output);
                        break;
        case "delete":  $vacantDAO = new vacantDAO();
                        $vacant = new VacantModel();
                        $vacant ->setIdVacant($idvacant);
                        $output = $vacantDAO->deletevacant($vacant);
                        echo($output);
                        break;
        case "persucursal" : $vacantDAO = new VacantDAO();
                             $infoSucursal = $vacantDAO->infoPerSucursal($sucursal);
                             echo($infoSucursal);
                             break;
        default : echo(json_encode(["Message" => "No option selected"]));
                  break;

    }
?>