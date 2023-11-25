<?php
    require_once "DAO/AdminDAO.php";
    require_once "../Model/AdminModel.php";

    header('Content-Type: application/json');
    $datajson = json_decode( file_get_contents('php://input') );
    $selection = $datajson->selection;

    if($selection=="insert"||$selection=="edit")
    {
        $clave          =   $datajson->clave;
    }
    if($selection=="edit"||$selection=="find"||$selection=="delete") $idAdmin = $datajson->id;
    
    switch($selection)
    {
        case "insert" : $adminDAO = new AdminDAO();
                        $admin = new AdminModel();
                        $admin->createWithAll(0,$clave);
                        //the connection is closed in the store method
                        $output = $adminDAO->storeAdmin($admin);
                        echo($output);
                        break;
        case "all" :    $adminDAO = new AdminDAO();
                        $output = $adminDAO->getAdmins();
                        echo($output);
                        break;

        case "find":    $adminDAO = new AdminDAO();
                        $admin = new AdminModel();
                        $admin->setIdAdmin($idAdmin);
                        $adminFind = $adminDAO->admin($admin); 
                        echo($adminFind);
                        break;
        case "edit":    $AdminDAO = new AdminDAO
        ();
                        $admin = new AdminModel();
                        $admin->createWithAll($idAdmin,$clave);
                        $output = $adminDAO->updateAdmin($admin);
                        echo ($output);
                        break;
        case "delete":  $adminDAO = new AdminDAO();
                        $admin = new AdminModel();
                        $admin ->setIdAdmin($idAdmin);
                        $output = $AdminDAO->deleteAdmin($admin);
                        echo($output);
                        break;
        default : echo(json_encode(["Message" => "No option selected"]));
                  break;

    }
?>