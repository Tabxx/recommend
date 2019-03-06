$(document).ready(function () {
       /* 
    // 节点取的有问题
    var programmes = $('#programme>div');

    for (let programme of programmes) {
        var type;
        var sortby = 0;
        console.log(pro.id);
        switch (pro.id) {
            case 'latest':
                type = 1;
                sortby = 0;
                break;
            case 'hotest':
                type = 2;
                sortby = 0;
                break;
            case 'expensive':
                type = 3;
                sortby = 0;
                break;
            case 'cheap':
                type = 3;
                sortby = 1;
                break;
        }
        $.ajax({
            url: `/list/getlist?type=${type}&sortby=${sortby}`,
            tyep: 'get',
            dataType: 'json',
            success: function (result) {   
                //console.log(result.result); 
                let html="";      
                for (let list of result.result) {
                    //console.log(list);
                    html += ` <div class="row mt-3 pb-3 border-bottom">
              <div class="col-4">
                  <img src="/img/display.png" alt="">
                  <img src="/img/chassis.png" alt="">
              </div>
              <div class="col-6 p-0 text_small">
                  <h6>${list.intro}</h6>
                  <ul class="list-unstyled d-flex mb-1">
                      <li class="mr-5"><img src="/img/message.png" alt="">${list.name}</li>
                      <li class="mr-5"><img src="/img/user-icon.png" alt="">${list.userid}</li>
                      <li class="mr-5"><img src="/img/time.png" alt="">${list.time}</li>
                  </ul>
                  <div class="row">
                      <div class="col-6">C P U: ${list.cpu}</div>
                      <div class="col-6">主 板: ${list.mainboard}</div>
                      <div class="col-6">内 存: ${list.memory}</div>
                      <div class="col-6">显 卡: ${list.graphics}</div>
                  </div>
              </div>
              <div class="col-2">
                  <p class="h4 mt-4 text-danger">￥${list.total}</p>
                  <button class="btn btn-light">查看详情</button>
              </div>
             </div>`;
                }
                $(programmes).html(html);
            },
            error: function (error) {
                console.log(error);
                alert('失败');
            }
        }) 

    }
     */
    
    
    var programmes=$('#programme').children();
    for (let programme of programmes) {
        var type;
        var sortby = 0;
        switch (programme.id) {
            case 'latest':
                type = 1;
                sortby = 0;
                break;
            case 'hotest':
                type = 2;
                sortby = 0;
                break;
            case 'expensive':
                type = 3;
                sortby = 0;
                break;
            case 'cheap':
                type = 3;
                sortby = 1;
                break;
        }
        $.ajax({
            url: `/list/getlist?type=${type}&sortby=${sortby}`,
            tyep: 'get',
            dataType: 'json',
            success: function (result) {
                mhtml = '<div class="row">';
                for (var list of result.result) {
                    mhtml += `<div class="col-md-6 mt-5">
                    <div class="card" data-toggle="modal" data-target="#detail" data-id="${list.id}">
                        <img class="card-img-top" src="${list.image}" alt="Card-img">
                        <div class="card-body">
                            <h6 class="text-center">${list.name}</h4>
                            <p class="small_font">${list.intro}</p>
                        </div>
                    </div>
                </div>`;
                }
                $(programme).html(mhtml);
                // console.log(programme);
            },
            error: function (error) {
                console.log(error);
                alert('失败');
            }
        })
        // 这里一定比请求里面先执行
        // $(programme).html(mhtml);
    }
   $('body').on('click','.card',function(){
        var contant=$(this).data('id');
        $.ajax({
            url:`/list/getlist?id=${contant}`,
            type:'get',
            dataType:'json',
            success:function(result){
                var contant=result.result[0];
               $('#contant').html(`
               <h4 class="text-center">${contant.name}</h4>
               <ul class="list-unstyled">
                   <li class="md_font"><p>cpu:<br><span class="light">${contant.cpu}</span></p></li>
                   <li class="md_font"><p>显卡:<br><span class="light">${contant.graphics}</span></p></li>
                   <li class="md_font"><p>内存:<br><span class="light">${contant.memory}</span></p></li>
                   <li class="md_font"><p>硬盘:<br><span class="light">${contant.harddisk}</span></p></li>
                   <li class="md_font"><p>主板:<br><span class="light">${contant.mainboard}</span></p></li>
               </ul>
               `);
               UserAction(contant.tag);
            },error:function(error){
               console.log(error);
               alert('失败');
            }
        })
   })
})