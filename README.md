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
+ [CPU](#cpu)
   + [CPU分类](#cputypes)
+ [显卡](#graphics)
   + [显卡分类](#graphicstypes)
+ [内存条](#memory)
   + [内存条分类](#memorytypes)
+ [硬盘](#hard-disk)
   + [硬盘分类](#harddisktypes)
+ [主板](#main-board)
   + [主板分类](#mainboardtypes)
+ [配置清单](#list-add)
   + [清单查询](#list-get)

### 接口说明
**<span id="cpu">CPU</span>**

请求地址：/cpu?name=...

请求参数（可选）：

参数名|含义|说明
---|:--:|---:
name|CPU名称|酷睿i5 8500
brand|品牌|Inter
price|价格|价格区间：1200-2000，准确值：1200
series|系列|酷睿i9
slot|插槽|LGA 1151

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
            "image":"https://2b.zol-img.com.cn/product/190_320x240/577/cenD00LUkiNlI.jpg"   // 图片
        }
    ]
}
```

---

**<span id="cputypes">CPU分类信息</span>**

请求地址：/cpu/gettypes?field=brand,series

请求参数（可选）：

参数名|含义|说明
---|:--:|---:
field|需要获取的分类字段|brand,series(中间逗号隔开)

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

参数名|含义|说明
---|:--:|---:
name|显卡名称|七彩虹iGame GeForce RTX 2080 Ti Advanced OC
brand|品牌|七彩虹
price|价格|价格区间：1200-2000，准确值：1200
capacity|显卡容量|11（GB）
chip|显卡芯片|GeForce RTX 2080Ti
image|显卡图片|https://2d.zol-img.com.cn/product/192_320x240/461/ce6ElKKfHpLuU.jpg
type|显卡类型|发烧级

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
            "status": 1
        }
    ]
}
```

**<span id="graphicstypes">显卡分类信息</span>**

请求地址：/graphics/gettypes?filed=...

同CPU分类

---

**<span id="memory">内存条</span>**
请求地址：/memory?name=...
请求参数（可选）：

参数名|含义|说明
---|:--:|---:
name|内存条名称|影驰GAMER 8GB DDR4 2400
brand|品牌|影驰
price|价格|价格区间：1200-2000，准确值：1200
capacity|内存容量|8（GB）
frequency|内存主频|2400（MHz）
image|内存条图片|https://2d.zol-img.com.cn/product/192_320x240/461/ce6ElKKfHpLuU.jpg
type|内存类型|DDR4

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
            "status": 1
        }
    ]
}
```

**<span id="memorytypes">内存条分类信息</span>**

请求地址：/memory/gettypes?filed=...

同CPU分类

---

**<span id="hard-disk">硬盘</span>**

请求地址：/harddisk?name=...

请求参数（可选）：

参数名|含义|说明
---|:--:|---:
name|硬盘名称|西部数据500GB 7200转 16MB SATA3 蓝盘（WD5000AAKX）
brand|品牌|西部数据
price|价格|价格区间：1200-2000，准确值：1200
capacity|硬盘容量|500（GB）
cache|缓存|16（MB）
image|硬盘图片|https://2d.zol-img.com.cn/product/192_320x240/461/ce6ElKKfHpLuU.jpg
speed|转速|7200(rpm)

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
            "status": 1
        }
    ]
}
```

**<span id="harddisktypes">硬盘分类信息</span>**

请求地址：/harddisk/gettypes?filed=...

同CPU分类

---

**<span id="main-board">主板</span>**

请求地址：/mainboard?name=...

请求参数（可选）：

参数名|含义|说明
---|:--:|---:
name|主板名称|华硕TUF B360M-PLUS GAMING S
brand|品牌|华硕
price|价格|价格区间：1200-2000，准确值：1200
cpu_slot|CPU插槽|LGA 1151
version|版型|Micro ATX板型
image|主板图片|https://2d.zol-img.com.cn/product/192_320x240/461/ce6ElKKfHpLuU.jpg
chipset|主芯片组|Intel B360

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
            "status": 1
        }
    ]
}
```

**<span id="mainboardtypes">主板分类信息</span>**

请求地址：/mainborad/gettypes?filed=...

同CPU分类

---

**<span id="list-add">添加配置清单</span>**

请求地址：/list/add  （POST请求）

请求参数（必选）：

参数名|含义|说明
---|:--:|---:
name|方案名称|大神推荐
intro|方案描述|DNF专用配置，嘤嘤辉值得拥有
cpu|cpu名称|Intel 酷睿i9 9900K
graphics|显卡|七彩虹iGame GeForce RTX 2080 Ti Advanced O
memory|内存条|影驰GAMER 8GB DDR4 240
image|图片（可选）|https://2d.zol-img.com.cn/product/192_320x240/461/ce6ElKKfHpLuU.jpg
harddisk|硬盘|希捷Barracuda 1TB 7200转 64MB 单碟（ST1000DM003）
mainboard|主板|华硕TUF B360M-PLUS GAMING S
total|总价|16635
userid|当前用户id|1

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

参数名|含义|说明
---|:--:|---:
id|方案id|2

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