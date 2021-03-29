<?php

$to = 'appointments@wecaremedicalcentre.com';
$subject = 'New Appointment request from wecaremedicalcentre.com';
$from = 'appointments@wecaremedicalcenter.ae';
$cc = 'marketing@wecaremedicalcentre.com';

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
$message .= '<h3>Wecare New Appointment</h3>';
$message .= '<p>Name : '.$_POST["info_form_name"].'</p>';
$message .= '<p>Phone No. : '.$_POST["info_form_phone"].'</p>';
$message .= '<p>Department : '.$_POST["info_form_dep"].'</p>';
$message .= '<p>Doctor : '.$_POST["info_form_doc"].'</p>';
$message .= '<p>Date : '.$_POST["info_form_date"].'</p>';
$message .= '<p>Time : '.$_POST["info_form_time"].'</p>';
$message .= '<p>Insurance : '.$_POST["info_form_insurance"].'</p>';
$message .= '</body></html>';

// Sending email
if(mail($to, $subject, $message, $headers)){
    header('Location: appointments-thankyou.html');;
} else{
    echo 'Unable to send email. Please try again.';
}


?>
