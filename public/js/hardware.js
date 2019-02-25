

$(document).ready(function(){
    //var hardware='cpu';
    var href=decodeURI(window.location.href);
    var url = href.split("?")[1];
    var para = url.split("&");
    console.log(para);
    var arr=[];
    for(var i=0;i<para.length;i++){
        arr[i]=para[i].split('=');
    }
    var hardware=arr[0][1];
    console.log(hardware);
    var name=arr[1][1];
    console.log(name);
    $.ajax({
        url:`/${hardware}?name=${name}`,
        type:'get',
        dataType:'json',
        success:function(res){
          console.log(res.result[0]);
          var a=res.result[0];
          for(var x in a){
              console.log(a[x]);
              if(a[x]==null){
                  a[x]='暂无数据';
              }
          }
          var html;
          switch(a.hardware_name){
              case 'cpu':
               html=` <h4 class="text-primary hardware_title pt-2 pb-2">${a.name}</h4>
              <h5 class="pt-2 pb-2 bg-light mb-0 mt-4">基本参数</h5>
              <table class="table">
                  <tr>
                      <td class="w-25 border-right">CPU系列</td>
                      <td class="hardware_small_font">${a.series}</td>
                  </tr>
                  <tr>
                      <td class="w-25 border-right">制作工艺</td>
                      <td class="hardware_small_font">${a.process}</td>
                  </tr>
                  <tr>
                      <td class="w-25 border-right">插槽类型</td>
                      <td class="hardware_small_font">${a.slot}</td>
                  </tr>
              </table>
              <h5 class="pt-2 pb-2 bg-light mb-0">性能参数</h5>
              <table class="table ">
                  <tr>
                      <td class="w-25 border-right">CPU主频</td>
                      <td class="hardware_small_font">${a.frequency}Ghz</td>
                  </tr>
                  <tr>
                      <td class="w-25 border-right">核心数</td>
                      <td class="hardware_small_font">${a.core_number}</td>
                  </tr>
                  <tr>
                      <td class="w-25 border-right">缓存</td>
                      <td class="hardware_small_font">${a.tree_cache}MB</td>
                  </tr>
                  <tr>
                      <td class="w-25 border-right">总线规格</td>
                      <td class="hardware_small_font">${a.bus_specification}</td>
                  </tr>
                  <tr>
                      <td class="w-25 border-right">热设计功耗</td>
                      <td class="hardware_small_font">${a.power_consumption}W</td>
                  </tr>
              </table>
              <h5 class="pt-2 pb-2 bg-light mb-0">内存参数</h5>
              <table class="table ">
                  <tr>
                      <td class="w-25 border-right">支持最大内存</td>
                      <td class="hardware_small_font">${a.max_memory}GB</td>
                  </tr>
                  <tr>
                      <td class="w-25 border-right">内存类型</td>
                      <td class="hardware_small_font">${a.memory_type}</td>
                  </tr>
              </table>
              <h5 class="pt-2 pb-2 bg-light mb-0">显卡参数</h5>
              <table class="table ">
                  <tr>
                      <td class="w-25 border-right">显卡基本频率</td>
                      <td class="hardware_small_font">${a.graphice_base_frequency}Mhz</td>
                  </tr>
                  <tr>
                      <td class="w-25 border-right">最大动态频率</td>
                      <td class="hardware_small_font">${a.graphics_max_frequency}Ghz</td>
                  </tr>
              </table>
              <h5 class="pt-2 pb-2 bg-light mb-0">其他参数</h5>
              <table class="table ">
                  <tr>
                      <td class="w-25 border-right">cpu定位</td>
                      <td class="hardware_small_font">${a.features}</td>
                  </tr>
              </table>
              <h4 class="text-primary mt-4 hardware_title pt-2 pb-2">Intel 奔腾G4560 网友点评</h4>
              <div class="border-bottom">
                    <div class="d-flex mt-3">
                        <h5 class="pb-2">G4560低功耗办公用最适合了</h5>
                        <span class="hardware_small_font">feifei</span>
                        <span class="hardware_small_font">2019-01-15</span>
                     </div>
                  <p><strong>最满意：</strong>我感觉这款G4560还行，首先是它的功耗比2代酷睿大有改进，节能省电，降低电源压力。</p>
                  <p><strong>最不满意：</strong>缺点嘛，这U还真难挑剔不出毛病，不过与I5、I7及英特尔的对手AMD推出的ZEN架构CPU相
                     比，存在多开方面的明显劣势。但是价格摆在那里，所以这些问题还是可以忽略的。</p>
              </div>
              <div class="border-bottom">
                    <div class="d-flex mt-3">
                        <h5 class="pb-2">G4560低功耗办公用最适合了</h5>
                        <span class="hardware_small_font">feifei</span>
                        <span class="hardware_small_font">2019-01-15</span>
                     </div>
                  <p><strong>最满意：</strong>我感觉这款G4560还行，首先是它的功耗比2代酷睿大有改进，节能省电，降低电源压力。</p>
                  <p><strong>最不满意：</strong>缺点嘛，这U还真难挑剔不出毛病，不过与I5、I7及英特尔的对手AMD推出的ZEN架构CPU相
                     比，存在多开方面的明显劣势。但是价格摆在那里，所以这些问题还是可以忽略的。</p>
              </div>
              <p class="hardware_bg_soft text-center">查看所有评论</p>`;
              break;
              case 'gpu':
              html=` <h4 class="text-primary hardware_title pt-2 pb-2">${a.name}</h4>
              <h5 class="pt-2 pb-2 bg-light mb-0 mt-4">显卡核心</h5>
              <table class="table">
                  <tr>
                      <td class="w-25 border-right">显卡芯片</td>
                      <td class="hardware_small_font">${a.chip}</td>
                  </tr>
                  <tr>
                      <td class="w-25 border-right">芯片系列</td>
                      <td class="hardware_small_font">${a.chip_type}</td>
                  </tr>
                  <tr>
                      <td class="w-25 border-right">核心代号</td>
                      <td class="hardware_small_font">${a.core_code}</td>
                  </tr>
                  <tr>
                      <td class="w-25 border-right">CUDA核心</td>
                      <td class="hardware_small_font">${a.cuda}</td>
                  </tr>
              </table>
              <h5 class="pt-2 pb-2 bg-light mb-0">显存规格</h5>
              <table class="table ">
                  <tr>
                      <td class="w-25 border-right">显存频率</td>
                      <td class="hardware_small_font">${a.frequency}Mhz</td>
                  </tr>
                  <tr>
                      <td class="w-25 border-right">显存类型</td>
                      <td class="hardware_small_font">${a.existing_type}</td>
                  </tr>
                  <tr>
                      <td class="w-25 border-right">显存容量</td>
                      <td class="hardware_small_font">${a.capacity}GB</td>
                  </tr>
                  <tr>
                      <td class="w-25 border-right">显存位宽</td>
                      <td class="hardware_small_font">${a.bitwide}bit</td>
                  </tr>
                  <tr>
                      <td class="w-25 border-right">最大分辨率</td>
                      <td class="hardware_small_font">${a.max_resolution}</td>
                  </tr>
              </table>
              <h5 class="pt-2 pb-2 bg-light mb-0">显卡接口</h5>
              <table class="table ">
                  <tr>
                      <td class="w-25 border-right">接口类型</td>
                      <td class="hardware_small_font">${a.graphics_interface_type}</td>
                  </tr>
                  <tr>
                      <td class="w-25 border-right">I/O接口</td>
                      <td class="hardware_small_font">${a.io_interface}</td>
                  </tr>
                  <tr>
                      <td class="w-25 border-right">电源接口</td>
                      <td class="hardware_small_font">${a.power}</td>
                  </tr>
              </table>
              <h5 class="pt-2 pb-2 bg-light mb-0">其他参数</h5>
              <table class="table ">
                  <tr>
                      <td class="w-25 border-right">显卡定位</td>
                      <td class="hardware_small_font">${a.type}</td>
                  </tr>
                  <tr>
                      <td class="w-25 border-right">散热方式</td>
                      <td class="hardware_small_font">${a.radiating}</td>
                  </tr>
              </table>
              <h4 class="text-primary mt-4 hardware_title pt-2 pb-2">Intel 奔腾G4560 网友点评</h4>
              <div class="border-bottom">
                    <div class="d-flex mt-3">
                        <h5 class="pb-2">G4560低功耗办公用最适合了</h5>
                        <span class="hardware_small_font">feifei</span>
                        <span class="hardware_small_font">2019-01-15</span>
                     </div>
                  <p><strong>最满意：</strong>我感觉这款G4560还行，首先是它的功耗比2代酷睿大有改进，节能省电，降低电源压力。</p>
                  <p><strong>最不满意：</strong>缺点嘛，这U还真难挑剔不出毛病，不过与I5、I7及英特尔的对手AMD推出的ZEN架构CPU相
                     比，存在多开方面的明显劣势。但是价格摆在那里，所以这些问题还是可以忽略的。</p>
              </div>
              <div class="border-bottom">
                    <div class="d-flex mt-3">
                        <h5 class="pb-2">G4560低功耗办公用最适合了</h5>
                        <span class="hardware_small_font">feifei</span>
                        <span class="hardware_small_font">2019-01-15</span>
                     </div>
                  <p><strong>最满意：</strong>我感觉这款G4560还行，首先是它的功耗比2代酷睿大有改进，节能省电，降低电源压力。</p>
                  <p><strong>最不满意：</strong>缺点嘛，这U还真难挑剔不出毛病，不过与I5、I7及英特尔的对手AMD推出的ZEN架构CPU相
                     比，存在多开方面的明显劣势。但是价格摆在那里，所以这些问题还是可以忽略的。</p>
              </div>
              <p class="hardware_bg_soft text-center">查看所有评论</p>`;
              break;
              case 'memory':
              html=` <h4 class="text-primary hardware_title pt-2 pb-2">${a.name}</h4>
              <h5 class="pt-2 pb-2 bg-light mb-0 mt-4">基本参数</h5>
              <table class="table">
                  <tr>
                      <td class="w-25 border-right">内存容量</td>
                      <td class="hardware_small_font">${a.capacity}GB</td>
                  </tr>
                  <tr>
                      <td class="w-25 border-right">内存类型</td>
                      <td class="hardware_small_font">${a.type}</td>
                  </tr>
                  <tr>
                      <td class="w-25 border-right">内存主频</td>
                      <td class="hardware_small_font">${a.frequency}MHz</td>
                  </tr>
                  <tr>
                      <td class="w-25 border-right">脚针数</td>
                      <td class="hardware_small_font">${a.stitch_count}pin</td>
                  </tr>
                  <tr>
                      <td class="w-25 border-right">插槽类型</td>
                      <td class="hardware_small_font">${a.slot_type}</td>
                  </tr>
              </table>
              <h5 class="pt-2 pb-2 bg-light mb-0">技术参数</h5>
              <table class="table ">
                  <tr>
                      <td class="w-25 border-right">CL延迟</td>
                      <td class="hardware_small_font">${a.cl_delay}</td>
                  </tr>
              </table>
              <h5 class="pt-2 pb-2 bg-light mb-0">其他参数</h5>
              <table class="table ">
                  <tr>
                      <td class="w-25 border-right">工作电压</td>
                      <td class="hardware_small_font">${a.work_voltage}V</td>
                  </tr>
              </table>
              <h4 class="text-primary mt-4 hardware_title pt-2 pb-2">Intel 奔腾G4560 网友点评</h4>
              <div class="border-bottom">
                    <div class="d-flex mt-3">
                        <h5 class="pb-2">G4560低功耗办公用最适合了</h5>
                        <span class="hardware_small_font">feifei</span>
                        <span class="hardware_small_font">2019-01-15</span>
                     </div>
                  <p><strong>最满意：</strong>我感觉这款G4560还行，首先是它的功耗比2代酷睿大有改进，节能省电，降低电源压力。</p>
                  <p><strong>最不满意：</strong>缺点嘛，这U还真难挑剔不出毛病，不过与I5、I7及英特尔的对手AMD推出的ZEN架构CPU相
                     比，存在多开方面的明显劣势。但是价格摆在那里，所以这些问题还是可以忽略的。</p>
              </div>
              <div class="border-bottom">
                    <div class="d-flex mt-3">
                        <h5 class="pb-2">G4560低功耗办公用最适合了</h5>
                        <span class="hardware_small_font">feifei</span>
                        <span class="hardware_small_font">2019-01-15</span>
                     </div>
                  <p><strong>最满意：</strong>我感觉这款G4560还行，首先是它的功耗比2代酷睿大有改进，节能省电，降低电源压力。</p>
                  <p><strong>最不满意：</strong>缺点嘛，这U还真难挑剔不出毛病，不过与I5、I7及英特尔的对手AMD推出的ZEN架构CPU相
                     比，存在多开方面的明显劣势。但是价格摆在那里，所以这些问题还是可以忽略的。</p>
              </div>
              <p class="hardware_bg_soft text-center">查看所有评论</p>`;
              break;
              case 'hard_disk':
              html=` <h4 class="text-primary hardware_title pt-2 pb-2">${a.name}</h4>
              <h5 class="pt-2 pb-2 bg-light mb-0 mt-4">基本参数</h5>
              <table class="table">
                  <tr>
                      <td class="w-25 border-right">硬盘容量</td>
                      <td class="hardware_small_font">${a.capacity}GB</td>
                  </tr>
                  <tr>
                      <td class="w-25 border-right">缓存</td>
                      <td class="hardware_small_font">${a.cache}MB</td>
                  </tr>
                  <tr>
                      <td class="w-25 border-right">转速</td>
                      <td class="hardware_small_font">${a.speed}rpm</td>
                  </tr>
                  <tr>
                      <td class="w-25 border-right">接口类型</td>
                      <td class="hardware_small_font">${a.interface_type}</td>
                  </tr>
                  <tr>
                      <td class="w-25 border-right">接口速率</td>
                      <td class="hardware_small_font">${a.interface_rate}Gb/秒</td>
                  </tr>
              </table>
              <h5 class="pt-2 pb-2 bg-light mb-0">性能参数</h5>
              <table class="table ">
                  <tr>
                      <td class="w-25 border-right">功率</td>
                      <td class="hardware_small_font">${a.power}</td>
                  </tr>
              </table>
              <h4 class="text-primary mt-4 hardware_title pt-2 pb-2">Intel 奔腾G4560 网友点评</h4>
              <div class="border-bottom">
                    <div class="d-flex mt-3">
                        <h5 class="pb-2">G4560低功耗办公用最适合了</h5>
                        <span class="hardware_small_font">feifei</span>
                        <span class="hardware_small_font">2019-01-15</span>
                     </div>
                  <p><strong>最满意：</strong>我感觉这款G4560还行，首先是它的功耗比2代酷睿大有改进，节能省电，降低电源压力。</p>
                  <p><strong>最不满意：</strong>缺点嘛，这U还真难挑剔不出毛病，不过与I5、I7及英特尔的对手AMD推出的ZEN架构CPU相
                     比，存在多开方面的明显劣势。但是价格摆在那里，所以这些问题还是可以忽略的。</p>
              </div>
              <div class="border-bottom">
                    <div class="d-flex mt-3">
                        <h5 class="pb-2">G4560低功耗办公用最适合了</h5>
                        <span class="hardware_small_font">feifei</span>
                        <span class="hardware_small_font">2019-01-15</span>
                     </div>
                  <p><strong>最满意：</strong>我感觉这款G4560还行，首先是它的功耗比2代酷睿大有改进，节能省电，降低电源压力。</p>
                  <p><strong>最不满意：</strong>缺点嘛，这U还真难挑剔不出毛病，不过与I5、I7及英特尔的对手AMD推出的ZEN架构CPU相
                     比，存在多开方面的明显劣势。但是价格摆在那里，所以这些问题还是可以忽略的。</p>
              </div>
              <p class="hardware_bg_soft text-center">查看所有评论</p>`;
              break;
              case 'mainboard':
              html=` <h4 class="text-primary hardware_title pt-2 pb-2">${a.name}</h4>
              <h5 class="pt-2 pb-2 bg-light mb-0 mt-4">主板芯片</h5>
              <table class="table">
                  <tr>
                      <td class="w-25 border-right">主芯片组</td>
                      <td class="hardware_small_font">${a.chipset}</td>
                  </tr>
                  <tr>
                      <td class="w-25 border-right">显示芯片</td>
                      <td class="hardware_small_font">${a.display_chip}</td>
                  </tr>
                  <tr>
                      <td class="w-25 border-right">音频芯片</td>
                      <td class="hardware_small_font">${a.audio_chips}</td>
                  </tr>
                  <tr>
                      <td class="w-25 border-right">网卡芯片</td>
                      <td class="hardware_small_font">${a.network_chip}</td>
                  </tr>
              </table>
              <h5 class="pt-2 pb-2 bg-light mb-0 mt-4">处理器规格</h5>
              <table class="table">
                  <tr>
                      <td class="w-25 border-right">cpu类型</td>
                      <td class="hardware_small_font">${a.cpu_type}</td>
                  </tr>
                  <tr>
                      <td class="w-25 border-right">cpu插槽</td>
                      <td class="hardware_small_font">${a.cpu_slot}</td>
                  </tr>
              </table>
              <h5 class="pt-2 pb-2 bg-light mb-0">内存规格</h5>
              <table class="table ">
                  <tr>
                      <td class="w-25 border-right">内存类型</td>
                      <td class="hardware_small_font">${a.memory_type}</td>
                  </tr>
                  <tr>
                      <td class="w-25 border-right">最大内存容量</td>
                      <td class="hardware_small_font">${a.memory_size}GB</td>
                  </tr>
              </table>
              <h5 class="pt-2 pb-2 bg-light mb-0">存储扩展</h5>
              <table class="table ">
                  <tr>
                      <td class="w-25 border-right">PCI-E标准</td>
                      <td class="hardware_small_font">${a.pcie}</td>
                  </tr>
                  <tr>
                      <td class="w-25 border-right">PCI-e插槽</td>
                      <td class="hardware_small_font">${a.pcie_slot}</td>
                  </tr>
                  <tr>
                      <td class="w-25 border-right">存储接口</td>
                      <td class="hardware_small_font">${a.storage_interface}</td>
                  </tr>
              </table>
              <h5 class="pt-2 pb-2 bg-light mb-0">I/O接口</h5>
              <table class="table ">
                  <tr>
                      <td class="w-25 border-right">USB接口</td>
                      <td class="hardware_small_font">${a.usb_interface}</td>
                  </tr>
                  <tr>
                      <td class="w-25 border-right">视频接口</td>
                      <td class="hardware_small_font">${a.video_interface}</td>
                  </tr>
                  <tr>
                      <td class="w-25 border-right">电源接口</td>
                      <td class="hardware_small_font">${a.power_interface}</td>
                  </tr>
              </table>
              <h5 class="pt-2 pb-2 bg-light mb-0">板型</h5>
              <table class="table ">
                  <tr>
                      <td class="w-25 border-right">主板板型</td>
                      <td class="hardware_small_font">${a.version}</td>
                  </tr>
              </table>
              <h5 class="pt-2 pb-2 bg-light mb-0">其他</h5>
              <table class="table ">
                  <tr>
                      <td class="w-25 border-right">供电模式</td>
                      <td class="hardware_small_font">${a.power_mode}</td>
                  </tr>
              </table>
              <h4 class="text-primary mt-4 hardware_title pt-2 pb-2">Intel 奔腾G4560 网友点评</h4>
              <div class="border-bottom">
                    <div class="d-flex mt-3">
                        <h5 class="pb-2">G4560低功耗办公用最适合了</h5>
                        <span class="hardware_small_font">feifei</span>
                        <span class="hardware_small_font">2019-01-15</span>
                     </div>
                  <p><strong>最满意：</strong>我感觉这款G4560还行，首先是它的功耗比2代酷睿大有改进，节能省电，降低电源压力。</p>
                  <p><strong>最不满意：</strong>缺点嘛，这U还真难挑剔不出毛病，不过与I5、I7及英特尔的对手AMD推出的ZEN架构CPU相
                     比，存在多开方面的明显劣势。但是价格摆在那里，所以这些问题还是可以忽略的。</p>
              </div>
              <div class="border-bottom">
                    <div class="d-flex mt-3">
                        <h5 class="pb-2">G4560低功耗办公用最适合了</h5>
                        <span class="hardware_small_font">feifei</span>
                        <span class="hardware_small_font">2019-01-15</span>
                     </div>
                  <p><strong>最满意：</strong>我感觉这款G4560还行，首先是它的功耗比2代酷睿大有改进，节能省电，降低电源压力。</p>
                  <p><strong>最不满意：</strong>缺点嘛，这U还真难挑剔不出毛病，不过与I5、I7及英特尔的对手AMD推出的ZEN架构CPU相
                     比，存在多开方面的明显劣势。但是价格摆在那里，所以这些问题还是可以忽略的。</p>
              </div>
              <p class="hardware_bg_soft text-center">查看所有评论</p>`;
              break;
              default:
              alert('找不到');
              break;
          }         
          $('#hardware_detail').html(html);
        },error:function(error){
            alert('失败');
            console.log(error);
        }
    })
   
})