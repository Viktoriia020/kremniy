<?php 

require_once('../phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user-name'];
$email = $_POST['user-email'];
$message = $_POST['user-message'];


$mail->isSMTP();
$mail->Host = 'ssl://smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'profile.test0000@gmail.com';
$mail->Password = 'Welcome2021@';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;

$mail->setFrom('profile.test0000@gmail.com');
$mail->addAddress('profile.test0000@gmail.com');

$mail->isHTML(true);

$mail->Subject = 'Контактная информация пользователя';
$mail->Body    = '' .$name . ' оставил(-а) заявку, комментарий: ' .$message. '<br>Почта этого пользователя: ' .$email;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: ../index.html');
}
?>