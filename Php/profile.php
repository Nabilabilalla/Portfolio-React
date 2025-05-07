<?php
require 'vendor/autoload.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: GET");

$jwt_secret = "votre_cle_secrete"; // La même clé que celle utilisée pour l'encodage

$authHeader = $_SERVER['HTTP_AUTHORIZATION'] ?? '';

if (!$authHeader || !preg_match('/Bearer\s(\S+)/', $authHeader, $matches)) {
    http_response_code(401);
    echo json_encode(["error" => "Token non fourni"]);
    exit;
}

$jwt = $matches[1];

try {
    $decoded = JWT::decode($jwt, new Key($jwt_secret, 'HS256'));
    $userId = $decoded->id;

    // Connexion à la base
    $pdo = new PDO("mysql:host=localhost;dbname=user_auth;charset=utf8", "nabila", "nabila1997");

    $stmt = $pdo->prepare("SELECT id, name, email FROM users WHERE id = ?");
    $stmt->execute([$userId]);

    if ($user = $stmt->fetch(PDO::FETCH_ASSOC)) {
        echo json_encode(["user" => $user]);
    } else {
        http_response_code(404);
        echo json_encode(["error" => "Utilisateur non trouvé"]);
    }
} catch (Exception $e) {
    http_response_code(401);
    echo json_encode(["error" => "Token invalide"]);
}
?>