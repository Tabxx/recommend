$('#nav').load('header.html');
$(document).ready(function () {
    var userid = Cookie.getCookie('userid');
    var tag=Cookie.getCookie('tag');
    console.log(tag);
    if (tag=='null'||tag=='') {
        $('#demo').modal('show');
    } else {
        recommend();
    }
    //标签点击改变样式
    $("body").on("click", ".my_btn", function (e) {
        e.stopPropagation();
        if ($(this).hasClass('btn_choosed')) {
            $(this).removeClass("btn_choosed");
        } else {
            $(this).addClass('btn_choosed');
        }
    })
    //移入星星改变样式
    $('body').on('mouseover','ul li',function() {
        movein(this);
    });
    //移出取消样式
    $('body').on('mouseout','ul li',function() {
         moveout(this);
    });
    //点击星星当前所有变色包括自身
    $('body').on('click','ul li',function() {  
        $(this).addClass('cs');
        $(this).prevAll().addClass('cs');
        $(this).nextAll().removeClass('cs');
    })
    $('body').on('click', '#sure', function () {
        alert(123);
        var s = $('.btn_choosed');
        var arr = [];
        for (var i of s) {
            arr.push($(i).attr('data-tid'));
        }
        var tids = arr.join(',');

        $.ajax({
            url: '/user/setTag',
            type: 'post',
            data: {
                userid: userid,
                tid: tids
            },
            success: function (result) {
                console.log(result);
                console.log(tids);
                Cookie.setCookie('tag',tids);
            },
            error: function (error) {
                console.log(error);
                alert('失败');
            }
        }).then(function(){
            recommend();
        }
           
        )
       })
    $('body').on('click','.assess',function(e){
        e.preventDefault();
        alert('123');
        //console.log(userid);
        var pid=$(this).attr('data-pid');
        //console.log(pid);
        var content=$(this).parent().children('textarea').val();
        var goods=$(this).prev().children();
        var arr=[];
        for(var i of goods){
            if($(i).hasClass('cs')){
              arr.push(i);
            }
        }
        var score=arr.length;
        $.ajax({
            url:'/comment/sendcomment',
            type:'post',
            data:{
              uid:userid,
              content:content,
              type:1,
              pid:pid,
              score:score
            },
            success:function(result){
                console.log(result);
            },error:function(error){
                console.log(error);
                alert('失败');
            }
        })
    })
});


/**
 * 推荐方案
 */
function recommend() {
    var userid = Cookie.getCookie('userid');
    $.ajax({
        url: `/list/recommend?userid=${userid}`,
        type: 'get',
        dataType: 'json',
        success: function(result) {
            if (result.code == 0 && result.result) {
                render(result.result);
            }
        },
        error: function(error) {
            console.log(error);
        }
    })
}

function render(html) {
    if (!html) {
        return;
    }
    // 清空内容
    $('.recommend').html('');
    let render_html = '';

    for (let item of html) {
        console.log(item);
        render_html += `
        <div class="card mt-5">
        <div class="card-header">
        <h4>方案名称：${item.name}<span class="float-right">￥${item.total}</span></h4>
        </div>
        <div class="card-body">
            <table class="table border">
                <tr class="my_table_height">
                    <td class="border-right w-25">cpu：</td>
                    <td>${item.cpu}</td>
                </tr>
                <tr class="my_table_height">
                    <td class="border-right w-25">显卡：</td>
                    <td>${item.graphics}</td>
                </tr>
                <tr class="my_table_height">
                    <td class="border-right w-25">内存：</td>
                    <td>${item.memory}</td>
                </tr>
                <tr class="my_table_height">
                    <td class="border-right w-25">主板：</td>
                    <td>${item.mainboard}</td>
                </tr>
                <tr class="my_table_height">
                    <td class="border-right w-25">硬盘：</td>
                    <td>${item.harddisk}</td>
                </tr>
            </table>
            <p class="border">${item.intro}<br><br><br><br></p>
        </div>
        <div class="card-footer">
            <h6>给出您的评价：</h6>
            <textarea name="" id="" cols="93" rows="5"></textarea>
            <ul class="list-unstyled d-flex ">
                <li class="assess"> &#9733; </li>
                <li class="assess"> &#9733; </li>
                <li class="assess"> &#9733; </li>
                <li class="assess"> &#9733; </li>
                <li class="assess"> &#9733; </li>
            </ul>
            <button class="btn btn-danger float-right assess" data-pid="${item.id}">评价</button>
        </div>
    </div>
        `
    }
    $('.recommend').html(render_html);
}
function movein(s){
    $(s).addClass('hs');
    $(s).prevAll().addClass('hs');
}
function moveout(s){
    $(s).removeClass('hs');
    $(s).prevAll().removeClass('hs');
}
