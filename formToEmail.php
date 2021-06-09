<?php
    $name = $_POST["name"];
    $visitor_email = $_POST["email"];
    $message = $_POST["message"];
  
    $to = 'info@asukasite.art';

    $email_subject = "New inquiry!";
    $email_body = "$message";

    $headers = "MIME-Version: 1.0" . "\n";
    $headers .= "Content-type:text/html;charset=iso-8859-1" . "\n";
    $headers .= "From: $visitor_email" . "\n";
  

    mail($to,$email_subject,$email_body,$headers);
  
  ?>