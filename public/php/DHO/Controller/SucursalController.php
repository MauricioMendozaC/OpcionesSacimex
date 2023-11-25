<?php
    require_once "DAO/SucursalDAO.php";
    require_once "../Model/SucursalModel.php";


    header('Content-Type: application/json');
    //$selection  =   $_POST['selection'];
    //$data = $_POST[''];
    $datajson = json_decode( file_get_contents('php://input') );
    //var_dump($datajson);
    $selection = $datajson->selection;


    if($selection=="insert"||$selection=="edit")
    {
        $name       =   $datajson->name;
        $zone       =   $datajson->zone;
        $address    =   $datajson->address;
        $form       =   $datajson->form;
    }
    if($selection=="edit"||$selection=="find"||$selection=="delete") $idSucursal = $datajson->id;
    
    switch($selection)
    {
        case "insert" : $sucursalDAO = new SucursalDAO();
                        $sucursal = new SucursalModel(0,$name,$zone,$address, $form);
                        //the connection is closed in the store method
                        $output = $sucursalDAO->storeSucursal($sucursal);
                        echo($output);
                        break;
        case "all" :    $sucursalDAO = new SucursalDAO();
                        $output = $sucursalDAO->getSucursals();
                        echo($output);
                        break;

        case "find":    $sucursalDAO = new SucursalDAO();
                        $sucursal = new SucursalModel($idSucursal,"","","","");
                        $sucursalFind = $sucursalDAO->sucursal($sucursal); 
                        echo($sucursalFind);
                        break;
        case "edit":    $sucursalDAO = new SucursalDAO();
                        $sucursal = new SucursalModel($idSucursal,$name,$zone,$address,$form);
                        $output = $sucursalDAO->updateSucursal($sucursal);
                        echo ($output);
                        break;
        case "delete":  $sucursalDAO = new SucursalDAO();
                        $sucursal = new SucursalModel($idSucursal,"","","","");
                        $output = $sucursalDAO->deleteSucursal($sucursal);
                        echo($output);
                        break;
        default : echo(json_encode(["Message" => "No option selected"]));
                  break;

    }
?>