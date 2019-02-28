$(document).ready(function(){
  var programmes=$('#programme>div');
  for(var programme of programmes){
      var type;
      var sortby=0;
      var mhtml='';
      switch(programme.id){
          case 'latest':
          type=1;sortby=0;break;
          case 'hotest':
          type=2;sortby=0;break;
          case 'expensive':
          type=3;sortby=0;break;
          case 'cheap':
          type=3;sortby=1;break;
      }
      $.ajax({
          url:`/list/getlist?type=${type}&sortby=${sortby}`,
          tyep:'get',
          dataType:'json',
          success:function(result){
            for(var list of result.result){
              mhtml+=` <div class="row mt-3 pb-3 border-bottom">
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
            console.log(mhtml); 
          },error:function(error){
              console.log(error);
              alert('失败');
          }   
      }) 
      $(programme).html(mhtml);  
    }
})