<?php
// Credenciales de PayPal Sandbox
$clientId = 'TU_CLIENT_ID';
$clientSecret = 'TU_CLIENT_SECRET';

// URL de las API de PayPal (sandbox)
$paypalApiBase = "https://api.sandbox.paypal.com";

// 1. Obtener el token de acceso
function getAccessToken($clientId, $clientSecret, $paypalApiBase) {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "$paypalApiBase/v1/oauth2/token");
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        "Accept: application/json",
        "Accept-Language: en_US"
    ]);
    curl_setopt($ch, CURLOPT_POSTFIELDS, "grant_type=client_credentials");
    curl_setopt($ch, CURLOPT_USERPWD, "$clientId:$clientSecret");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    
    $response = curl_exec($ch);
    if (curl_errno($ch)) {
        die('Error al obtener el token: ' . curl_error($ch));
    }
    curl_close($ch);
    
    $data = json_decode($response, true);
    return $data['access_token'] ?? null;
}

// 2. Crear un pago
function createPayment($accessToken, $paypalApiBase) {
    $paymentData = [
        "intent" => "sale",
        "payer" => [
            "payment_method" => "paypal"
        ],
        "transactions" => [
            [
                "amount" => [
                    "total" => "34.00",
                    "currency" => "EUR"
                ],
                "description" => "Pago de productos de ejemplo",
                "item_list" => [
                    "items" => [
                        [
                            "name" => "Producto 1",
                            "price" => "7.00",
                            "currency" => "EUR",
                            "quantity" => 2
                        ],
                        [
                            "name" => "Producto 2",
                            "price" => "20.00",
                            "currency" => "EUR",
                            "quantity" => 1
                        ]
                    ]
                ]
            ]
        ],
        "redirect_urls" => [
            "return_url" => "https://localhost/success.php",
            "cancel_url" => "https://localhost/cancel.php"
        ]
    ];
    
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "$paypalApiBase/v1/payments/payment");
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        "Content-Type: application/json",
        "Authorization: Bearer $accessToken"
    ]);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($paymentData));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    
    $response = curl_exec($ch);
    if (curl_errno($ch)) {
        die('Error al crear el pago: ' . curl_error($ch));
    }
    curl_close($ch);
    
    $data = json_decode($response, true);
    return $data;
}

// Obtener el token de acceso
$accessToken = getAccessToken($clientId, $clientSecret, $paypalApiBase);

if (!$accessToken) {
    die('Error: no se pudo obtener el token de acceso.');
}

// Crear el pago
$payment = createPayment($accessToken, $paypalApiBase);

if (isset($payment['links'])) {
    foreach ($payment['links'] as $link) {
        if ($link['rel'] === 'approval_url') {
            // Redirige al usuario a PayPal
            header("Location: " . $link['href']);
            exit;
        }
    }
}

// Error si no se encuentra el enlace de aprobación
die('Error al generar el enlace de pago.');
?>
