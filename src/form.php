<?php
// Si le formulaire a été soumis
    if (isset($_POST["message"])) {
        $message = "Ce message vous a été envoyé via la page contact de votre portfolio monsite.fr
        Nom : " . $_POST["name"] . "
        Email : " . $_POST["email"] . "
        Message : " . $_POST["message"];
        $retour = mail("warrengers.dev@gmail.com", $_POST["subject"], $message, "From:contact@monsite.fr" . "\r\n" . "Reply-to:" . $_POST["email"]);
    }