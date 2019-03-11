$(document).ready(function() {
    $('#login').click(function() {
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
                Cookie.setCookie('userid', result.result.id);
                Cookie.setCookie('tag', result.result.tag);
                alert(result.msg);
                $('#modal').modal('hide')
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