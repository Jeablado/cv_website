<?php
//send e-mail with form
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = !empty($_POST["nom"]) ? htmlspecialchars($_POST["nom"]) : '';
    $email = !empty($_POST["email"]) ? filter_var($_POST["email"], FILTER_VALIDATE_EMAIL) : '';
    $message = !empty($_POST["message"]) ? htmlspecialchars($_POST["message"]) : '';

    if ($nom && $email && $message) {
        $to = "contact@lobsiger.dev";
        $subject = "Nouvelle demande de contact";
        $headers = "From: " . $email . "\r\n";
        $headers .= "Reply-To: " . $email . "\r\n";
        $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

        $message_body = "Nom: " . $nom . "<br>";
        $message_body .= "Email: " . $email . "<br>";
        $message_body .= "Message: " . $message;

        if (mail($to, $subject, $message_body, $headers)) {
            header("Location: confirmation.html");
            exit;
        } else {
            echo "Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer plus tard.";
        }
    } else {
        echo "Veuillez remplir tous les champs du formulaire correctement.";
    }
}
?>