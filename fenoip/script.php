<?php

if($_POST["name"] && $_POST["email"])
{
	$name = $_POST["name"];
	$company = $_POST["company"];
	$position = $_POST["position"];
	$mail = FormChars($_POST["email"]);
	$phone = FormChars($_POST["phone"]);
	$message = $_POST["message"];
	
	$to = 'sii98@list.ru'; // кому отправляем
	$subject = 'Заявка';
	
	// текст письма
	$message = '
	<html>
	<head>
		 <title>Заявка</title>
	</head>
	<body>
	  <table style="width: 100%;  border-collapse: collapse;">
	    <tr style="color: #fff; text-align:center; vertical-align: middle; font-size: 72px; background: #00a294; height: 100px;">
	     	<td colspan="2">'.$company.'</td>
	    </tr>
	    <tr style="color: #111; font-size: 24px; background: #fff; height: 150px; width: 80%; text-align:center; vertical-align: middle; line-height: 2;">
	      <td>'.$name.'</td><td>Должность:<br>'.$position.'</td>
	    </tr>
	    <tr style="color: #fff; font-size: 20px; background: #00a294; height: 100px; width: 80%; text-align:center; vertical-align: middle; ">
	      <td >телефон:  '.$phone.'</td><td>e-mail:  '.$mail.'</td>
	    </tr>
	    <tr style="color: #111;  font-size: 20px; background: #fff; width: 80%; text-align:center; vertical-align: middle; line-height: 1;">
	      <td cellpadding="30" colspan="2"><p style="padding: 30px;">'.$message.'<p></td>
	    </tr>
	    <tr style="color: #fff; background: #00a294; height: 60px; width: 80%; text-align:center; vertical-align: middle;">
	      <td colspan="2">Fenoip</td>
	    </tr>
	  </table>
	</body>
	</html>
	';
	
	// Для отправки HTML-письма должен быть установлен заголовок Content-type
	$headers  = 'MIME-Version: 1.0'."\r\n";
	$headers .= 'Content-type: text/html; charset=UTF-8'."\r\n";
	
	// Отправляем
	mail($to, $subject, $message, $headers);
	exit(header('Location: /index.html'));
}
else 
{
	exit(header('Location: /index.html'));
}
?>