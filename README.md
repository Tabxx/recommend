# recommend

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run dev
```

### 提交代码

```
git add .
git commit -m '描述'
git pull
git push
```

### 接口列表

- [CPU](#cpu)
  - [CPU 分类](#cputypes)
- [显卡](#graphics)
  - [显卡分类](#graphicstypes)
- [内存条](#memory)
  - [内存条分类](#memorytypes)
- [硬盘](#hard-disk)
  - [硬盘分类](#harddisktypes)
- [主板](#main-board)
  - [主板分类](#mainboardtypes)
- [配置清单](#list-add)
  - [清单查询](#list-get)
- [评论相关](#comments)
  - [发布评论](#send-comment)
  - [获取评论](#get-comment)

### 接口说明

**<span id="cpu">CPU</span>**

请求地址：/cpu?name=...

请求参数（可选）：

| 参数名 |   含义   |                              说明 |
| ------ | :------: | --------------------------------: |
| name   | CPU 名称 |                      酷睿 i5 8500 |
| brand  |   品牌   |                             Inter |
| price  |   价格   | 价格区间：1200-2000，准确值：1200 |
| series |   系列   |                           酷睿 i9 |
| slot   |   插槽   |                          LGA 1151 |

返回数据：

```
{
    "code": 0,  // 错误代码，0-请求正常
    "msg": "",  // 错误信息
    "result": [ // 返回数据
        {
            "id": 3,    // CPU 的ID
            "name": "Intel 酷睿i5 8500",    // CPU名称
            "brand": "Inter",   // 品牌
            "price": 1499,  // 价格
            "series": "酷睿i5", // 系列
            "features": null,   // 特性
            "slot": "LGA 1151", // 插槽
            "tag": null,    // 标签
            "status": 1,    // 状态
            "image":"https://2b.zol-img.com.cn/product/190_320x240/577/cenD00LUkiNlI.jpg",   // 图片
            "process": "14纳米",    // 制作工艺
            "frequency": 3.6,     // CPU主频（GHz）
            "core_code": "Coffee Lake", // 核心代号
            "core_number": 8,  // 核心数量(八核心)
            "threads_number": 16,   // 线程数量(十六线程)
            "power_consumption": 95,    // 功耗（W）
            "max_memory": 64,   // 支持最大内存（GB）
            "bus_specification": "DMI3 8GT/s",  // 总线规格
            "tree_cache": 16,   // 三级缓存（MB）
            "memory_type": "DDR4 2666MHz",  // 内存类型
            "is_Integ_graphics": 1, // 是否集成显卡
            "graphics_max_frequency": 1.2,  // 显卡最大动态频率(GHZ)
            "graphice_base_frequency": 350, // 显卡基本频率(MHz)
            "Integ_graphics": "",   // 集成显卡（没有就为空或者null）
        }
    ]
}
```

---

**<span id="cputypes">CPU 分类信息</span>**

请求地址：/cpu/gettypes?field=brand,series

请求参数（可选）：

| 参数名 |        含义        |                       说明 |
| ------ | :----------------: | -------------------------: |
| field  | 需要获取的分类字段 | brand,series(中间逗号隔开) |

返回数据：

```
{
    "code": 0,
    "msg": "",
    "result": [
        {
            "title": "品牌",    // 分类名称
            "data": [   // 分类数据
                {
                    "brand": "AMD"
                },
                {
                    "brand": "Inter"
                }
            ]
        },
        {
            "title": "系列",
            "data": [
                {
                    "series": "Ryzen 5"
                },
                {
                    "series": "酷睿i3"
                },
                {
                    "series": "酷睿i5"
                },
                {
                    "series": "酷睿i9"
                }
            ]
        }
    ]
}
```

---

**<span id="graphics">显卡</span>**

请求地址：/graphics?name=...

请求参数（可选）：

| 参数名   |   含义   |                                                                说明 |
| -------- | :------: | ------------------------------------------------------------------: |
| name     | 显卡名称 |                        七彩虹 iGame GeForce RTX 2080 Ti Advanced OC |
| brand    |   品牌   |                                                              七彩虹 |
| price    |   价格   |                                   价格区间：1200-2000，准确值：1200 |
| capacity | 显卡容量 |                                                            11（GB） |
| chip     | 显卡芯片 |                                                  GeForce RTX 2080Ti |
| image    | 显卡图片 | https://2d.zol-img.com.cn/product/192_320x240/461/ce6ElKKfHpLuU.jpg |
| type     | 显卡类型 |                                                              发烧级 |

返回数据：

```
{
    "code": 0,
    "msg": "",
    "result": [
        {
            "id": 1,    // 显卡id
            "name": "七彩虹iGame GeForce RTX 2080 Ti Advanced OC",  // 显卡名称
            "brand": "七彩虹",  // 品牌
            "price": 9999,  // 价格
            "capacity": 11, // 显卡容量
            "chip": "GeForce RTX 2080Ti",   // 显卡芯片
            "image": "https://2d.zol-img.com.cn/product/192_320x240/461/ce6ElKKfHpLuU.jpg", // 显卡图片
            "type": "发烧级",   // 显卡类型
            "status": 1,
            "chip_type": "NVIDIA RTX 20系列",   // 显示芯片系列
            "core_code": "TU102-300A",  // 核心代号
            "cuda": 4352, //CUDA核心(个)
            "frequency": 14000, // 显存频率（MHz）
            "existing_type": "GDDR6",   // 显存类型
            "bitwide": 352, // 显存位宽(Bit)
            "max_resolution": "7680×4320",  // 最大分辨率
            "graphics_interface_type": "PCI Express 3.0 16X",  // 显卡接口类型
            "io_interface": "	HDMI接口，3×DisplayPort接口，USB Type-C接口",   // I/O接口
            "power": "8pin+8pin",   // 电源
            "radiating": "三风扇散热",    // 散热方式
        }
    ]
}
```

**<span id="graphicstypes">显卡分类信息</span>**

请求地址：/graphics/gettypes?filed=...

同 CPU 分类

---

**<span id="memory">内存条</span>**
请求地址：/memory?name=...
请求参数（可选）：

| 参数名    |    含义    |                                                                说明 |
| --------- | :--------: | ------------------------------------------------------------------: |
| name      | 内存条名称 |                                            影驰 GAMER 8GB DDR4 2400 |
| brand     |    品牌    |                                                                影驰 |
| price     |    价格    |                                   价格区间：1200-2000，准确值：1200 |
| capacity  |  内存容量  |                                                             8（GB） |
| frequency |  内存主频  |                                                         2400（MHz） |
| image     | 内存条图片 | https://2d.zol-img.com.cn/product/192_320x240/461/ce6ElKKfHpLuU.jpg |
| type      |  内存类型  |                                                                DDR4 |

返回数据：

```
{
    "code": 0,
    "msg": "",
    "result": [
        {
            "id": 1,    // 内存条id
            "name": "影驰GAMER 8GB DDR4 2400",  // 内存条名称
            "brand": "影驰",    // 品牌
            "price": 459,   // 价格
            "type": "DDR4", // 类型
            "capacity": 8,  // 内存容量
            "image": "https://2f.zol-img.com.cn/product/173_320x240/791/ceZMhVCgEfffk.jpg", // 图片
            "frequency": 2400,  // 主频
            "status": 1,
            "stitch_count": 288,    // 针脚数pin
            "slot_type": "DIMM",    // 插槽类型
            "cl_delay": "15-15-15-35",  // 插槽延迟
            "work_voltage": 12, // 工作电压（V）
            "radiating": 1, // 是否有散热片，1-有，0-没有
        }
    ]
}
```

**<span id="memorytypes">内存条分类信息</span>**

请求地址：/memory/gettypes?filed=...

同 CPU 分类

---

**<span id="hard-disk">硬盘</span>**

请求地址：/harddisk?name=...

请求参数（可选）：

| 参数名   |   含义   |                                                                说明 |
| -------- | :------: | ------------------------------------------------------------------: |
| name     | 硬盘名称 |                西部数据 500GB 7200 转 16MB SATA3 蓝盘（WD5000AAKX） |
| brand    |   品牌   |                                                            西部数据 |
| price    |   价格   |                                   价格区间：1200-2000，准确值：1200 |
| capacity | 硬盘容量 |                                                           500（GB） |
| cache    |   缓存   |                                                            16（MB） |
| image    | 硬盘图片 | https://2d.zol-img.com.cn/product/192_320x240/461/ce6ElKKfHpLuU.jpg |
| speed    |   转速   |                                                           7200(rpm) |

返回数据：

```
{
    "code": 0,
    "msg": "",
    "result": [
        {
            "id": 3,
            "name": "西部数据500GB 7200转 16MB SATA3 蓝盘（WD5000AAKX）",   // 名称
            "brand": "西部数据",    // 品牌
            "price": 270,   // 价格
            "capacity": 500,    // 容量
            "cache": 16,    // 缓存
            "speed": 7200,  // 转速
            "image": "https://2f.zol-img.com.cn/product/58_320x240/667/ceaCtpuUXk3SU.jpg",  // 图片
            "status": 1,
            "interface_type": "SATA3.0",    // 接口类型
            "interface_rate": 6,    // 接口速率6Gb/秒
            "power": '',    // 功率
        }
    ]
}
```

**<span id="harddisktypes">硬盘分类信息</span>**

请求地址：/harddisk/gettypes?filed=...

同 CPU 分类

---

**<span id="main-board">主板</span>**

请求地址：/mainboard?name=...

请求参数（可选）：

| 参数名   |   含义   |                                                                说明 |
| -------- | :------: | ------------------------------------------------------------------: |
| name     | 主板名称 |                                        华硕 TUF B360M-PLUS GAMING S |
| brand    |   品牌   |                                                                华硕 |
| price    |   价格   |                                   价格区间：1200-2000，准确值：1200 |
| cpu_slot | CPU 插槽 |                                                            LGA 1151 |
| version  |   版型   |                                                      Micro ATX 板型 |
| image    | 主板图片 | https://2d.zol-img.com.cn/product/192_320x240/461/ce6ElKKfHpLuU.jpg |
| chipset  | 主芯片组 |                                                          Intel B360 |

返回数据：

```
{
    "code": 0,
    "msg": "",
    "result": [
        {
            "id": 1,
            "name": "华硕TUF B360M-PLUS GAMING S",  // 主板名称
            "brand": "华硕",    // 主板品牌
            "price": 879,   // 价格
            "cpu_slot": "LGA 1151", // CPU插槽
            "version": "Micro ATX板型", // 版型
            "chipset": "Intel B360",    // 主芯片组
            "image": "https://2a.zol-img.com.cn/product/191_120x90/174/celVra79B2.jpg", // 图片
            "status": 1,
            "display_chip": "CPU内置显示芯片（需要CPU支持）",   // 显示芯片
            "audio_chips": "集成Realtek ALC887 8声道音效芯片",  // 音频芯片
            "network_chip": "板载Intel I219V千兆网卡",  // 网卡芯片
            "cpu_type": "第八代Core i7/i5/i3/Pentium/Celeron",  // cpu类型
            "memory_type": "4×DDR4 DIMM",   // 内存类型
            "memory_size": 64,  // 64（GB）
            "pcie": "PCI-E 3.0",    // PCI-E标准
            "pcie_slot": "1×PCI-E X16显卡插槽，2×PCI-E X1插槽", // PCI-E插槽
            "storage_interface": "1×PCI-E X16显卡插槽，2×PCI-E X1插槽", // 存储接口
            "usb_interface": "2×USB3.1 Gen2 接口（2背板），3×USB3.1 Gen1 接口（2内置+1背板），6×USB2.0接口",    // usb接口
            "video_interface": "1×DVI接口，1×HDMI接口", // 视频接口
            "power_interface": "一个8针，一个24针电源接口", // 电源接口
            "power_mode": "4+3相",  //供电模式
        }
    ]
}
```

**<span id="mainboardtypes">主板分类信息</span>**

请求地址：/mainborad/gettypes?filed=...

同 CPU 分类

---

**<span id="list-add">添加配置清单</span>**

请求地址：/list/add （POST 请求）

请求参数（必选）：

| 参数名    |     含义     |                                                                说明 |
| --------- | :----------: | ------------------------------------------------------------------: |
| name      |   方案名称   |                                                            大神推荐 |
| intro     |   方案描述   |                                        DNF 专用配置，嘤嘤辉值得拥有 |
| cpu       |   cpu 名称   |                                                 Intel 酷睿 i9 9900K |
| graphics  |     显卡     |                         七彩虹 iGame GeForce RTX 2080 Ti Advanced O |
| memory    |    内存条    |                                             影驰 GAMER 8GB DDR4 240 |
| image     | 图片（可选） | https://2d.zol-img.com.cn/product/192_320x240/461/ce6ElKKfHpLuU.jpg |
| harddisk  |     硬盘     |                 希捷 Barracuda 1TB 7200 转 64MB 单碟（ST1000DM003） |
| mainboard |     主板     |                                        华硕 TUF B360M-PLUS GAMING S |
| total     |     总价     |                                                               16635 |
| userid    | 当前用户 id  |                                                                   1 |

返回数据：

```
{
    "code": 0,
    "msg": "添加成功",
    "result": 2 // 方案id
}
```

**<span id="list-get">获取配置清单</span>**

请求地址：/list/getlist

请求参数（可选）：

| 参数名 |   含义   |                             说明 |
| ------ | :------: | -------------------------------: |
| id     | 方案 id  |                                2 |
| type   | 排序方式 | 1-最新，2-最热，3-最便宜 or 最贵 |
| sortby | 排序方式 |         0-降序, 1-升序, 默认为 0 |

最新：type=1
最热：type=2
最便宜: type=3&sortby=0
最贵：type=3&sortby=1

返回数据：

```
{
    "code": 0,
    "msg": "",
    "result": [
        {
            "id": 2,
            "name": "大神推荐",
            "intro": "DNF专用配置，嘤嘤辉值得拥有",
            "cpu": "Intel 酷睿i9 9900K",
            "graphics": "七彩虹iGame GeForce RTX 2080 Ti Advanced O",
            "memory": "影驰GAMER 8GB DDR4 240",
            "harddisk": "希捷Barracuda 1TB 7200转 64MB 单碟（ST1000DM003）",
            "mainboard": "华硕TUF B360M-PLUS GAMING S",
            "image": "",
            "total": "16635",
            "userid": "1",
            "status": 1
        }
    ]
}
```

---

**<span id="send-comment">发送评论</span>**
请求地址：/comment/sendcomment
请求参数（除 score 外必选）：

| 参数名  |           含义            |                                                      说明 |
| ------- | :-----------------------: | --------------------------------------------------------: |
| uid     |          用户 id          |                                                         2 |
| content |         评论内容          |                                                         2 |
| type    |           分类            | 0-帖子评论,1-方案评论,2-cpu,3-显卡,4-内存条,5-硬盘,6-主板 |
| pid     | 硬件、方案、帖子对应的 id |                                                         2 |
| score   |           评分            |                                            0，默认为 0.00 |

**<span id="get-comment">获取评论</span>**
请求地址：/comment/getcomment
请求参数（必须）：

| 参数名 |           含义            |       说明 |
| ------ | :-----------------------: | ---------: |
| type   |           分类            | 同发送评论 |
| pid    | 硬件、方案、帖子对应的 id |

返回数据：

```
{
    "code": 0,
    "msg": "success",
    "result": [
        {
            "username": "Tab",  // 用户昵称
            "avatar": "/img/userimg.png",   // 用户头像
            "cid": 1,   // 评论id
            "content": "第一条cpu评论", // 评论内容
            "time": "1551083634"    // 时间戳，格式化时间时记得*1000
        }
    ]
}
```
