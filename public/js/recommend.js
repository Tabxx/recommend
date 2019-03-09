$(document).ready(function(){
    var userid=Cookie.getCookie('userid');
    $('#demo').modal('show');
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
    $('body').on('click','[data-dismiss="modal"]',function(){
        var s=$('.cc');
        var arr=[];
        for(var i of s){
           arr.push($(i).attr('data-tid'));
        }
        var tids=arr.join(',');
        
        $.ajax({
            url:'/user/setTag',
            type:'post',
            data:{
                userid:userid,
                tid:tids
            },
            success:function(result){
                console.log(result);
            },error:function(error){
                console.log(error);
                alert('失败');
            }
        }).then(
           function(){
            $.ajax({
                url:`/list/recommend?userid=${userid}`,
                type:'get',
                dataType:'json',
                success:function(result){
                   //console.log(result.result.length);
                   var data=result.result;
                   var l=data.length;
                   console.log(data[l-1]);
                   
                   
                },error:function(error){
                    console.log(error);
                }
             })
           } 
        )
    })

})