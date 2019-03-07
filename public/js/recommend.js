$(document).ready(function(){
    $("body").on("click","#label",function(){
        
    })
    $("body").on("click",".my_btn",function(e){
        e.stopPropagation();
        if($(this).hasClass('cc')){
            $(this).removeClass("cc");
        }else{
            $(this).addClass('cc');
        }   
    })
    $("ul li").hover(function(){
        $(this).addClass('hs');
        $(this).prevAll().addClass('hs');
    },function(){
        $(this).removeClass('hs');
        $(this).prevAll().removeClass('hs');
    })

    $("ul li").click(function () {
        $(this).addClass('cs');
        $(this).prevAll().addClass('cs');
        $(this).nextAll().removeClass('cs');
    })

})