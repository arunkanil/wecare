<?php

$to = 'kanil.arun1@gmail.com';
$subject = 'Mail alert from wecaremedicalcentre.com';
$from = 'hello@untanglestrategy.com';
$cc = "arunkanil1994@gmail.com";

$requirementArr = $_POST['requirement'];
$requirement = "";
if ($requirementArr) {
	$requirement = implode(", ",$requirementArr);
}

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
$message .= '<h3>untanglestrategy Contact</h3>';
$message .= '<p>Name : '.$_POST["name"].'</p>';
$message .= '<p>Email : '.$_POST["email"].'</p>';
$message .= '<p>Job Title : '.$_POST["job"].'</p>';
$message .= '<p>Phone No. : '.$_POST["phone_no"].'</p>';
$message .= '<p>Company Name : '.$_POST["cname"].'</p>';

$message .= '<p>Website : '.$_POST["website"].'</p>';
$message .= '<p>Requirement : '.$requirement.'</p>';
$message .= '<p>Budget : '.$_POST["budget"].'</p>';
$message .= '<p>Comments : '.$_POST["comments"].'</p>';

$message .= '</body></html>';

// Sending email
if(mail($to, $subject, $message, $headers)){
    echo 200;
} else{
    echo 'Unable to send email. Please try again.';
}


?>
