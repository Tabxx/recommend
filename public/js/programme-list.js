$('#nav').load('header.html');
$('#footer').load('footer.html');
$(document).ready(function () { 
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
    //点击方案卡片显示详情
   $('body').on('click','.card',function(){
        var con=$(this).data('id');
        $.ajax({
            url:`/list/getlist?id=${con}`,
            type:'get',
            dataType:'json',
            success:function(result){
                var contant=result.result[0];
                //console.log(contant);
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
               $.ajax({
                   url:`/list/addClick?id=${contant.id}`,
                   type:'get',
                   success:function(){
                       //alert('成功');
                   },error:function(error){
                       alert("失败");
                   }
               })
            },error:function(error){
               console.log(error);
               alert('失败');
            }
        })
        $.ajax({
            url:`/comment/getcomment?type=1&&pid=${con}`,
            type:'get',
            dataType:'json',
            success:function(res){
                var results=res.result;
                //console.log(results);
                var html='';
                for(var result of results){
                    var time=result.time;
                    // console.log(time);
                     var date=new Date(time*1000);
                     date=date.format('yyyy-MM-dd hh:mm:ss');
                     //console.log(date);
                     html+=`<div class="border comments">
                     <h5>${result.username}说:</h5>
                     <p>${result.content}</p> 
                     <span class="float-right">${date}</span>  
                     </div>`; 
                    }
                $('#command').html(html);
            },error:function(error){
                alert('失败');
            }
            })
   })
   //点击评论显示评论
   $('body').on('click','#com_btn',function(){
       if($(this).html()=='评论'){
           $('#contant').css('margin-top','-500px');
           $(this).html('详情');
        }else{
            $('#contant').css('margin-top','0px');
            $(this).html('评论');
        } 
   })
   //关闭时返回详情在上，评论在下的默认状态
   $('body').on('click','#close',function(){
       $('#contant').css('margin-top','0px');
   })

})