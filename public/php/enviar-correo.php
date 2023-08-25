<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = json_decode(file_get_contents("php://input"), true);

    $nombre = $data["nombre"];
    $correo = $data["correo"];
    $mensaje = $data["mensaje"];
    
    $content = "Nombre: ".$nombre."\n\nContacto: ".$correo."\n\n".$mensaje;

    $apiKey = "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";

    $headers = [
        "Authorization: Bearer $apiKey",
        "Content-Type: application/json"
    ];

    $payload = [
        "personalizations" => [
            [
                "to" => [
                    [
                        "email" => "mendozacervantes2303@gmail.com"
                    ]
                ],
                "subject" => "Mensaje enviado desde la página web"
            ]
        ],
        "from" => [
            "email" => "programador.desarrollo@opcionessacimex.com"
        ],
        "content" => [
            [
                "type" => "text/plain",
                "value" => $content
            ]
        ]
    ];

    $ch = curl_init("https://api.sendgrid.com/v3/mail/send");
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    $response = curl_exec($ch);
    curl_close($ch);

    echo $response;
}
?>