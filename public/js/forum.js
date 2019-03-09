$(document).ready(function(){
    var id=window.location.search.split('=')[1];
    var E = window.wangEditor;
    var editor = new E('#text');
    editor.create();
    $.ajax({
        url:`/bbs/getpost?pid=${id}`,
        type:'get',
        dataType:'json',
        success:function(result){
           //console.log(result.result[0]);
           var data=result.result[0];
           //console.log(data);
           var time=new Date(data.time*1000);
           time=time.format('yyyy-MM-dd hh:mm:ss');
           //console.log(time);
           var html=`
               <div class="media border-bottom pt-1 pl-1 pb-3">
               <img class="" src="/img/userimg.png" alt="">
               <div class="media-body ml-3">
               <h6 class="font-weight-bold">${data.title}</h6>
               <p id="louzhu">${data.username}</p>
               <span class="mr-3">${time}</span>
               <span class="mr-3"><img class="mr-2" src="/img/watch.png" alt="">${data.clicks}</span>
               <span class="mr-3"><img class="mr-2" src="/img/reply.png" alt="">${data.replys}</span>
               <span class="text-warning p-1 bg-light border">楼主</span>
               <span class="float-right mr-1">跳转楼层到<input class="floor-select ml-2" type="text"></span> 
               </div>
               </div>
               <div class="boss">
                    <div class="boss_contain"> 
                        <p>${data.intro}</p>  
                    </div>
                    <span class="text-warning my_reply"><a href="#my-reply">回复</a></span>
                </div>  `;
            $('#flo1').attr("data-postid",data.id);
            $('#flo1').html(html);
                var html_reply='';
                for(var i=0;i<data.comments.length;i++){
                    var comment=data.comments[i];
                    //console.log(comment);
                    var reply_time=new Date(comment.time*1000);
                    reply_time=reply_time.format('yyyy-MM-dd hh:mm:ss');
                    //console.log(reply_time);
                     html_reply+=`
                    <div class="f1 floor1 mt-4">
                    <div class="media pt-1 pl-1 ">
                        <img src="/img/userimg.png" alt="">
                        <div class="media-body ml-3">
                            <div class="ml-2">
                                <a href="#">${comment.username}</a>
                                <span class="ml-2">${reply_time}</span>
                            </div>
                            <p class="ml-2">${comment.content}</p>
                        </div>
                    </div>
                    </div>`;
                }
                $('#floors').html(html_reply);
        },error:function(error){
            console.log(error);
            alert('失败');
        }
    })
    $('body').on('click','.card-footer>button',function(){
        var userid=Cookie.getCookie('userid');
        console.log(userid);
        var content=$('.w-e-text>p').html();
        console.log(content);
        var pid=$('#flo1').attr('data-postid');
        console.log(pid);
        $.ajax({
            url:'/comment/sendcomment',
            type:'post',
            data:{
                uid:`${userid}`,
                content:`${content}`,
                type:'0',
                pid:`${pid}`
            },
            success:function(result){
                console.log(result);
                alert(result.msg);
            },error:function(error){
                console.log(error);
                alert('失败');
            }
        })
    })
    $('body').on('click','#write_new',function(){
        $(window).attr('location','/posting.html');
    })
})