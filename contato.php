<?php
require("PHPMailer-master/src/PHPMailer.php");
require("PHPMailer-master/src/SMTP.php");

if(isset($_POST['email']) && !empty($_POST['email'])) {

$name = isset($_POST['name']) ? $_POST['name'] : '';
$email = isset($_POST['email']) ? $_POST['email'] : '';
$tel = isset($_POST['tel']) ? $_POST['tel'] : '';
$message = isset($_POST['message']) ? $_POST['message'] : '';

 $mail = new PHPMailer\PHPMailer\PHPMailer();
 $mail->IsSMTP();
 $mail->SMTPDebug = 1;
 $mail->SMTPAuth = true;
 $mail->SMTPSecure = 'ssl';
 $mail->Host = "smtp.titan.email";
 $mail->Port = 465;
 $mail->IsHTML(true);
 $mail->Username = "contato@autoescolahulk.com.br";
 $mail->Password = "hulk019@123";
 $mail->SetFrom("contato@autoescolahulk.com.br", $name);
 $mail->Subject = "Contato - Hulk";
 $mail->Body = "
 Nome: $name
 <br>
 E-mail: $email
 <br>
 Telefone: $tel
 <br>
 Mensagem: $message
 <br>
 ";
 $mail->addAddress("contato@autoescolahulk.com.br");
 $mail->ClearReplyTos();
 $mail->addReplyTo($email, $name);
 $mail->CharSet = 'UTF-8';
  if(!$mail->Send()) {
      echo "Mailer Error: " . $mail->ErrorInfo;
  } else {
      echo "Mensagem enviada com sucesso";
  }
}
?>