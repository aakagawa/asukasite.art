<?php
    function IsInjected($str) {
        $injections = array('(\n+)',
               '(\r+)',
               '(\t+)',
               '(%0A+)',
               '(%0D+)',
               '(%08+)',
               '(%09+)'
               );
                   
        $inject = join('|', $injections);
        $inject = "/$inject/i";
        
        if(preg_match($inject,$str))
        {
          return true;
        }
        else
        {
          return false;
        }
    }
    
    if(IsInjected($visitor_email)){
    echo "Bad email value!";
    exit;
    }

    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

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

