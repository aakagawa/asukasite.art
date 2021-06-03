<?php
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['inquiry'];

    if(empty($name)||empty($visitor_email)||empty($message)) {
        echo "Error: all fields are required!";
        exit;
    }

    $email_from = 'info@asukasite.art';
    $email_subject = 'New inquiry!';
    $email_body = '$message';

    $to = 'info@asukasite.art';
    $headers = 'from: $email_from';
    $headers .= 'Reply-To: $visitor_email';

    mail($to,$email_subject,$email_body,$headers);

?>

