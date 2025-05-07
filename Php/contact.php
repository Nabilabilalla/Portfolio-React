<!-- <?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // à sécuriser en prod
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

$data = json_decode(file_get_contents("php://input"), true);

$username = htmlspecialchars($data['username'] ?? '');
$name = htmlspecialchars($data['name'] ?? '');
$mobile = htmlspecialchars($data['mobile'] ?? '');
$email = htmlspecialchars($data['email'] ?? '');
$message = htmlspecialchars($data['message'] ?? '');

if ($name && $email && $message) {
    $to = "nabila.tantast@gmail.com";
    $subject = "Nouveau message de contact";
    $body = "Prenom: $username\nNom: $name\nTéléphone: $mobile\nEmail: $email\nnMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message envoyé avec succès.";
    } else {
        echo "Erreur lors de l'envoi du message.";
    }
} else {
    echo "Champs invalides.";
}
?> -->
