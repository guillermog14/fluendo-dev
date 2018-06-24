$(document).ready(function() {

    function validMail(email){
        var caract = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);
        if (caract.test(email) == false){
            return false;
        }else{
            return true;
        }
    }
  
     $('#email').blur(function () {
        if (validMail($(this).val())) {
            $(this).addClass('is-valid');
            $(this).removeClass('is-invalid');
            return true;
        }
        else {
            $(this).addClass('is-invalid');
            $(this).removeClass('is-valid');
            return false;        
        }
        
    });

    $('#birth').blur(function () {
        if ($(this).val() !== '') {
            $(this).addClass('is-valid');
            $(this).removeClass('is-invalid');
            return true; 
        } else {
            $(this).addClass('is-invalid');
            $(this).removeClass('is-valid');
            return false;
        }
    });
    $('#country').blur(function () {
        if ($(this).val() !== '') {
            $(this).addClass('is-valid');
            $(this).removeClass('is-invalid');
            return true; 
        } else {
            $(this).addClass('is-invalid');
            $(this).removeClass('is-valid');
            return false;
        }
    });  
    $('#sport').blur(function () {
        if ($(this).val() !== '') {
            $(this).addClass('is-valid');
            $(this).removeClass('is-invalid');
            return true; 
        } else {
            $(this).addClass('is-invalid');
            $(this).removeClass('is-valid');
            return false;
        }
    });  
    $('#role').blur(function () {
        if ($(this).val() !== '') {
            $(this).addClass('is-valid');
            $(this).removeClass('is-invalid');
            return true; 
        } else {
            $(this).addClass('is-invalid');
            $(this).removeClass('is-valid');
            return false;
        }
    });
    
});
