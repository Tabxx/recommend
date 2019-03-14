$(document).ready(function(){
    $('body').on('click','#login',function() {
        var username = $('#username').val();
       // console.log(username);
        var password = $('#pwd').val();
        //console.log(password);
        $.ajax({
            url: 'http://localhost:3000/user/login',
            type: 'GET',
            data: {
                username: `${username}`,
                password: `${password}`
            },
            success(result) {
                console.log(result);
                alert(result.msg);
                if(result.code==0){
                Cookie.setCookie('userid', result.result.id);
                Cookie.setCookie('username',result.result.username);
                Cookie.setCookie('tag', result.result.tag);
                $(window).attr('location','index.html');
            }
                //$('#log').html(`欢迎，${uname}`);
            },
            error: function(error) {
                console.log(error);
                alert('登录失败');
            }
        })
    })
    $('#register').click(function() {
        $(window).attr('location', 'register.html');
    })
})