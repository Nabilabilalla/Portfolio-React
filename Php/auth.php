<?php
require 'vendor/autoload.php';
use \Firebase\JWT\JWT;
use \Firebase\JWT\Key;

$key = "SECRET123";
$headers = apache_request_headers();

if (!isset($headers['Authorization'])) {
    http_response_code(401);
    echo json_encode(["error" => "Token manquant"]);
    exit;
}

$jwt = str_replace("Bearer ", "", $headers['Authorization']);

try {
    $decoded = JWT::decode($jwt, new Key($key, 'HS256'));
    echo json_encode(["message" => "Token valide", "data" => $decoded->data]);
} catch (Exception $e) {
    http_response_code(401);
    echo json_encode(["error" => "Token invalide: " . $e->getMessage()]);
}
?>
