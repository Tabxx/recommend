$(document).ready(function () {
    var userid = Cookie.getCookie('userid');
    var tag = Cookie.getCookie('tag');

    if (!tag) {
        $('#demo').modal('show');
    } else {
        recommend();
    }
    $("body").on("click", ".my_btn", function (e) {
        e.stopPropagation();
        if ($(this).hasClass('cc')) {
            $(this).removeClass("cc");
        } else {
            $(this).addClass('cc');
        }
    })
    $("ul li").hover(function () {
        $(this).addClass('hs');
        $(this).prevAll().addClass('hs');
    }, function () {
        $(this).removeClass('hs');
        $(this).prevAll().removeClass('hs');
    })

    $("ul li").click(function () {
        $(this).addClass('cs');
        $(this).prevAll().addClass('cs');
        $(this).nextAll().removeClass('cs');
    })
    $('body').on('click', '[data-dismiss="modal"]', function () {
        var s = $('.cc');
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
            },
            error: function (error) {
                console.log(error);
                alert('失败');
            }
        }).then(
            function () {
                $.ajax({
                    url: `/list/recommend?userid=${userid}`,
                    type: 'get',
                    dataType: 'json',
                    success: function (result) {
                        //console.log(result.result.length);
                        if (result.code == 0 && result.result) {
                            var data = result.result;
                            var l = data.length;
                            console.log(data[l - 1]);
                        }
                    },
                    error: function (error) {
                        console.log(error);
                    }
                })
            }
        )
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
        success: function (result) {
            if (result.code == 0 && result.result) {
                render(result.result);
            }
        },
        error: function (error) {
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
        render_html += `
        <div class="card mt-5">
        <div class="card-header">
            <h4>方案一</h4>
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
            <button class="btn btn-danger float-right">评价</button>
        </div>
    </div>
        `
    }

    $('.recommend').html(render_html);
}