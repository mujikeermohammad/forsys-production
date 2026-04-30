<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Forsys | Strength in Process</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- bootstrap Css -->
<link rel='stylesheet prefetch' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css'>
<!-- fonts -->
<link href="https://fonts.googleapis.com/css?family=Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">
<link href="css/fonts/fonts.css" rel="stylesheet">
<!-- Custom Styles -->
<link href="css/styles.css" rel="stylesheet">
       <style type="text/css">
    /*
/* Created by Filipe Pina
 * Specific styles of signin, register, component
 */
/*
 * General styles
 */
           
           .req4demo-h2 {    
               font-size: 24px;
    line-height: 35px;
    color: #009edf;
    font-weight: 100;
           }
           
.req4demo-h1 {
font-family: 'Nunito', sans-serif;
    color: #fff;
    font-size: 52px;
    line-height: 70px;
}        
#playground-container {
    height: 500px;
    overflow: hidden !important;
    -webkit-overflow-scrolling: touch;
}

.main{
 	margin:50px 15px;
}

h1.title { 
	font-size: 50px;
	font-family: 'Passion One', cursive; 
	font-weight: 400; 
}

hr{
	width: 10%;
	color: #fff;
}

.form-group{
	margin-bottom: 15px;
}

label{
	margin-bottom: 15px;
}

input,
input::-webkit-input-placeholder {
    font-size: 11px;
    padding-top: 3px;
}

.main-login{
 	background-color: #fff;
    /* shadows and rounded borders */
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    border-radius: 2px;
    -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);

}
.form-control {
    height: auto!important;
padding: 8px 12px !important;
}
.input-group {
    -webkit-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.21)!important;
    -moz-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.21)!important;
    box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.21)!important;
}
#filerequest_button {
    border: 1px solid #ccc;
    margin-top: 28px;
    padding: 6px 12px;
    color: #666;
    text-shadow: 0 1px #fff;
    cursor: pointer;
    -moz-border-radius: 3px 3px;
    -webkit-border-radius: 3px 3px;
    border-radius: 3px 3px;
    -moz-box-shadow: 0 1px #fff inset, 0 1px #ddd;
    -webkit-box-shadow: 0 1px #fff inset, 0 1px #ddd;
    box-shadow: 0 1px #fff inset, 0 1px #ddd;
    background: #f5f5f5;
    background: -moz-linear-gradient(top, #f5f5f5 0%, #eeeeee 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #f5f5f5), color-stop(100%, #eeeeee));
    background: -webkit-linear-gradient(top, #f5f5f5 0%, #eeeeee 100%);
    background: -o-linear-gradient(top, #f5f5f5 0%, #eeeeee 100%);
    background: -ms-linear-gradient(top, #f5f5f5 0%, #eeeeee 100%);
    background: linear-gradient(top, #f5f5f5 0%, #eeeeee 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f5f5f5', endColorstr='#eeeeee', GradientType=0);
}
.main-center{
 	margin-top: 30px;
 	float: right;
    border-radius: 5px;
 	max-width: 450px;
    padding: 30px 40px;
	background:#009edf;
	    color: #FFF;
    text-shadow: none;
	-webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.31);
-moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.31);
box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.31);

}
span.input-group-addon i {
    color: #009edf;
    font-size: 17px;
}

.login-button{
	margin-top: 5px;
}

.login-register{
	font-size: 11px;
	text-align: center;
}
           
           .svg-inline--fa {
    overflow: visible;
    color: #009edf;
               height: 15px;
}

    </style>
</head>
<body>
<?php
//		$current = ''; 
//	$currentb = ''; 
//include_once("header.php");
?>
<main role="main" class="leadership">

<!--
    <div class="leadership-p">
        <h2 class="parallax-h2">REQUEST FOR A DEMO</h2>
        
    </div>	
-->
<section class="calltoaction" style="background: #fff; margin:0 auto">
    <div class="container">
			<div class="row ">

                <div class="col-lg-12">
				<div class="main-login main-center" style="float: left">
					<form id="file_request" class="" method="get" action="file_request_mail_handlers/mail_handler.php">
						<div class="form-group">
							<label for="first_name" class="cols-sm-2 control-label">First Name</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
									<input type="text" required class="form-control" name="first_name" id="first_name" placeholder="Enter your First Name">
								</div>
							</div>
						</div>
                        
						<div class="form-group">
							<label for="last_name" class="cols-sm-2 control-label">Last Name</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
									<input type="text" required  class="form-control" name="last_name" id="last_name" placeholder="Enter your Last Name">
								</div>
							</div>
						</div>                        

						<div class="form-group">
							<label for="email" class="cols-sm-2 control-label">Your Email</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-envelope fa" aria-hidden="true"></i></span>
									<input type="text" required class="form-control" name="email" id="email" placeholder="Enter your Email">
								</div>
							</div>
						</div>
                        
						<div class="form-group" style="display: none">
							<label for="toemail" class="cols-sm-2 control-label">To Email</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-envelope fa" aria-hidden="true"></i></span>
									<input type="text" required class="form-control" name="toemail" id="toemail" value="iammuji@gmail.com" placeholder="Enter your to Email">
								</div>
							</div>
						</div>                        

						<div class="form-group">
							<label for="company" class="cols-sm-2 control-label">Company</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-users fa" aria-hidden="true"></i></span>
									<input type="text" required class="form-control" name="company" id="company" placeholder="Enter your Copmany Name">
								</div>
							</div>
						</div>

						<div class="form-group">
							<label for="desig" class="cols-sm-2 control-label">Designation</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
									<input type="text" required class="form-control" name="desig" id="desig" placeholder="Enter your Designation">
								</div>
							</div>
						</div>

						<div class="form-group">
							<label for="file" class="cols-sm-2 control-label">File Requested</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
									<input type="text" class="form-control" name="file" id="file" placeholder="File Requested" style="pointer-events: none;">
								</div>
							</div>
						</div>
                        
						<div class="form-group" style="display: none">
							<label for="file" class="cols-sm-2 control-label">Download Link</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
									<input type="text" class="form-control" name="url" id="url" placeholder="Download Link">
								</div>
							</div>
						</div>                        

						<div class="form-group ">
                            <button type="submit" name="submit" id="filerequest_button" class="btn btn-primary btn-lg btn-block login-button">Get Case Study</button>
						</div>
						
					</form>
				</div>
                    </div>
			</div>
		</div>
    </section>
        
</main>

<!-- Javascript Files -->
<script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script> 
<script src='http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js'></script> 
<script src='js/index.js'></script>
	<script type="text/javascript">
function querySt(ji) {

    hu = window.location.search.substring(1);
    gy = hu.split("&");

    for (i=0;i<gy.length;i++) {
        ft = gy[i].split("=");
        if (ft[0] == ji) {
            return ft[1];
        }
    }
}
/*var firstname = querySt("first_name");
var lastname = querySt("last_name");*/
//var email = querySt("email");
var toemail = querySt("toemail");
//var company = querySt("company");
//var desig = querySt("desig");
var file = querySt("file");
var url = querySt("url");
//        document.getElementById('first_name').value = firstname;
//        document.getElementById('last_name').value = lastname;
//        document.getElementById('email').value = email;
          document.getElementById('toemail').value = toemail;
/*        document.getElementById('company').value = company;
        document.getElementById('desig').value = desig;*/
        document.getElementById('file').value = file;
        document.getElementById('url').value = url;
$(function() {
    $('#file').change(function(){
        $('#otherdiv')[ ($("option[value='others']").is(":checked"))? "show" : "hide" ]();  
    });
});
	</script>
<?php
//include_once("footer.html");
?>
