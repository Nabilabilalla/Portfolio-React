<?php
require 'vendor/autoload.php'; // Charge le package JWT

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");

$secretKey = "votre_clé_secrète";  // Change cette clé pour quelque chose de plus sécurisé
$issuer = "http://localhost";      // L'URL de ton serveur (ou ton domaine)
$expiration = time() + 3600;      // Le JWT expirera après 1 heure (3600 secondes)

// Gérer la requête preflight (CORS)
if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(204);
    exit;
}

// Lecture des données JSON envoyées par le frontend
$raw = file_get_contents("php://input");
$data = json_decode($raw, true);

// Vérifier que tous les champs nécessaires sont présents
if (!isset($data["name"], $data["email"], $data["password"])) {
    echo json_encode(["error" => "Champs manquants."]);
    exit;
}

$name = trim($data["name"]);
$email = trim($data["email"]);
$password = password_hash($data["password"], PASSWORD_DEFAULT); // Hachage du mot de passe

// Connexion à la base de données
$host = "localhost";
$db = "user_auth";  // Nom de la base de données
$user = "nabila";   // Identifiants de la base
$pass = "nabila1997";

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db;charset=utf8", $user, $pass);
} catch (PDOException $e) {
    echo json_encode(["error" => "Connexion échouée: " . $e->getMessage()]);
    exit;
}

// Vérification si l'email existe déjà dans la base
$stmt = $pdo->prepare("SELECT id FROM users WHERE email = ?");
$stmt->execute([$email]);

if ($stmt->rowCount() > 0) {
    echo json_encode(["error" => "Email déjà utilisé."]);
    exit;
}

// Insertion du nouvel utilisateur dans la base
$stmt = $pdo->prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)");
$ok = $stmt->execute([$name, $email, $password]);

if ($ok) {
    // Récupérer l'ID de l'utilisateur inséré
    $userId = $pdo->lastInsertId();

    // Créer le JWT pour cet utilisateur
    $payload = [
        "iss" => $issuer,    // Le serveur qui émet le token
        "iat" => time(),     // La date de génération du token
        "exp" => $expiration, // La date d'expiration du token
        "sub" => $userId,    // L'ID de l'utilisateur dans la base
        "email" => $email,   // L'email de l'utilisateur
        "name" => $name      // Le nom de l'utilisateur
    ];

    // Générer le JWT
    $jwt = JWT::encode($payload, $secretKey, 'HS256');

    // Retourner la réponse avec le message et le token JWT
    echo json_encode([
        "message" => "Inscription réussie !",
        "token" => $jwt
    ]);
} else {
    echo json_encode(["error" => "Erreur d’enregistrement."]);
}

exit;
?>

