<?php

$to = 'kanil.arun1@gmail.com';
$subject = 'Mail alert from wecaremedicalcentre.com';
$from = 'hello@untanglestrategy.com';
$cc = "arunkanil1994@gmail.com";

// To send HTML mail, the Content-type header must be set
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

// Create email headers
$headers .= 'From: '.$from."\r\n".
    'Reply-To: '.$from."\r\n" ;

	if ($cc!="") {
		$headers .= 	'CC: '.$cc."\r\n" ;
	}

// Compose a simple HTML email message
$message = '<html><body>';
$message .= '<h3>wecare Contact</h3>';
$message .= '<p>Name : '.$_POST["contact_name"].'</p>';
$message .= '<p>Email : '.$_POST["contact_email"].'</p>';
$message .= '<p>Phone No. : '.$_POST["contact_number"].'</p>';
$message .= '<p>Contact Type : '.$_POST["contact_type"].'</p>';

$message .= '<p>Subject : '.$_POST["contact_subject"].'</p>';
$message .= '<p>Comments : '.$_POST["contact_message"].'</p>';

$message .= '</body></html>';

// Sending email
if(mail($to, $subject, $message, $headers)){
    echo 200;
} else{
    echo 'Unable to send email. Please try again.';
}


?>
