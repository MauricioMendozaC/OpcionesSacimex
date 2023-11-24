<?php
    require_once "DAO/SucursalDAO.php";
    require_once "../Model/SucursalModel.php";


    $selection  =   $_POST['selection'];
    if($selection=="insert"||$selection=="edit")
    {
        $name       =   $_POST['name'];
        $zone       =   $_POST['zone'];
        $address    =   $_POST['address'];
    }
    if($selection=="edit"||$selection=="find"||$selection=="delete") $idSucursal = $_POST['id'];
    
    switch($selection)
    {
        case "insert" : $sucursalDAO = new SucursalDAO();
                        $sucursal = new SucursalModel(0,$name,$zone,$address);
                        //the connection is closed in the store method
                        $output = $sucursalDAO->storeSucursal($sucursal);
                        echo($output);
                        break;
        case "all" :    $sucursalDAO = new SucursalDAO();
                        $output = $sucursalDAO->getSucursals();
                        echo($output);
                        break;

        case "find":    $sucursalDAO = new SucursalDAO();
                        $sucursal = new SucursalModel($idSucursal,"","","");
                        $sucursalFind = $sucursalDAO->sucursal($sucursal); 
                        echo($sucursalFind);
                        break;
        case "edit":    $sucursalDAO = new SucursalDAO();
                        $sucursal = new SucursalModel($idSucursal,$name,$zone,$address);
                        $output = $sucursalDAO->updateSucursal($sucursal);
                        echo ($output);
                        break;
        case "delete":  $sucursalDAO = new SucursalDAO();
                        $sucursal = new SucursalModel($idSucursal,"","","");
                        $output = $sucursalDAO->deleteSucursal($sucursal);
                        echo($output);
                        break;
        default : echo(json_encode(["Message" => "No option selected"]));
                  break;

    }
?>