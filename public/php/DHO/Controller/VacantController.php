<?php
    require_once "DAO/VacantDAO.php";
    require_once "../Model/VacantModel.php";


    $selection  =   $_POST['selection'];
    if($selection=="insert"||$selection=="edit")
    {
        $name         =   $_POST['name'];
        $profile      =   $_POST['profile'];
        $sucursal     =   $_POST['sucursal'];
    }
    if($selection=="persucursal") $sucursal = $_POST['sucursal'];
    if($selection=="edit"||$selection=="find"||$selection=="delete") $idVacant = $_POST['id'];
    
    switch($selection)
    {
        case "insert" : $vacantDAO = new VacantDAO();
                        $vacant = new VacantModel();
                        $vacant->createWithAll(0,$name,$profile,$sucursal);
                        //the connection is closed in the store method
                        $output = $vacantDAO->storeVacant($vacant);
                        echo($output);
                        break;
        case "all" :    $vacantDAO = new VacantDAO();
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
                        $vacant->createWithAll($idvacant,$name,$profile,$sucursal);
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