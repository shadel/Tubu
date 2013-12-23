<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Welcome to CodeIgniter</title>

    <link type="text/css" href="<?php echo base_url();?>/css/jquery-ui-1.10.3.custom.min.css" rel="stylesheet" />

    <script src="<?php echo base_url();?>js/lib/jquery/jquery-1.10.2.min.js"></script>
    <script src="<?php echo base_url();?>js/lib/jquery/jquery-migrate-1.2.1.min.js"></script>
    <script src="<?php echo base_url();?>js/lib/jquery/jquery-ui-1.10.3.custom.min.js"></script>
    <script>

    $(document).ready(function() {
      $('#signup').click(function(){

        $("#signup_form").dialog({
    autoOpen: true,
    modal: false,
    draggable: false,
    height: "auto",
    width: 400,
position: {
  at: "center top"
},
    resizable: false,
    open: function() {
        
    }
});

        });

        $('#signin').click(function(){
            $("#signin_form").dialog({
    autoOpen: true,
    modal: false,
    draggable: false,
    height: "auto",
    width: 400,
position: {
  at: "center top"
},
    resizable: false,
    open: function() {
        
    }
});
    

        });

$('#nomal').click(function(){
    
            $('#signup_ct').show();

        });


$('#facbook').click(function(){
    





$.ajax({
              type: "GET",
              url: 'http://localhost/storymarketplace/api/index.php/api/users/facebook',
              success: function(data){
                 if(data.status == 'failed'){
                
                }else {


            }


              },
error:function(){
            alert("failure");
        },
              dataType: 'json'
            });




            


        });


$('#submit_signup').click(function(){

$.ajax({
              type: "POST",
              url: 'http://localhost/storymarketplace/api/index.php/api/users/user',
              data: {'username': $('#username').val(),'password': $('#password').val(), 'confirm_password': $('#confirm_password').val(),'email': $('#email').val()},
              success: function(data){
                 if(data.status == 'failed'){
                    if(data.errors){
                    var errors = '';
                    $.each(data.errors.all, function(key,val) {
                            errors += val;
                      })
                    $('#signup_ct .errors').html(errors);
                }else {
$('#signup_ct .errors').html('');
}

}else {
$('#signup_ct .errors').html('');
}
              },
error:function(){
            alert("failure");
        },
              dataType: 'json'
            });
            
            
            
            
            
            
            
            $('#submit_signin').click(function(){

$.ajax({
              type: "POST",
              url: 'http://localhost/storymarketplace/api/index.php/api/users/login',
              data: {'username': $('#username_lg').val(),'password': $('#password_lg').val()},
              success: function(data){
                 if(data.status == 'failed'){
                    if(data.errors){
                    var errors = '';
                    $.each(data.errors.all, function(key,val) {
                            errors += val;
                      })
                    $('#signin_ct .errors').html(errors);
                }else {
$('#signin_ct .errors').html('');
}

}else {
$('#signup_ct .errors').html('');
}
              },
error:function(){
            alert("failure");
        },
              dataType: 'json'
            });








        });








        });


    });





    </script>

</head>
<body>

<div id="container">
<span id="signup">sign up</span> | <span id="signin">sign in</span>
</div>
<div id="signup_form" style="display:none">
<span id="nomal">Nomal</span> | <span id="facbook">Facebook</span>

<div id="signup_ct" style="display:none;">
<div class="errors" style="color:red; font-size: 11px;">

</div>
<div style="width: 150px; float:left;">user :</div> <div><input type="text" name="username" id="username" /></div> 
<div style="width: 150px; float:left;">password :</div><div><input type="password" name="password" id="password" /></div> 
<div style="width: 150px; float:left;">re-password :</div> <div><input type="password" name="confirm_password" id="confirm_password" /></div> 
<div style="width: 150px; float:left;">email :</div><div><input type="text" name="email" id="email" /></div> 


<button id="submit_signup">OK</button>
</div>



 
</div>


<div id="signin_form" style="display:none;">
<div class="errors" style="color:red; font-size: 11px;">

</div>
<div style="width: 150px; float:left;">user :</div> <div><input type="text" name="username_lg" id="username_lg" /></div> 
<div style="width: 150px; float:left;">password :</div><div><input type="password" name="password_lg" id="password_lg" /></div> 

<button id="submit_signin">OK</button>
</div> 


</body>
</html>