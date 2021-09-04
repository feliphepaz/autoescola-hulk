<?php

if(isset($_POST['email']) && !empty($_POST['email'])) {

$name = addslashes($_POST['name']);
$email = addslashes($_POST['email']);
$tel = addslashes($_POST['tel']);
$message = addslashes($_POST['message']);

$to = "feliphe.s.paz@gmail.com";
$subject = "Contato - Hulk";
$body = "Nome: ".$name. "\r\n".
        "E-mail: ".$email. "\r\n".
        "Telefone: ".$tel. "\r\n".
        "Mensagem: ".$message;
$header = "From:".$email."\r\n".
            "Reply-To:".$email."\r\n".
            "X=Mailer:PHP/".phpversion();

if(mail($to,$subject,$body,$header)){
  echo("O e-mail foi enviado com sucesso");
}else{
  echo("O e-mail não pode ser enviado");
}
}

?>