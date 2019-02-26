
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
                let html = `<li>${res.result[0].title}</li><li><a href="#" class="my_a_style all">不限</a></li>`;
                for(let i=0;i<a.length;i++){
                    var obj=res.result[0].data[i];
                    for(let j in obj){
                        let pp=obj[j];
                        if(j=='capacity'){
                            html+=`<li><a href="#" class="my_a_style selector" data-type="${j}">${pp}GB</a></li>`;  
                        }else if(j=='cache'){
                            html+=`<li><a href="#" class="my_a_style selector" data-type="${j}">${pp}MB</a></li>`; 
                        }else{
                            html+=`<li><a href="#" class="my_a_style selector" data-type="${j}">${pp}</a></li>`;
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
               for(let item of res.result){
                   html += `<li class="my_list page_show">
                                   <div class=" row intr">
                                       <div class="col-2"><img src="${item.image}" alt="">
                                       </div>
                                       <div class="col-7">
                                               <p class="h6 mb-0 item-title">${item.name}</p>
                                               <div class="row my_small_font">
                                                   <div class="col-6">厂家：${item.brand}</div>
                                                   <div class="col-6">系列：${item.series}</div>
                                                   <div class="col-6">接口：${item.slot}</div>
                                                   <div class="col-6">类型：${item.features}</div>
                                               </div>
                                               <a href="#" class="text-danger detail">查看详情</a>
                                       </div> 
                                       <div class="col-3 price-choose">
                                           <p class="h4 text-danger">￥${item.price}</p>
                                           <button class="btn btn-secondary choose" data-ss="cpu">选用</button>
                                       </div>                                      
                                   </div>
                               </li>`
               }
               $('#cpu-list').html(html);
               //分页显示
               //获取全部列表
               var hardware_li=$('.founded>ul');
               //console.log(hardware_li);
               for(var i of hardware_li){
                   console.log(i.id);
               }
                var lists=$('#cpu-list').children();
                //获取列表的长度除以4向上取整
                var length=Math.ceil(($(lists).length/4));
                //默认第四个以后全部隐藏
                $(lists[3]).nextAll().addClass('hid');
                var pages=$('.pag');
                var len=pages.length;
                for(var page of pages){
                    //隐藏掉多余的页码
                   if($(page).html()>length){
                       $(page).parent().addClass('hid');
                   }
                   //显示当前页码对应的页
                   function get_list(index,pa){
                    var first=4*(index-1);
                    var last=4*index-1;
                    $(lists).removeClass('hid');
                    console.log(first, last, index);
                    $(lists[first]).prevAll().addClass('hid');
                    $(lists[last]).nextAll().addClass('hid');
                    $(pages).parent().removeClass('active');
                    $(pa).parent().addClass('active');
                   }
                   //改变按钮样式
                   $(page).click(function(e){
                       e.preventDefault();
                       var index=$(this).html();
                       get_list(index,this);
                   })
                }  
                //上一页
                $('#prev').click(function(e){
                    e.preventDefault();
                    //获得当前active的元素
                    var k=$('.pages>.active').prev().children();
                    var j=$('.pages>.active').children().html();
                    j = Number(j);
                    if(j>1){
                        get_list(j-1,k);
                    }
                })  
                //下一页
                $('#next').click(function(e){
                  e.preventDefault();
                  var j=$('.pages>.active').children().html(); 
                  // 字符串转数字
                  j = Number(j);
                  if(j<length){
                    var k=$('.pages>.active').next().children();
                      console.log(j);
                      //1 2 3 4 5
                      get_list(Number(j)+1,k);
                  }
                })  
            } 
        },error:function(error){
           console.log(error);
            alert("失败");
        }
        }) 
  }
    //cpu默认(不限)
    get_cpu('/cpu');
    $("body").on("click","#cpu_select .all",function(){
        let b=this.getAttribute('data-type');
        get_cpu(`/cpu`);
    })
    //cpu条件
   $("body").on("click","#cpu_select .selector ",function(){ 
     let a=this.innerHTML;
     let b=this.getAttribute('data-type');
     get_cpu(`/cpu?${b}=${a}`);
  })
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
                       html += `<li class="my_list page_show">
                                       <div class=" row intr">
                                           <div class="col-2"><img src="${item.image}" alt="">
                                           </div>
                                           <div class="col-7">
                                                   <p class="h6 mb-0">${item.name}</p>
                                                   <div class="row my_small_font">
                                                       <div class="col-6">厂家：${item.brand}</div>
                                                       <div class="col-6">显存：${item.capacity}GB</div>
                                                       <div class="col-6">型号：${item.chip}</div>
                                                       <div class="col-6">显示核心型号：Intel HD G</div>
                                                   </div>
                                                   <a href="#" class="text-danger detail">查看详情</a> 
                                           </div> 
                                           <div class="col-3 price-choose">
                                               <p class="h4 text-danger">￥${item.price}</p>
                                               <button class="btn btn-secondary choose" data-ss="gpu">选用</button>
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
       $("body").on("click","#xianka_select .all",function(){
        let b=this.getAttribute('data-type');
        get_gpu(`/graphics`);
    })
    //显卡条件
      $("body").on("click","#xianka_select .selector ",function(){ 
        let a=this.innerHTML;
        let b=this.getAttribute('data-type');
        get_gpu(`/graphics?${b}=${a}`);
    })
            
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
                                       <div class=" row intr page_show">
                                           <div class="col-2"><img src="${item.image}" alt="">
                                           </div>
                                           <div class="col-7">
                                                   <p class="h6 mb-0">${item.name}</p>
                                                   <div class="row my_small_font">
                                                       <div class="col-6">厂家：${item.brand}</div>
                                                       <div class="col-6">类型：${item.type}</div>
                                                       <div class="col-6">容量：${item.capacity}GB</div>
                                                       <div class="col-6">显示核心型号：Intel HD G</div>
                                                   </div>
                                                   <a href="#" class="text-danger detail">查看详情</a> 
                                           </div> 
                                           <div class="col-3 price-choose">
                                               <p class="h4 text-danger">￥${item.price}</p>
                                               <button class="btn btn-secondary choose" data-ss="memory">选用</button>
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
      $("body").on("click","#neicun_select .all",function(){
        let b=this.getAttribute('data-type');
        get_memory(`/memory`);
    })
         //内存条件
        $("body").on("click","#neicun_select .selector ",function(){ 
         let a=this.innerHTML;
         let b=this.getAttribute('data-type');
         get_memory(`/memory?${b}=${a}`);
    })
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
                       html += `<li class="my_list page_show">
                                       <div class=" row intr">
                                           <div class="col-2"><img src="${item.image}" alt="">
                                           </div>
                                           <div class="col-7">
                                                   <p class="h6 mb-0">${item.name}</p>
                                                   <div class="row my_small_font">
                                                       <div class="col-6">厂家：${item.brand}</div>
                                                       <div class="col-6">容量：${item.capacity}GB</div>
                                                       <div class="col-6">缓存：${item.cache}MB</div>
                                                       <div class="col-6">转速：${item.speed}RPM</div>
                                                   </div>
                                                   <a href="#" class="text-danger detail">查看详情</a> 
                                           </div> 
                                           <div class="col-3 price-choose">
                                               <p class="h4 text-danger">￥${item.price}</p>
                                               <button class="btn btn-secondary choose" data-ss="harddisk">选用</button>
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
        $("body").on("click","#yingpan_select .all",function(){
          let b=this.getAttribute('data-type');
          get_harddisk(`/harddisk`);
      })
      //硬盘条件
      $("body").on("click","#yingpan_select .selector ",function(){ 
        let a=this.innerHTML;
        let b=this.getAttribute('data-type');
        get_harddisk(`/harddisk?${b}=${a}`);
   })

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
                           html += `<li class="my_list page_show">
                                           <div class=" row intr">
                                               <div class="col-2"><img src="${item.image}" alt=""></div>
                                               <div class="col-7">
                                                       <p class="h6 mb-0">${item.name}</p>
                                                       <div class="row my_small_font">
                                                           <div class="col-6">厂家：${item.brand}</div>
                                                           <div class="col-6">接口：${item.cpu_slot}</div>
                                                           <div class="col-6">版型：${item.version}</div>
                                                           <div class="col-6">型号：${item.chipset}</div>
                                                       </div>
                                                       <a href="#" class="text-danger detail">查看详情</a> 
                                               </div> 
                                               <div class="col-3 price-choose">
                                                   <p class="h4 text-danger">￥${item.price}</p>
                                                   <button class="btn btn-secondary choose" data-ss="mainboard">选用</button>
                                               </div>                                      
                                           </div>
                                       </li>`
                       }
                       $('#main_board_list').html(html);
                    } 
                },error:function(error){
                   console.log(error);
                    alert("失败");
                }
                })
           } 
           //默认
           get_mainboard('/mainboard');
           $("body").on("click","#zhuban_select .all",function(){
            let b=this.getAttribute('data-type');
            get_mainboard(`/mainboard`);
            })
            //主板条件
            $("body").on("click","#zhuban_select .selector ",function(){ 
                let a=this.innerHTML;
                let b=this.getAttribute('data-type');
                get_mainboard(`/mainboard?${b}=${a}`);
           })
           $('body').on("click",".detail",function(e){
               e.preventDefault();
               var hardware_name=$(this).parent().children(':first').html();
               console.log(hardware_name);
               var name=$(this).parent().parent().parent().parent().prev().html().split('的')[1];
               $(window).attr('location', `Hardware.html?hardware=${name}&name=${hardware_name}`);
           })
         //选择硬件添加到列表中去
         //给button按钮添加点击事件
         $("body").on("click",".choose",function(){ 
            //获取名字和价格标签
            let a=this.parentElement.previousElementSibling.firstElementChild;
            let b=this.parentElement.firstElementChild; 
            //获取自定义属性的值
            let c=this.getAttribute('data-ss');
            //遍历table
            let table=document.getElementById('list_table');
            let trs=table.querySelectorAll('tr');
            for(let tr of trs){
                if(tr.id==c){
                    tr.children[1].innerHTML=a.innerHTML;
                    tr.children[2].innerHTML=b.innerHTML;
                }
            }

          //计算总价
          let total=document.querySelector('#get_total');
          let prices=table.querySelectorAll('.prices');
          var sum=0;
          for(price of prices){
              let a=price.innerHTML.slice(1);
              sum+= +a;
          }
          total.innerHTML=`￥${sum}`; 
        })
       
        //方案提交
        //let submit=document.querySelector('#list_sub');
        $("body").on("click","#list_sub",function(){ 
              //名称
              let arr=[];
              var name=$('#list_name').val();
              //说明
              arr.push(name);
              var intro=$('#intr').val();
              arr.push(intro);
              var hardwares=document.querySelectorAll('.hardware_name');
                for(let hardware of hardwares){
                 let hardwareName=hardware.innerHTML;
                 arr.push(hardwareName);
                }
                var total=$('#get_total').html().slice(1);
                arr.push(total);
                var list_data={name:'a',intro:'a',cpu:'a',graphics:'a',memory:'a',harddisk:'a',mainboard:'a',total:'a'};
                var t=0;
                for(let i in list_data){
                    //console.log(i);
                    list_data[i]=arr[t];
                    t++;
                }
                $.ajax({
                  url:'/list/add',
                  type:'post',
                  dataType:'json',
                  data:list_data,
                  success:function(){
                     alert('添加成功');
                     location.reload();
                  },error:function(error){
                    console.log(error);
                    alert("失败");
                  }
              }) 
        })
                    //删除硬件
                    $("body").on("click",".delete",function(){ 
                        let brother1=$(this).parent().prev();
                        let brother2=brother1.prev();
                        brother1.empty();
                        brother2.empty();
                       //console.log($(this).parent().prev().html());
                      // console.log($(this).parent().prev().prev().html());
                    }); 
})

