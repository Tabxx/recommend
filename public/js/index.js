$(document).ready(function () {
    $('#login').click(function () {
        var username = $('#username').val();
        console.log(username);
        var password = $('#pwd').val();
        console.log(password);
        $.ajax({
            url: 'http://localhost:3000/user/login',
            type: 'GET',
            data: {
                username: `${username}`,
                password: `${password}`
            },
            success(result) {
                console.log(result);
                //   document.cookie=`userid=${result.result.userid};username=${result.result.username};tag=${result.result.tag}`; 
                Cookie.setCookie('userid', result.result.id);
                alert(result.msg);
            },
            error: function (error) {
                console.log(error);
                alert('登录失败');
            }
        })
    })
    $('#register').click(function () {
        $(window).attr('location', 'register.html');
    })
})