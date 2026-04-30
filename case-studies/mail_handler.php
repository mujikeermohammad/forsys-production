<?php 
if(isset($_GET['submit'])){
    $to = $_GET['toemail']; // this is your Email address
    $from = $_GET['email']; // this is the sender's Email address
//    $from->SMTPDebug = 2;
    $first_name = $_GET['first_name'];
    $last_name = $_GET['last_name'];
    $desig = $_GET['desig'];
    $company = $_GET['company'];
    $file = $_GET['file'];
    $url = $_GET['url'];
    $subject = "Case Study request from " . $first_name . " " . $last_name;
    $subject2 = "Your Case Study download link";
//    $message = "Name: ". $first_name . " " . $last_name . "\n\n" . "Email: " . $from . "\n\n" . "Company: " . $company . "\n\n" . "Designation: " . $desig . "\n\n" . "File Requested: " . $file . "\n\n" . "Download Link: " . $url; 
    //$message = $first_name . " " . $last_name . " requested the following:" . "\n\n" . $_GET['message'] . "\n\n" . $_GET['message']; 
    $message2 = '<html xmlns="http://www.w3.org/1999/xhtml"> 
<head> 
<meta http-equiv="Pragma" content="no-cache" /> 
<meta http-equiv="Expires" content="-1" /> 
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> 
<title>Newsletter</title> 
<meta name="description" content="" /> 
<meta name="keywords" content="" /> 
<meta name="robots" content="index,follow" />
</head>
<body style="margin:0;padding:0;">
<!-- START BACKGROUND TABLE -->
<table width="100%" cellspacing="0" cellpadding="0" style="margin:0;padding:0;" bgcolor="#eee">

<tr>
<td>
	<!-- START TOP TABLE -->
<table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td align="center" style="background-color: #176094">
<!--[if (gte mso 9)|(IE)]>
            <table width="500" align="center" cellpadding="0" cellspacing="0" border="0">
                <tr>
                    <td>
            <![endif]-->
<table border="0" cellpadding="0" cellspacing="0" style="max-width: 500px" width="100%"><!-- LOGO + NAV LINKS --><tbody><tr><td align="center" style="padding: 15px 0px">
<table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td align="center">
<a href="http://www.forsysinc.com" target="_blank" tabindex="-1" rel="external"><img border="0"  style="font-family: \'proxima_nova_rgregular\', Proxima Nova, Helvetica, Arial, sans-serif;color: #ffffff;text-transform: uppercase;letter-spacing: 1px;font-size: 20px;display: block;border: 0px" width="130" src="https://forsysinc.com/forsys_new2/images/forsys-logo-gray.png"></a>
</td>
</tr></tbody></table></td>
</tr></tbody></table><!--[if (gte mso 9)|(IE)]>
                    </td>
                </tr>
            </table>
            <![endif]--></td>
</tr><tr><td align="center" style="padding: 50px 15px;background-color: #f8f9fc">
<!--[if (gte mso 9)|(IE)]>
            <table width="500" align="center" cellpadding="0" cellspacing="0" border="0">
                <tr>
                    <td>
            <![endif]-->
<table border="0" cellpadding="0" cellspacing="0" style="max-width: 500px" width="100%"><tbody><tr><td align="center">
<table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td align="center" style="padding: 30px 25px 10px 25px;margin: 0;box-shadow: 0 1px 3px rgba(0,0,0,0.08);border: 1px solid #d5dadf;border-radius: 3px 3px 3px 3px;background-color: #ffffff">
<table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td align="center" style="padding: 0 0 20px 0;font-family: \'proxima_nova_rgbold\', Proxima Nova, Helvetica, Arial, sans-serif;font-weight: bold;font-size: 20px;color: #353a3e"> The document you requested '.$file.' is ready for download.
                                            </td></tr><tr><td align="left" style="padding: 0;font-size: 16px;line-height: 25px;font-family: \'proxima_nova_rgregular\', Proxima Nova, Helvetica, Arial, sans-serif;color: #7f8c8d;padding-bottom: 30px">Hey '.$first_name.', Thank you for showing interest in our free case study. Click on the download button to download the document.<br><br>

                                        
</td>
</tr><tr><td align="center" style="padding: 0px 0 30px 0">
<table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td align="center">
<table><tbody><tr><td align="center" style="border-radius: 36px;background-color: #62be7f">
<a href="'.$url.'" style="font-size: 18px;font-family: \'proxima_nova_rgregular\', Proxima Nova, Helvetica, Arial, sans-serif;font-weight: normal;color: #ffffff;text-decoration: none;border-radius: 36px;padding: 16px 28px;border: 1px solid #62be7f;display: inline-block" target="_blank" tabindex="-1" rel="external">Download Now</a>
</td>
</tr></tbody></table></td>
</tr></tbody></table></td>
</tr></tbody></table></td>
</tr></tbody></table></td>
</tr></tbody></table><!--[if (gte mso 9)|(IE)]>
                    </td>
                </tr>
            </table>
            <![endif]--></td>
</tr><tr><td align="center" style="padding: 0 15px;background-color: #176094">
<!--[if (gte mso 9)|(IE)]>
            <table width="500" align="center" cellpadding="0" cellspacing="0" border="0">
                <tr>
                    <td>
            <![endif]-->
<table border="0" cellpadding="0" cellspacing="0" style="max-width: 500px" width="100%"><tbody><tr><td align="center" style="padding-bottom: 5px; padding-top: 5px">
<table border="0" cellpadding="0" cellspacing="0" width="500"><tbody><tr><td align="center" style="font-size: 13px;line-height: 18px;font-family: \'proxima_nova_rgregular\', Proxima Nova, Helvetica, Arial, sans-serif;color: #aaaaaa">
<a href="http://www.forsysinc.com" target="_blank" tabindex="-1" rel="external"><img border="0" style="display: block" width="40" src="https://forsysinc.com/forsys_new2/images/forsys-logo-gray.png"></a></td>
</tr></tbody></table></td>
</tr>
</tbody></table><!--[if (gte mso 9)|(IE)]><!--[if (gte mso 9)|(IE)]>
                    </td>
                </tr>
            </table>
            <![endif]--></td>
</tr></tbody></table>

	<!-- END FOOTER TABLE -->
</td>	
</tr>
</table>
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tbody>
    <tr><td align="center" style="font-size: 13px;line-height: 18px;font-family: \'proxima_nova_rgregular\', Proxima Nova, Helvetica, Arial, sans-serif;color: #aaaaaa;padding-top: 5px">You’re receiving this email because you have requested for a case study from the <a href="http://www.forsysinc.com" style="color: #aaaaaa;text-decoration: underline" target="_blank" tabindex="-1" rel="external">Forsys</a>.
</td>
</tr></table>
<!-- END BACKGROUND TABLE -->
</body>
</html>';
    
    
    $message = '<html xmlns="http://www.w3.org/1999/xhtml"> 
<head> 
<meta http-equiv="Pragma" content="no-cache" /> 
<meta http-equiv="Expires" content="-1" /> 
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> 
<title>Newsletter</title> 
<meta name="description" content="" /> 
<meta name="keywords" content="" /> 
<meta name="robots" content="index,follow" />
</head>
<body style="margin:0;padding:0;">
<!-- START BACKGROUND TABLE -->
<table width="100%" cellspacing="0" cellpadding="0" style="margin:0;padding:0;" bgcolor="#eee">

<tr>
<td>
	<!-- START TOP TABLE -->
<table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td align="center" style="background-color: #176094">
<!--[if (gte mso 9)|(IE)]>
            <table width="500" align="center" cellpadding="0" cellspacing="0" border="0">
                <tr>
                    <td>
            <![endif]-->
<table border="0" cellpadding="0" cellspacing="0" style="max-width: 500px" width="100%"><!-- LOGO + NAV LINKS --><tbody><tr><td align="center" style="padding: 15px 0px">
<table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td align="center">
<a href="http://www.forsysinc.com" target="_blank" tabindex="-1" rel="external"><img border="0"  style="font-family: \'proxima_nova_rgregular\', Proxima Nova, Helvetica, Arial, sans-serif;color: #ffffff;text-transform: uppercase;letter-spacing: 1px;font-size: 20px;display: block;border: 0px" width="130" src="https://forsysinc.com/forsys_new2/images/forsys-logo-gray.png"></a>
</td>
</tr></tbody></table></td>
</tr></tbody></table><!--[if (gte mso 9)|(IE)]>
                    </td>
                </tr>
            </table>
            <![endif]--></td>
</tr><tr><td align="center" style="padding: 50px 15px;background-color: #f8f9fc">
<!--[if (gte mso 9)|(IE)]>
            <table width="500" align="center" cellpadding="0" cellspacing="0" border="0">
                <tr>
                    <td>
            <![endif]-->
<table border="0" cellpadding="0" cellspacing="0" style="max-width: 500px" width="100%"><tbody><tr><td align="center">
<table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td align="center" style="padding: 30px 25px 10px 25px;margin: 0;box-shadow: 0 1px 3px rgba(0,0,0,0.08);border: 1px solid #d5dadf;border-radius: 3px 3px 3px 3px;background-color: #ffffff">
<table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td align="center" style="padding: 0 0 20px 0;font-family: \'proxima_nova_rgbold\', Proxima Nova, Helvetica, Arial, sans-serif;font-weight: bold;font-size: 20px;color: #353a3e">Forsys Case Study '.$file.' request
                                            </td></tr><tr><td align="left" style="padding: 0;font-size: 16px;line-height: 25px;font-family: \'proxima_nova_rgregular\', Proxima Nova, Helvetica, Arial, sans-serif;color: #7f8c8d;padding-bottom: 30px"> '.$first_name.' '.$last_name.' has requested for '.$file.' case study<br><br>

                                            '.$first_name.'\'s email id is '.$from.' and is from '.$company.' with designation '.$desig.' <br><br>
                                        
                                        Please download the file by clicking on Download now button below if you wish to see the case study.
</td>
</tr><tr><td align="center" style="padding: 0px 0 30px 0">
<table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td align="center">
<table><tbody><tr><td align="center" style="border-radius: 36px;background-color: #62be7f">
<a href="'.$url.'" style="font-size: 18px;font-family: \'proxima_nova_rgregular\', Proxima Nova, Helvetica, Arial, sans-serif;font-weight: normal;color: #ffffff;text-decoration: none;border-radius: 36px;padding: 16px 28px;border: 1px solid #62be7f;display: inline-block" target="_blank" tabindex="-1" rel="external">Download Now</a>
</td>
</tr></tbody></table></td>
</tr></tbody></table></td>
</tr></tbody></table></td>
</tr></tbody></table></td>
</tr></tbody></table><!--[if (gte mso 9)|(IE)]>
                    </td>
                </tr>
            </table>
            <![endif]--></td>
</tr><tr><td align="center" style="padding: 0 15px;background-color: #176094">
<!--[if (gte mso 9)|(IE)]>
            <table width="500" align="center" cellpadding="0" cellspacing="0" border="0">
                <tr>
                    <td>
            <![endif]-->
<table border="0" cellpadding="0" cellspacing="0" style="max-width: 500px" width="100%"><tbody><tr><td align="center" style="padding-bottom: 5px; padding-top: 5px">
<table border="0" cellpadding="0" cellspacing="0" width="500"><tbody><tr><td align="center" style="font-size: 13px;line-height: 18px;font-family: \'proxima_nova_rgregular\', Proxima Nova, Helvetica, Arial, sans-serif;color: #aaaaaa">
<a href="http://www.forsysinc.com" target="_blank" tabindex="-1" rel="external"><img border="0" style="display: block" width="40" src="https://forsysinc.com/forsys_new2/images/forsys-logo-gray.png"></a></td>
</tr></tbody></table></td>
</tr>
</tbody></table><!--[if (gte mso 9)|(IE)]><!--[if (gte mso 9)|(IE)]>
                    </td>
                </tr>
            </table>
            <![endif]--></td>
</tr></tbody></table>

	<!-- END FOOTER TABLE -->
</td>	
</tr>
</table>
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tbody>
    <tr><td align="center" style="font-size: 13px;line-height: 18px;font-family: \'proxima_nova_rgregular\', Proxima Nova, Helvetica, Arial, sans-serif;color: #aaaaaa;padding-top: 5px">You’re receiving this email because you have requested for a case study from the <a href="http://www.forsysinc.com" style="color: #aaaaaa;text-decoration: underline" target="_blank" tabindex="-1" rel="external">Forsys</a>.
</td>
</tr></table>
<!-- END BACKGROUND TABLE -->
</body>
</html>';
    
    
    
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From:" . $from;
    $headers2 = "MIME-Version: 1.0" . "\r\n";
    $headers2 .= "Content-type:text/html;charset=UTF-8" . "\r\n";    
    $headers2 .= "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    // echo "Thank you " . $first_name . ", we have received your mail, we will contact you shortly.";
    header('Location: ../file_request_response.php');
    // You cannot use header and echo together. It's one or the other.
    }
?>