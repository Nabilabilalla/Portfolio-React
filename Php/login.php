<?php
require_once 'vendor/autoload.php'; // Charger la bibliothèque JWT
use \Firebase\JWT\JWT;

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(204);
    exit;
}

$raw = file_get_contents("php://input");
$data = json_decode($raw, true);

if (!isset($data["email"], $data["password"])) {
    echo json_encode(["error" => "Champs manquants."]);
    exit;
}

$email = trim($data["email"]);
$password = $data["password"]; // Le mot de passe fourni par l'utilisateur

// Connexion à la base de données
$host = "localhost";
$db = "user_auth";
$user = "nabila"; 
$pass = "nabila1997";  

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db;charset=utf8", $user, $pass);
} catch (PDOException $e) {
    echo json_encode(["error" => "Connexion échouée: " . $e->getMessage()]);
    exit;
}

// Vérifier si l'email existe
$stmt = $pdo->prepare("SELECT id, name, email, password FROM users WHERE email = ?");
$stmt->execute([$email]);

$user = $stmt->fetch(PDO::FETCH_ASSOC);

if (!$user) {
    echo json_encode(["error" => "Email ou mot de passe incorrect."]);
    exit;
}

// Vérifier le mot de passe
if (!password_verify($password, $user["password"])) {
    echo json_encode(["error" => "Email ou mot de passe incorrect."]);
    exit;
}

// Générer un JWT
$issuedAt = time();
$expirationTime = $issuedAt + 3600;  // 1 heure
$payload = [
    "iat" => $issuedAt,
    "exp" => $expirationTime,
    "email" => $user["email"],
    "name" => $user["name"],
    "iat" => time(),
    "exp" => time() + (60 * 60 * 24) // Expire dans 24h
];

// Clé secrète pour la signature
$secretKey = "votre_clé_secrète";

// Création du JWT
$jwt = JWT::encode($payload, $secretKey, 'HS256');

echo json_encode([
    "message" => "Connexion réussie !",
    "token" => $jwt,
    // "user" => [
    //     "name" => $user["name"],
    //     "email" => $user["email"]
    // ]
]);
?>