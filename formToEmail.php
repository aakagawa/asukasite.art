<?php
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];
  
    $to = 'info@asukasite.art';
    $headers = 'From: '.$name.'<'.$visitor_email.'>'; 
    $email_subject = "New inquiry!";
    $email_body = "$message";
  

    mail($to,$email_subject,$email_body,$headers);
  
  ?>