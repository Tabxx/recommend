
 $(function(){
   //获取分类函数
    function getType(hardware,type,id){       
        $.ajax({
        url:'/'+hardware+'/gettypes?field='+type,
        type:'get',
        dataType:'json',
        success:function(res){
            if(res.code == 0 && res.result && res.result.length){
                let a=res.result[0].data;
                let html = `<li>${res.result[0].title}</li><li><a href="#" class="my_a_style">不限</a></li>`;
                for(let i=0;i<a.length;i++){
                    var obj=res.result[0].data[i];
                    for(let j in obj){
                        let pp=obj[j];
                        if(j=='capacity'){
                            html+=`<li><a href="#" class="my_a_style selector">${pp}GB</a></li>`;  
                        }else if(j=='cache'){
                            html+=`<li><a href="#" class="my_a_style selector">${pp}MB</a></li>`; 
                        }else{
                            html+=`<li><a href="#" class="my_a_style selector">${pp}</a></li>`;
                        }
                    }
                }
                $(`${id}`).html(html);
            }
            $('')
        },error:function(error){
            console.log(error);
            alert('失败');
            }
        })
    }
     //cpu分类
        //品牌分类
        getType('cpu','brand','#cpu_brand');
        //系列分类
        getType('cpu','series','#cpu_series');
        //接口分类
        getType('cpu','slot','#cpu_slot');


        //gpu分类

        //品牌分类
        getType('graphics','brand','#gpu_brand');
        //容量分类
        getType('graphics','capacity','#gpu_capacity');
        //类型分类
        getType('graphics','type','#gpu_type');


        //内存分类
        
        //品牌分类
        getType('memory','brand','#memory_brand');
        //容量分类
        getType('memory','capacity','#memory_capacity');
        //类型分类
        getType('memory','type','#memory_type');

        //硬盘分类
        
        //品牌分类
        getType('harddisk','brand','#harddisk_brand');
        //容量分类
        getType('harddisk','capacity','#harddisk_capacity');
        //类型分类
        getType('harddisk','cache','#harddisk_cache');
        //主板分类

        //品牌分类
        getType('mainboard','brand','#mainboard_brand');
        //接口分类
        getType('mainboard','cpu_slot','#mainboard_slot');
        //板型分类
        getType('mainboard','version','#mainboard_version');

  //cpu列表
  function get_cpu(url){
    $.ajax({
        url:`${url}`,
        type:'get',
        dataType:'json',
        success:function(res){
            if(res.code == 0 && res.result && res.result.length){
               let html = '';
               console.log(res.result);
               for(let item of res.result){
                   html += `<li class="my_list">
                                   <div class=" row intr">
                                       <div class="col-2"><img src="${item.image}" alt="">
                                       </div>
                                       <div class="col-6">
                                               <p class="h6 mb-0">${item.name}</p>
                                               <div class="row my_small_font">
                                                   <div class="col-6">厂家:${item.brand}</div>
                                                   <div class="col-6">系列:${item.series}</div>
                                                   <div class="col-6">接口:${item.slot}</div>
                                                   <div class="col-6">类型:${item.features}</div>
                                               </div>
                                               <a href="#" class="text-danger ">查看详情</a> 
                                       </div> 
                                       <div class="col-4">
                                           <p class="h4 text-danger">￥${item.price}</p>
                                           <button class="btn btn-secondary">选用</button>
                                       </div>                                      
                                   </div>
                               </li>`
               }
               $('#cpu-list').html(html);
                       //选择硬件
 
            } 
        },error:function(error){
           console.log(error);
            alert("失败");
        }
        }) 
  }
    //默认(不限)
    get_cpu('/cpu');
    //条件
   var selector=document.getElementById('cpu_select');
   var selecters=selector.getElementsByClassName('selector');
    console.log(selecters);
    for(var selecter of selecters){
        selecter.onclick=function(e){
            preventDefault(e);   
            alert('aa');
            var selecter=this;
        }
        
    }
       //显卡列表
       function get_gpu(url){
        $.ajax({
            url:`${url}`,
            type:'get',
            dataType:'json',
            success:function(res){
                if(res.code == 0 && res.result && res.result.length){
                   let html = '';
                   for(let item of res.result){
                       html += `<li class="my_list">
                                       <div class=" row intr">
                                           <div class="col-2"><img src="${item.image}" alt="">
                                           </div>
                                           <div class="col-6">
                                                   <p class="h6 mb-0">${item.name}</p>
                                                   <div class="row my_small_font">
                                                       <div class="col-6">厂家:${item.brand}</div>
                                                       <div class="col-6">显存:${item.capacity}GB</div>
                                                       <div class="col-6">型号:${item.chip}</div>
                                                       <div class="col-6">显示核心型号:Intel HD G</div>
                                                   </div>
                                                   <a href="#" class="text-danger ">查看详情</a> 
                                           </div> 
                                           <div class="col-4">
                                               <p class="h4 text-danger">￥${item.price}</p>
                                               <button class="btn btn-secondary">选用</button>
                                           </div>                                      
                                       </div>
                                   </li>`
                   }
                   $('#gpu-list').html(html);
                } 
            },error:function(error){
               console.log(error);
                alert("失败");
            }
            })  
       }
       //默认
       get_gpu('/graphics');
            
             //内存列表
    function get_memory(url){
        $.ajax({
            url:`${url}`,
            type:'get',
            dataType:'json',
            success:function(res){
                if(res.code == 0 && res.result && res.result.length){
                   let html = '';
                   for(let item of res.result){
                       html += `<li class="my_list">
                                       <div class=" row intr">
                                           <div class="col-2"><img src="${item.image}" alt="">
                                           </div>
                                           <div class="col-6">
                                                   <p class="h6 mb-0">${item.name}</p>
                                                   <div class="row my_small_font">
                                                       <div class="col-6">厂家:${item.brand}</div>
                                                       <div class="col-6">类型:${item.type}</div>
                                                       <div class="col-6">容量:${item.capacity}GB</div>
                                                       <div class="col-6">显示核心型号:Intel HD G</div>
                                                   </div>
                                                   <a href="#" class="text-danger ">查看详情</a> 
                                           </div> 
                                           <div class="col-4">
                                               <p class="h4 text-danger">￥${item.price}</p>
                                               <button class="btn btn-secondary">选用</button>
                                           </div>                                      
                                       </div>
                                   </li>`
                   }
                   $('#memory_list').html(html);
                } 
            },error:function(error){
               console.log(error);
                alert("失败");
            }
            })
    }
      //默认
      get_memory('/memory');

        //硬盘列表
        function get_harddisk(url){
        $.ajax({
            url:`${url}`,
            type:'get',
            dataType:'json',
            success:function(res){
                if(res.code == 0 && res.result && res.result.length){
                   let html = '';
                   for(let item of res.result){
                       html += `<li class="my_list">
                                       <div class=" row intr">
                                           <div class="col-2"><img src="${item.image}" alt="">
                                           </div>
                                           <div class="col-6">
                                                   <p class="h6 mb-0">${item.name}</p>
                                                   <div class="row my_small_font">
                                                       <div class="col-6">厂家:${item.brand}</div>
                                                       <div class="col-6">容量:${item.capacity}GB</div>
                                                       <div class="col-6">缓存:${item.cache}MB</div>
                                                       <div class="col-6">转速:${item.speed}RPM</div>
                                                   </div>
                                                   <a href="#" class="text-danger">查看详情</a> 
                                           </div> 
                                           <div class="col-4">
                                               <p class="h4 text-danger">￥${item.price}</p>
                                               <button class="btn btn-secondary">选用</button>
                                           </div>                                      
                                       </div>
                                   </li>`
                   }
                   $('#hard_disk_list').html(html);
                } 
            },error:function(error){
               console.log(error);
                alert("失败");
            }
            })
        }
        //默认
        get_harddisk('/harddisk');

            //主板列表
           function get_mainboard(url){
            $.ajax({
                url:`${url}`,
                type:'get',
                dataType:'json',
                success:function(res){
                    if(res.code == 0 && res.result && res.result.length){
                       let html = '';
                       for(let item of res.result){
                           html += `<li class="my_list">
                                           <div class=" row intr">
                                               <div class="col-2"><img src="${item.image}" alt="">
                                               </div>
                                               <div class="col-6">
                                                       <p class="h6 mb-0">${item.name}</p>
                                                       <div class="row my_small_font">
                                                           <div class="col-6">厂家:${item.brand}</div>
                                                           <div class="col-6">接口:${item.cpu_slot}</div>
                                                           <div class="col-6">版型:${item.version}</div>
                                                           <div class="col-6">型号:${item.chipset}</div>
                                                       </div>
                                                       <a href="#" class="text-danger ">查看详情</a> 
                                               </div> 
                                               <div class="col-4">
                                                   <p class="h4 text-danger">￥${item.price}</p>
                                                   <button class="btn btn-secondary">选用</button>
                                               </div>                                      
                                           </div>
                                       </li>`
                       }
                       $('#main_board_list').html(html);
                       var chooses=document.querySelectorAll('li>div>div>button');
                       for(var choose of chooses){
                           console.log(choose);
                           choose=this;
                           this.onclick=function(){
                               alert('mapi');
                           }
                       }
                    } 
                },error:function(error){
                   console.log(error);
                    alert("失败");
                }
                })
           } 
           //默认
           get_mainboard('/mainboard');
              
 

   })

