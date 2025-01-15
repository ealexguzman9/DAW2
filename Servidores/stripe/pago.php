<?php
require_once 'stripe-php-13.9.0/init.php';
//require __DIR__ . "/vendor/autoload.php";

$stripe_secret_key = "sk_test_51QeuSGG6bhINuAivVyeLtyHQw6uklboKRohPZOQhSrwx3AcudLxcH5ZrFubrDaWnd3SKsnGNhhKJFVPtziOVX1ao00RKfudCNY"; // Tu clave privada aquí

\Stripe\Stripe::setApiKey($stripe_secret_key);

$checkout_session = \Stripe\Checkout\Session::create([
    "mode" => "payment",
    "success_url" => "https://localhost/stripe/fin-compra.php",
    "cancel_url" => "https://localhost/stripe/error-compra.php",
    "locale" => "auto",
    "line_items" => [
        [
            "quantity" => 1,
            "price_data" => [
                "currency" => "eur",
                "unit_amount" => 2000,
                "product_data" => [
                    "name" => "Producto 1"
                ]
            ]
        ],
        [
            "quantity" => 2,
            "price_data" => [
                "currency" => "eur",
                "unit_amount" => 700,
                "product_data" => [
                    "name" => "Producto 2"
                ]
            ]
        ]        
    ]
]);

http_response_code(303);
header("Location: " . $checkout_session->url);