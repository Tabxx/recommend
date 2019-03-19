//var screen=window.screen.width;
 var width=$(window).width();
$('#banner2').css('left',+width+'px');
//console.log($('#banner2').css('left'));
$(document).ready(function() { 
    $('#top1').load('header.html');
    $('#footer').load('footer.html');
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
})
function ban(){
   var left=parseFloat($('#banner').css('margin-left'));
   //console.log(left);
   if(left==0){
       left-=width;
    }else if(left==-width){
        left+=width;
    }   
   //console.log(left);
   $('#banner').css('margin-left',left);
}