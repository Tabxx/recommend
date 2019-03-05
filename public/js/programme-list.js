$(document).ready(function () {
       /* 
    // 节点取的有问题
    var programmes = $('#programme');
    var pros=programmes.children();
    for(let pro of pros){
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
        console.log(programme.id);
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
                console.log(result);
                var html = '';
                for (var list of result.result) {
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
                  <button id="hDetail" class="btn btn-light" data-toggle="modal" data-target="#detail">查看详情</button>
              </div>
             </div>`;
                }
                $(programme).html(html);
            },
            error: function (error) {
                console.log(error);
                alert('失败');
            }
        }) 
    }
   $('body').on('click','#hDetail',function(){
       
   })
})