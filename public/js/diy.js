

$('#tops').load('header.html');
$('#footer').load('footer.html');
$(document).ready(function() {
  //获取分类函数
  function getType(hardware, type, id) {
    $.ajax({
      url: '/' + hardware + '/gettypes?field=' + type,
      type: 'get',
      dataType: 'json',
      success: function(res) {
        if (res.code == 0 && res.result && res.result.length) {
          let a = res.result[0].data;
          let html = `<li class="abs">${
            res.result[0].title
          }</li><li class="chosed selected"><a href="#" class="my_a_style all ">不限</a></li>`;
          for (let i = 0; i < a.length; i++) {
            var obj = res.result[0].data[i];
            for (let j in obj) {
              let pp = obj[j];
              if (j == 'capacity') {
                html += `<li class="chosed"><a href="#" class="my_a_style selector" data-type="${j}" data-s="${pp}">${pp}GB</a></li>`;
              } else if (j == 'cache') {
                html += `<li class="chosed"><a href="#" class="my_a_style selector" data-type="${j}" data-s="${pp}">${pp}MB</a></li>`;
              } else {
                html += `<li class="chosed"><a href="#" class="my_a_style selector" data-type="${j}" data-s="${pp}">${pp}</a></li>`;
              }
            }
          }
          $(`${id}`).html(html);
          //console.log(a.length);
        }
      },
      error: function(error) {
        console.log(error);
        alert('失败');
      }
    });
  }
  //cpu分类
  //品牌分类
  getType('cpu', 'brand', '#cpu_brand');
  //系列分类
  getType('cpu', 'series', '#cpu_series');
  //接口分类
  getType('cpu', 'slot', '#cpu_slot');

  //gpu分类

  //品牌分类
  getType('graphics', 'brand', '#gpu_brand');
  //容量分类
  getType('graphics', 'capacity', '#gpu_capacity');
  //类型分类
  getType('graphics', 'type', '#gpu_type');

  //内存分类

  //品牌分类
  getType('memory', 'brand', '#memory_brand');
  //容量分类
  getType('memory', 'capacity', '#memory_capacity');
  //类型分类
  getType('memory', 'type', '#memory_type');

  //硬盘分类

  //品牌分类
  getType('harddisk', 'brand', '#harddisk_brand');
  //容量分类
  getType('harddisk', 'capacity', '#harddisk_capacity');
  //类型分类
  getType('harddisk', 'cache', '#harddisk_cache');
  //主板分类

  //品牌分类
  getType('mainboard', 'brand', '#mainboard_brand');
  //接口分类
  getType('mainboard', 'cpu_slot', '#mainboard_slot');
  //板型分类
  getType('mainboard', 'version', '#mainboard_version');

  //cpu列表
  function get_cpu(url) {
    $.ajax({
      url: `${url}`,
      type: 'get',
      dataType: 'json',
      success: function(res) {
        if (res.code == 0 && res.result && res.result.length) {
          let html = '';
          for (let item of res.result) {
            html += `<li class="my_list page_show" data-brand="${item.brand}" data-series="${item.series}" data-slot="${
              item.slot
            }">
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
                                               <a href="#" class="detail" data-id="${item.id}">更多参数>></a>
                                       </div> 
                                       <div class="col-3 price-choose">
                                           <p class="h4 text-danger">￥${item.price}</p>
                                           <button class="btn btn-secondary choose" data-ss="cpu">选用</button>
                                       </div>                                      
                                   </div>
                               </li>`;
          }
          $('#cpu-list').html(html);
          var length = res.result.length;
          //根据请求的数据个数生成页数
          create_page(length, '#cpu_page');
          //分页显示
          pageshow('#cpu-list', '#cpu_page');
        }else{
          $('#cpu-list').html('<h4 class="text-center mt-5">抱歉，暂未找到符合条件的cpu...</h4>').next().html('');
        }
      },
      error: function(error) {
        console.log(error);
        alert('失败');
      }
    });
  }
  //cpu默认
  get_cpu('/cpu');
  //cpu条件
  //condition('#cpu_select','cpu',get_cpu)

  condition('#cpu_select', 'cpu', get_cpu);
  //显卡列表
  function get_gpu(url) {
    $.ajax({
      url: `${url}`,
      type: 'get',
      dataType: 'json',
      success: function(res) {
        if (res.code == 0 && res.result && res.result.length) {
          let html = '';
          for (let item of res.result) {
            html += `<li class="my_list page_show" data-brand="${item.brand}" data-series="${
              item.capacity
            }" data-type="${item.type}">
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
                                                   <a href="#" class="detail" data-id="${
                                                     item.id
                                                   }">更多参数>></a> 
                                           </div> 
                                           <div class="col-3 price-choose">
                                               <p class="h4 text-danger">￥${item.price}</p>
                                               <button class="btn btn-secondary choose" data-ss="gpu">选用</button>
                                           </div>                                      
                                       </div>
                                   </li>`;
          }
          $('#gpu-list').html(html);
          var length = res.result.length;
          create_page(length, '#gp_page');
          //分页显示
          pageshow('#gpu-list', '#gp_page');
        }else{
          $('#gpu-list').html('<h4 class="text-center mt-5">抱歉，暂未找到符合条件的显卡...</h4>').next().html('');
        }
      },
      error: function(error) {
        console.log(error);
        alert('失败');
      }
    });
  }
  //默认
  get_gpu('/graphics');
  condition('#xianka_select', 'graphics', get_gpu);

  //内存列表
  function get_memory(url) {
    $.ajax({
      url: `${url}`,
      type: 'get',
      dataType: 'json',
      success: function(res) {
        if (res.code == 0 && res.result && res.result.length) {
          let html = '';
          for (let item of res.result) {
            html += `<li class="my_list" >
                                       <div class=" row intr page_show" data-brand="${item.brand}" data-series="${
              item.capacity
            }" data-type="${item.type}">
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
                                                   <a href="#" class="detail" data-id="${
                                                     item.id
                                                   }">更多参数>></a> 
                                           </div> 
                                           <div class="col-3 price-choose">
                                               <p class="h4 text-danger">￥${item.price}</p>
                                               <button class="btn btn-secondary choose" data-ss="memory">选用</button>
                                           </div>                                      
                                       </div>
                                   </li>`;
          }
          $('#memory_list').html(html);
          var length = res.result.length;
          create_page(length, '#mm_page');
          //分页显示
          pageshow('#memory_list', '#mm_page');
        }else{
          $('#memory_list').html('<h4 class="text-center mt-5">抱歉，暂未找到符合条件的内存...</h4>').next().html('');
        }
      },
      error: function(error) {
        console.log(error);
        alert('失败');
      }
    });
  }
  //默认
  get_memory('/memory');
  condition('#neicun_select', 'memory', get_memory);

  //硬盘列表
  function get_harddisk(url) {
    $.ajax({
      url: `${url}`,
      type: 'get',
      dataType: 'json',
      success: function(res) {
        if (res.code == 0 && res.result && res.result.length) {
          let html = '';
          for (let item of res.result) {
            html += `<li class="my_list page_show" data-brand="${item.brand}" data-series="${
              item.capacity
            }" data-cache="${item.cache}">
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
                                                   <a href="#" class=" detail" data-id="${
                                                     item.id
                                                   }">更多参数>></a> 
                                           </div> 
                                           <div class="col-3 price-choose">
                                               <p class="h4 text-danger">￥${item.price}</p>
                                               <button class="btn btn-secondary choose" data-ss="harddisk">选用</button>
                                           </div>                                      
                                       </div>
                                   </li>`;
          }
          $('#hard_disk_list').html(html);
          var length = res.result.length;
          create_page(length, '#hd_page');
          //分页显示
          pageshow('#hard_disk_list', '#hd_page');
        }else{
          $('#hard_disk_list').html('<h4 class="text-center mt-5">抱歉，暂未找到符合条件的硬盘...</h4>').next().html('');
        }
      },
      error: function(error) {
        console.log(error);
        alert('失败');
      }
    });
  }
  //默认
  get_harddisk('/harddisk');
  condition('#yingpan_select', 'harddisk', get_harddisk);
  //主板列表
  function get_mainboard(url) {
    $.ajax({
      url: `${url}`,
      type: 'get',
      dataType: 'json',
      success: function(res) {
        if (res.code == 0 && res.result && res.result.length) {
          let html = '';
          for (let item of res.result) {
            html += `<li class="my_list page_show" brand="${item.brand}" cpu_slot="${item.cpu_slot}" version="${
              item.version
            }">
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
                                                       <a href="#" class=" detail" data-id="${
                                                         item.id
                                                       }">更多参数>></a> 
                                               </div> 
                                               <div class="col-3 price-choose">
                                                   <p class="h4 text-danger">￥${item.price}</p>
                                                   <button class="btn btn-secondary choose" data-ss="mainboard">选用</button>
                                               </div>                                      
                                           </div>
                                       </li>`;
          }
          $('#main_board_list').html(html);
          var length = res.result.length;
          create_page(length, '#mb_page');
          //分页显示
          pageshow('#main_board_list', '#mb_page');
        }else{
          $('#main_board_list').html('<h4 class="text-center mt-5">抱歉，暂未找到符合条件的主板...</h4>').next().html('');
        }
      },
      error: function(error) {
        console.log(error);
        alert('失败');
      }
    });
  }
  //默认
  get_mainboard('/mainboard');
  condition('#zhuban_select', 'mainboard', get_mainboard);

  $('body').on('click', '.detail', function(e) {
    e.preventDefault();
    var hardware_name = $(this)
      .parent()
      .children(':first')
      .html();
    //console.log(hardware_name);
    var name = $(this)
      .parent()
      .parent()
      .parent()
      .parent()
      .prev()
      .html()
      .split('的')[1];
    var id = $(this).attr('data-id');
    $(window).attr('location', `Hardware.html?hardware=${name}&name=${hardware_name}&id=${id}`);
  });
  //选择硬件添加到列表中去
  //给button按钮添加点击事件
  $('body').on('click', '.choose', function() {
    //获取名字和价格标签
    let a = this.parentElement.previousElementSibling.firstElementChild;
    let b = this.parentElement.firstElementChild;
    //获取自定义属性的值
    let c = this.getAttribute('data-ss');
    //遍历table
    let table = document.getElementById('list_table');
    let trs = table.querySelectorAll('tr');
    for (let tr of trs) {
      if (tr.id == c) {
        tr.children[1].innerHTML = a.innerHTML;
        tr.children[2].innerHTML = b.innerHTML;
      }
    }
    getTotal();
  });

  //方案提交
  //let submit=document.querySelector('#list_sub');
  $('body').on('click', '#list_sub', function() {
    //名称
    let arr = [];
    var name = $('#list_name').val();
    //说明
    arr.push(name);
    var intro = $('#intr').val();
    arr.push(intro);
    var hardwares = document.querySelectorAll('.hardware_name');
    for (let hardware of hardwares) {
      let hardwareName = hardware.innerHTML;
      arr.push(hardwareName);
    }
    var total = $('#get_total')
      .html()
      .slice(1);
    arr.push(total);
    var list_data = {
      name: 'a',
      intro: 'a',
      cpu: 'a',
      graphics: 'a',
      memory: 'a',
      harddisk: 'a',
      mainboard: 'a',
      total: 'a'
    };
    var t = 0;
    for (let i in list_data) {
      //console.log(i);
      list_data[i] = arr[t];
      t++;
    }
    //获取复选框的个性
    var arr1 = [];
    $.each($('input:checkbox:checked'), function() {
      arr1.push($(this).val());
    });
    var str = arr1.join(',');
    list_data.tag = str;

    // 添加userid
    list_data['userid'] = Cookie.getCookie('userid');
    //获取上传的图片
    //console.log($('#file-image').attr('src'));
    list_data['image']=$('#file-image').attr('src');
    $.ajax({
      url: '/list/add',
      type: 'post',
      dataType: 'json',
      data: list_data,
      success: function(result) {
        if (result.code === 0) {
          alert('添加成功');
          location.reload();
        } else {
          alert(result.msg);
        }
      },
      error: function(error) {
        console.log(error);
        alert('失败');
      }
    });
  });
  
  //删除硬件
  $('body').on('click', '.delete', function() {
    let brother1 = $(this)
      .parent()
      .prev();
    let brother2 = brother1.prev();
    brother1.empty();
    brother2.empty();
    getTotal();
    //console.log($(this).parent().prev().html());
    // console.log($(this).parent().prev().prev().html());
  });
  $('body').on('click', '#pro_', function(e) {
    e.preventDefault();
    $(window).attr('location', '/programme-list.html');
  });
  $('body').on('click', '#write_post', function() {
    $(window).attr('location', '/posting.html');
  });
  $.ajax({
    url: '/bbs/getpost',
    type: 'get',
    dataTye: 'json',
    success: function(result) {
      var data = result.result;
      //console.log(data);
      var html = '';
      for (let i = 0; i < 5; i++) {
        var time = new Date(data[i].time * 1000);
        //console.log(time);
        var date = time.format('yyyy-MM-dd hh:mm:ss');
        html += `<tr>
              <td class="w-50"><span class="forum_title" data-id="${data[i].id}">${data[i].title}</span></td>
              <td><span class="float-right">${date}</span></td>
              <td class=""><span class="float-right w-50"><img src="/img/user-icon.png" alt=""><a href="#">${
                data[i].username
              }</a></span></td>   
              </tr>`;
      }
      $('#diy_forum').html(html);
    },
    error: function(error) {
      console.log(error);
      alert('失败');
    }
  });
  $('body').on('click', '.forum_title', function() {
    var id = $(this).attr('data-id');
    $(window).attr('location', `/forum.html?id=${id}`);
  });
  //计算总价
  function getTotal() {
    var total = $('#get_total');
    var prices = $('.prices');
    var sum = 0;
    for (var price of prices) {
      let a = $(price)
        .html()
        .slice(1);
      sum += +a;
    }
    $(total).html(`￥${sum}`);
  }
  $('body').on('click', '.d-flex.nav-tabs>li', function() {
    $(this)
      .parent()
      .children()
      .css('outline', '2px solid rgb(220,220,220)');
    $(this).css('outline', '2px solid rgb(40,139,222)');
  });
});

//分页显示
function pageshow(list, html) {
  //获取全部列表
  var hardware_li = $('.founded>ul');
  //console.log(hardware_li);

  var lists = $(list).children();
  //获取列表的长度除以5向上取整
  var length = Math.ceil($(lists).length / 5);
  //console.log(length);
  //默认第四个以后全部隐藏
  $(lists[4])
    .nextAll()
    .addClass('hid');
  var pages = $(`${html} .pag`);
  //遍历所有页
  for (let page of pages) {
    //显示当前页码对应的页
    function get_list(index, pa) {
      var first = 5 * (index - 1);
      var last = 5 * index - 1;
      $(lists).removeClass('hid');
      //console.log(first, last, index);
      $(lists[first])
        .prevAll()
        .addClass('hid');
      $(lists[last])
        .nextAll()
        .addClass('hid');
      $(pages)
        .parent()
        .removeClass('active');
      $(pa)
        .parent()
        .addClass('active');
    }
    //改变按钮样式
    $(page).click(function(e) {
      e.preventDefault();
      var index = $(this).html();
      get_list(index, this);
    });
  }
  //上一页
  $('body')
    .off('click', `${html} #prev`)
    .on('click', `${html} #prev`, function(e) {
      e.preventDefault();
      //获得当前active的元素
      var k = $(`${html}>.active`)
        .prev()
        .children();
      var j = $(`${html}>.active`)
        .children()
        .html();
      j = Number(j);
      if (j > 1) {
        get_list(j - 1, k);
      }
    });
  //下一页
  $('body')
    .off('click', `${html} #next`)
    .on('click', `${html} #next`, function(e) {
      e.preventDefault();
      var j = $(`${html}>.active`)
        .children()
        .html();
      // 字符串转数字
      j = Number(j);
      if (j < length) {
        var k = $(`${html}.pages>.active`)
          .next()
          .children();
        //console.log(j);
        //1 2 3 4 5
        get_list(Number(j) + 1, k);
      }
    });
}
//根据请求的数据个数生成页数
function create_page(len, html) {
  var page_count = Math.ceil(len / 5);
  //console.log(page_count);

  var html1 = '<li class="page-item"><a href="#" class="page-link" id="prev">上一页</a></li>';
  for (var i = 1; i <= page_count; i++) {
    if (i == 1) {
      html1 += `<li class="page-item active">
        <a href="#" class="page-link pag">${i}</a></li>`;
    } else {
      html1 += `<li class="page-item">
        <a href="#" class="page-link pag">${i}</a></li>`;
    }
  }
  html1 += '<li class="page-item"><a href="#" class="page-link" id="next">下一页</a></li>';

  $(html).html(html1);
}
//硬件的多重筛选
function condition(hws, hw, fn) {
  $('body').on('click', '.chosed', function(e) {
    e.preventDefault();
    $(this)
      .prevAll()
      .removeClass('selected');
    $(this)
      .nextAll()
      .removeClass('selected');
    $(this).addClass('selected');
    var list = $(`${hws} li`);
    var url = `/${hw}?`;
    for (var item of list) {
      var a = $(item)
        .children()
        .html();
      var b = $(item)
        .children()
        .attr('data-type');
      if ($(item).hasClass('selected')) {
        if (
          $(item)
            .children()
            .hasClass('my_a_style all')
        ) {
          url += '';
        } else {
          url += `${b}=${a}&`;
        }
      }
    }
    if (url.charAt(url.length - 1) == '&' || '?') {
      url = url.substr(0, url.length - 1);
    }
    fn(url);
  });
}
//获取本地文件信息
$('#file-input').on('change',function(e){
  var files = e.target.files,file;
  if(files && files.length>0){
    file=files[0];
    console.log(file);
    var URL = window.URL || window.webkitURL; 
    var imgURL = URL.createObjectURL(file);
    console.log(imgURL);
    $('#img_box').append(`<image id="file-image" src="${imgURL}"/><span>×</span>`)
  }
})

function getObjectURL(file) {  
  var url = null;  
  if (window.createObjcectURL != undefined) {  
      url = window.createOjcectURL(file);  
  } else if (window.URL != undefined) {  
      url = window.URL.createObjectURL(file);  
  } else if (window.webkitURL != undefined) {  
      url = window.webkitURL.createObjectURL(file);  
  }  
  return url;  
}
$('body').on('click','#img_box>span',function(){
    $('#img_box').html('');
})