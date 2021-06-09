<?php
      $name = $_POST['name'];
      $visitor_email = $_POST['email'];
      $message = $_POST['message'];
  
      $email_subject = "New inquiry!";
      $email_body = "$message";
      $headers = "From: $visitor_email";
  
      $to = 'info@asukasite.art';
  
      mail($to,$email_subject,$email_body,$headers);
  
  ?>