$(document).ready(function () { 
    $('#login').click(function(){
        var username=$('#username').val();
        console.log(username);
        var password=$('#pwd').val();
        console.log(password);
        $.ajax({
            url:'http://localhost:3000/user/login',
            type:'GET',
            data: {
                username:`${username}`,
                password:`${password}`
            },
            success(result){
              console.log(result);
              document.cookie=`userid=${result.userid};username=${result.username};password=${result.password};tag=${result.tag}`;
              alert(result.msg);
            },error:function(error){
                console.log(error);
                alert('登录失败');
            }
        })
    })
    $('#register').click(function(){
       $(window).attr('location','register.html');
    })
})

   