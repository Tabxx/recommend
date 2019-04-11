$(document).ready(function(){
    $('body').on('click','#login',function() {
        var username = $('#username').val();
       // console.log(username);
        var password = $('#pwd').val();
        //console.log(password);
        Login(username,password);
    })
    $('#register').click(function() {
        $(window).attr('location', 'register.html');
    })
})