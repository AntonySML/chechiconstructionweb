<?php
    if (isset($_POST['send'])) {
        if(!empty($_POST['name']) && !empty($_POST['email'] ) && !empty($_POST['reason'])) {
            $name = $_POST['name'];
            $reason = $_POST['reason'];
            $email_user = $_POST['email'];
            $subject = "contacto web";
            $email = "marcanoantony@gmail.com";

            echo $email;

            $header = "From: contacto@chechiconstruction.com" . "\r\n";
            $header .= "Reply-To: noreply@example.com" . "\r\n" ;
            $header .= "X-Mailer: PHP/" . phpversion();
            $mail = mail($email, $subject, $reason , $header);
            if($mail) {
                echo "<h4>¡Mail enviado exitosamente!</h4>" ;
            }
        }
    }
?>