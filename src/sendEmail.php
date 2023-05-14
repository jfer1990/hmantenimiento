<?php

/**
 * This example shows settings to use when sending via Google's Gmail servers.
 * This uses traditional id & password authentication - look at the gmail_xoauth.phps
 * example to see how to use XOAUTH2.
 * The IMAP section shows how to save this message to the 'Sent Mail' folder using IMAP commands.
 */

//Import PHPMailer classes into the global namespace
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';


// $email = $_POST['email'];
// $name  = $_POST['name'];
// $lastname  = $_POST['lastname'];
// $tel = $_POST['tel'];
// $location = $_POST['location'];
// $company = $_POST['company'];
// $message = $_POST['message']; 
// $cardInterest = $_POST['card-interest']; // Retrieve the value of the hidden input field


//Create a new PHPMailer instance
$mail = new PHPMailer();

//Tell PHPMailer to use SMTP
$mail->isSMTP();

//Enable SMTP debugging
//SMTP::DEBUG_OFF = off (for production use)
//SMTP::DEBUG_CLIENT = client messages
//SMTP::DEBUG_SERVER = client and server messages
$mail->SMTPDebug = 2;

//Set the hostname of the mail server
$mail->Host = 'smtp.hostinger.com';
//Use `$mail->Host = gethostbyname('smtp.gmail.com');`
//if your network does not support SMTP over IPv6,
//though this may cause issues with TLS

//Set the SMTP port number:
// - 465 for SMTP with implicit TLS, a.k.a. RFC8314 SMTPS or
// - 587 for SMTP+STARTTLS
$mail->Port = 587;

//Set the encryption mechanism to use:
// - SMTPS (implicit TLS on port 465) or
// - STARTTLS (explicit TLS on port 587)
// $mail->SMTPSecure = 'ssl';

//Whether to use SMTP authentication
$mail->SMTPAuth = true;

//Username to use for SMTP authentication - use full email address for gmail
$mail->Username = 'hola@grupohmantenimiento.com'; 

//Password to use for SMTP authentication
$mail->Password = 'hJSI1*Ubh@d0';

//Set who the message is to be sent from
//Note that with gmail you can only use your account address (same as `Username`)
//or predefined aliases that you have configured within your account.
//Do not use user-submitted addresses in here
$mail->setFrom('hola@grupohmantenimiento.com', $name);

//Set an alternative reply-to address
//This is a good place to put user-submitted addresses
$mail->addReplyTo($email, $name);

//Set who the message is to be sent to
$mail->addAddress('hola@grupohmantenimiento.com', $name);
//Set if is html format
$mail->IsHTML(true);

$mail->CharSet = 'UTF-8';


//Set the subject line
$mail->Subject = 'Contacto desde formulario';


// Validate required fields
if (empty($_POST['nombre-completo']) || empty($_POST['email']) || empty($_POST['telefono'])) {
    http_response_code(400);
    echo 'Missing required fields (nombre-completo or email or telefono)';
    exit();
}

//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
// $mail->msgHTML(file_get_contents('contents.html'), __DIR__);

//Replace the plain text body with one created manually
$mail->Body = 'Datos del contacto:<br>Nombre: '.$_POST['nombre-completo'].'<br>Teléfono: '.$_POST['telefono'].'<br>Email: '.$_POST['email'].'<br>Mensaje: '.$_POST['mensaje'].'<br><br>El usuario se interesó por la sección de: '.$_POST['card-interest'].'<br>Servicio: '.$_POST['servicio'].'<br>Interés: '.$_POST['interes'];

//Attach an image file
// $mail->addAttachment('images/phpmailer_mini.png');

//send the message, check for errors
if (!$mail->send()) {
    echo 'Mailer Error: ' . $mail->ErrorInfo;
    http_response_code(500); // Internal Server Error
    exit();
} else {
    echo 'Message sent!';
    http_response_code(200); // OK
    exit();
}

//Section 2: IMAP
//IMAP commands requires the PHP IMAP Extension, found at: https://php.net/manual/en/imap.setup.php
//Function to call which uses the PHP imap_*() functions to save messages: https://php.net/manual/en/book.imap.php
//You can use imap_getmailboxes($imapStream, '/imap/ssl', '*' ) to get a list of available folders or labels, this can
//be useful if you are trying to get this working on a non-Gmail IMAP server.




// function save_mail($mail)
// {
//     //You can change 'Sent Mail' to any other folder or tag
//     $path = '{imap.gmail.com:993/imap/ssl}[Gmail]/Sent Mail';

//     //Tell your server to open an IMAP connection using the same username and password as you used for SMTP
//     $imapStream = imap_open($path, $mail->Username, $mail->Password);

//     $result = imap_append($imapStream, $path, $mail->getSentMIMEMessage());
//     imap_close($imapStream);

//     return $result;
// }
