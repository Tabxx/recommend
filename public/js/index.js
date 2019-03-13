//var screen=window.screen.width;
 var width=$(window).width();
$('#banner2').css('left',+width+'px');
//console.log($('#banner2').css('left'));
$(document).ready(function() { 
    $('#top1').load('header.html');
    $('.top').css('overflow','hidden');
    setInterval(ban,8000);
    $('body').on('click','#left',function(){
       $('#banner').css('margin-left','0');
    })
    $('body').on('click','#right',function(){
       $('#banner').css('margin-left',-width+'px');
    })
    var uname=Cookie.getCookie('username');
    $(".navbar ul li:last-child").hover(function (){  
        $(".dropdown").show();  
    },function (){  
        $(".dropdown").hide();  
    });  
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
                console.log(result)
                Cookie.setCookie('userid', result.result.id);
                Cookie.setCookie('username',result.result.username);
                Cookie.setCookie('tag', result.result.tag);
                alert(result.msg);
                $('#modal').modal('hide');
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
    $('body').on('click','#cancel',function(){
        Cookie.setCookie('userid', null); 
        Cookie.setCookie('username', null); 
        Cookie.setCookie('tag', null); 
        //$('#log').html(`登录`);
    })
})
function ban(){
   var left=parseFloat($('#banner').css('margin-left'));
   console.log(left);
   if(left==0){
       left-=width;
    }else if(left==-width){
        left+=width;
    }   
   //console.log(left);
   $('#banner').css('margin-left',left);
}