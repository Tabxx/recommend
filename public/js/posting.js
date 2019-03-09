
$(document).ready(function () {
    var E = window.wangEditor;
    var editor = new E('#text_a');
    editor.create();
    $('body').on('click','#sub',function(){
        var Title=$('#title').val();
        var Contant=$('.w-e-text>p').html();
        //console.log(Contant);
        var Userid= Cookie.getCookie('userid');
        //console.log(userid);
       $.ajax({
            url:'bbs/post',
            type:'post',
            data:{
                title:`${Title}`,
                intro:`${Contant}`,
                userid:`${Userid}`
            },
            success:function(result){
                console.log(result);
                if(result.msg=='success'){
                    alert('成功');
                }
            },error:function(error){
                console.log(error);
                alert("失败");
            }
        })
    })
})