<?php

// If form is submitted 
if (isset($_POST['submit'])) {
    // get user form inputs 
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // mailto address
    $mailTo = "nz3001@gmail.com";

    // Header we will receive in email
    $headers = "From: ".$mailFrom;
    
    // Text we will receive in email
    // $txt = "You have received an email from".$name ".\n\n".$message;
    
    // Mail Function 
    mail($mailTo, $subject, $message, $headers);
    header("Location: index.html?mailsend");
}
?>

